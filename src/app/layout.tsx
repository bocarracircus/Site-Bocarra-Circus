import localFont from "next/font/local";
import "./ui/globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";
import Transition from "./ui/components/transition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/png" sizes="48x48" href="/bocarra_visual/logoRed.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-screen overflow-x-hidden`}
      >
        <Transition>
          <Header />
          {children}
          <Footer />
        </Transition>

      </body>
    </html>
  );
}
