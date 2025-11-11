import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "სახურავის გადახურვა",
  description: "გთავაზობთ სახურავის გადახურვას ხარისხიანად",
  keywords:
    "სახურავის გადახურვა. დაზიანებული სახურავის შეკეთება. რემონტი. მშენებლობა. ჟეშტიანჩიკი. მეთუნუქე. ჟოლობის დამზადება.კრამიტი.ჟეშტი.",
  openGraph: { type: "website" },
  verification: {
    google: "R3-DvBSI_7qYKM-A3ijRBtg2C1GUAwlyPAcks10GXXI", // REPLACE THIS STRING
  },
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
