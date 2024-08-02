import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./global/provider";
import LoaderSpin from "./components/LoaderSpin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>
          <div className="p-1 m-2 flex justify-center transition-all duration-300 ">
            <main className="bg-[slate-100] rounded-md h-full w-full lg:w-full xl:w-[80%] border">
              <LoaderSpin children={children} />
            </main>
          </div>
        </body>
      </html>
    </Provider>
  );
}
