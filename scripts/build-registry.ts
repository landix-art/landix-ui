import fs from "fs-extra";
import path from "path";
import { globSync } from "glob";

const REGISTRY_PATH = path.join(process.cwd(), "registry");
const PUBLIC_R_PATH = path.join(process.cwd(), "public", "r");

fs.ensureDirSync(PUBLIC_R_PATH);

console.log("⏳ Building Landix Registry...");

const componentFiles = globSync("**/*.tsx", { cwd: REGISTRY_PATH, posix: true });

componentFiles.forEach((file) => {
  if (file.startsWith("lib") || file.startsWith("hooks")) return;

  const filePath = path.join(REGISTRY_PATH, file);
  const fileContent = fs.readFileSync(filePath, "utf8");
  
  const componentName = path.basename(file, ".tsx");
  const type = file.startsWith("blocks") ? "registry:block" : "registry:ui";

  const registryPayload = {
    name: componentName,
    type: type,
    dependencies: ["framer-motion", "lucide-react", "clsx", "tailwind-merge"],
    registryDependencies: [],
    files: [
      {
        path: file,
        content: fileContent,
        type: type,
        target: `components/${file}`, 
      },
    ],
  };

  const jsonPath = path.join(PUBLIC_R_PATH, `${componentName}.json`);
  fs.writeJsonSync(jsonPath, registryPayload, { spaces: 2 });
  console.log(`✅ Generated: ${componentName}.json`);
});

console.log("🎉 Registry build complete!");
