import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/header";


export const metadata: Metadata = {
  title: "Avaliação 1",
  description: "Aluna: Kauane Vieira de Menezes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Header op1="Home 🏠" op2="BMI 🏋️‍♂️" op3="Average 📊"/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
