import { Footer } from "@/components/native/Footer";
import Header from "@/components/native/Header";

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
