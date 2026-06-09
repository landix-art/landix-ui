import { Footer } from "@/components/native/Footer";
import Header from "@/components/native/Header";
import "../globals.css";

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
