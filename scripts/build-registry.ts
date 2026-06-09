import fs from "fs-extra";
import path from "path";
import { globSync } from "glob";

const REGISTRY_PATH = path.join(process.cwd(), "registry");
const PUBLIC_R_PATH = path.join(process.cwd(), "public", "r");

const IGNORE_DEPS = new Set(["react", "react-dom", "next"]);

const TARGET_MAP: Record<string, { base: string; type: string }> = {
  app: { base: "app", type: "registry:page" },
  components: { base: "components", type: "registry:component" },
  ui: { base: "components/ui", type: "registry:ui" },
  lib: { base: "lib", type: "registry:lib" },
  hooks: { base: "hooks", type: "registry:hook" },
};

function extractDeps(content: string): string[] {
  const deps = new Set<string>();
  const importRegex = /from\s+["']([^"']+)["']/g;
  let match: RegExpExecArray | null;

  while ((match = importRegex.exec(content)) !== null) {
    const source = match[1];
    if (source.startsWith(".") || source.startsWith("@/")) continue;

    const pkg = source.startsWith("@")
      ? source.split("/").slice(0, 2).join("/")
      : source.split("/")[0];

    if (!IGNORE_DEPS.has(pkg)) deps.add(pkg);
  }
  return [...deps];
}

function resolve(relPath: string): { target: string; type: string } {
  const segments = relPath.split("/");
  const [folder, ...rest] = segments;
  const map = TARGET_MAP[folder];

  if (!map) {
    return { target: `components/${relPath}`, type: "registry:component" };
  }
  return { target: `${map.base}/${rest.join("/")}`, type: map.type };
}

fs.ensureDirSync(PUBLIC_R_PATH);
console.log("⏳ Building Landix Registry...");

const blockDirs = fs
  .readdirSync(REGISTRY_PATH, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const index: { name: string; type: string }[] = [];

blockDirs.forEach((blockName) => {
  const blockRoot = path.join(REGISTRY_PATH, blockName);

  const relFiles = globSync("**/*.{tsx,ts}", {
    cwd: blockRoot,
    posix: true,
  });

  if (relFiles.length === 0) {
    console.warn(`⚠️  ${blockName}: no files, skipped`);
    return;
  }

  const allDeps = new Set<string>();

  const files = relFiles.map((rel) => {
    const abs = path.join(blockRoot, rel);
    const content = fs.readFileSync(abs, "utf8");
    extractDeps(content).forEach((d) => allDeps.add(d));

    const { target, type } = resolve(rel);
    return {
      path: path.posix.join(blockName, rel),
      content,
      type,
      target,
    };
  });

  const payload = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: blockName,
    type: "registry:block",
    dependencies: [...allDeps].sort(),
    registryDependencies: [],
    files,
  };

  fs.writeJsonSync(path.join(PUBLIC_R_PATH, `${blockName}.json`), payload, {
    spaces: 2,
  });
  index.push({ name: blockName, type: "registry:block" });
  console.log(`✅ ${blockName}.json  (${files.length} files, ${allDeps.size} deps)`);
});

fs.writeJsonSync(
  path.join(PUBLIC_R_PATH, "index.json"),
  { items: index },
  { spaces: 2 }
);

console.log(`🎉 Done. ${index.length} blocks built.`);
