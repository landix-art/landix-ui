import { Footer } from "@/components/native/Footer";
import "@/assets/css/index.css";
import Navbar from "@/components/native/Header";
import { TasteProvider } from "@/contexts/TasteContext";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      <TasteProvider>
        <Navbar />
        {children}

        <Footer />
      </TasteProvider>
    </>
  );
}
