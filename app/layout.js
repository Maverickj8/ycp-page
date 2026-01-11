import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdvertBanner from "@/components/AdvertBanner";

export const metadata = {
  title: "YCP - Young Catholic Professionals",
  description:
    "Young Catholic Professionals - Building a strong community of faith and professional excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen overflow-visible">
        <div className="sticky top-0 z-[100]">
          <AdvertBanner />
          <Navigation />
        </div>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
