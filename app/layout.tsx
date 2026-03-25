import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "18 Whitburn Avenue | Halswell, Christchurch",
  description:
    "A refined 4-bedroom residence in sought-after Milns Park. 209m² of considered living on a 607m² corner site. Indoor-outdoor flow, modern amenities, architectural presence.",
  openGraph: {
    title: "18 Whitburn Avenue | Halswell, Christchurch",
    description:
      "A refined 4-bedroom residence in sought-after Milns Park, Halswell.",
    images: [
      {
        url: "https://res.cloudinary.com/dioazaxrs/image/upload/v1774428232/1020_gcy49b.jpg",
        width: 1200,
        height: 630,
        alt: "18 Whitburn Avenue - Street view",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-stone-50 text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
