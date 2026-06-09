import { Footer } from "@/components/native/Footer";
import Header from "@/components/native/Header";
import "@/assets/css/index.css";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      {children}
      
      <Footer />
    </>
  );
}
