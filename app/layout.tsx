import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./global/provider";
import LoaderSpin from "./components/LoaderSpin";
import ReduxProvider from "./global/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Flex Squirelly",
  description: "A simple CSS Mastery Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="p-1 m-2 flex justify-center transition-all duration-300 text-blue-950">
            <Provider>
              <main className="bg-[slate-100] rounded-md h-full w-full lg:w-full xl:w-[80%] border overflow-hidden">
                <LoaderSpin children={children} />
              </main>
            </Provider>
          </div>
        </body>
      </html>
    </ReduxProvider>
  );
}
