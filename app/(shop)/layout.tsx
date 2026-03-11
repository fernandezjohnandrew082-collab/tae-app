import Footer from "@/components/shop/footer";
import Header from "@/components/shop/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  );
}