import type { Metadata } from "next";
import '@ui/global.css'
import { mulish } from "@ui/fonts";
import Header from "@ui/header";
export const metadata: Metadata = {
  title: "ToDo",
  description: "create and manage your todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased bg-gray-50`}>
        <Header />
        <main className="flex container flex-col items-center mx-auto px-3 py-3 sm:px-6 md:py-10 mt-24">
          {children}
        </main>
        
      </body>
    </html>
  );
}
