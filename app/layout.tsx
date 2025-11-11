import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "სახურავის გადახურვა",
  description: "გთავაზობთ სახურავის გადახურვას ხარისხიანად",
  keywords:
    "სახურავის გადახურვა. დაზიანებული სახურავის შეკეთება. რემონტი. მშენებლობა. ჟეშტიანჩიკი. მეთუნუქე. ჟოლობის დამზადება.კრამიტი.ჟეშტი.",
  openGraph: { type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-slate-50`}>{children}</body>
    </html>
  );
}
