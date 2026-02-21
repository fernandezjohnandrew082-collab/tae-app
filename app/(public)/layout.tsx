import Footer from "@/components/footer2";
import Header from "@/components/public/header";

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