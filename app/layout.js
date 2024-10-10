import "@/app/_style/globals.css";
import {Josefin_Sans} from 'next/font/google'
import Header from "@/app/_components/Header";

const josefin_sans= Josefin_Sans({
  subsets: ['latin'],
  display:"swap"
})
export const metadata = {
  title:{
    template: "the wild oasis / %s",
    default: "the wild oasis / welcome"
  } ,
  description: "the wild oasis website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.className} bg-primary-950 text-primary-100 flex flex-col min-h-screen antialiased relative`}>
        <Header />
        <div className="flex-1 py-12 px-8 grid ">
          <main className='max-w-7xl mx-auto grid w-full'>
          {children}
          </main>
        </div>
      </body>
    </html>
  );
}
