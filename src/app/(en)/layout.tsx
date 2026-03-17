import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { en } from "@/i18n";

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header locale="en" dict={en} />
      {children}
      <Footer locale="en" dict={en} />
    </>
  );
}
