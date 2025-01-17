import "./globals.css";
import Navbar from "@/Components/navbar/Navbar";
import Footer from "@/Components/footer/Footer";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='container'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

