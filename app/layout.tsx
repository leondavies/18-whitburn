import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "18 Whitburn Avenue, Halswell | 4 Bed Architectural Home For Sale",
  description:
    "For sale by private negotiation: Stunning 4-bedroom, 2-bathroom architectural residence in Milns Park, Halswell. 209m² floor area on 607m² corner site. Features include indoor-outdoor flow, covered alfresco, dual living areas, and hot tub. Contact Karen Davies to arrange a viewing.",
  keywords: [
    "18 Whitburn Avenue",
    "Halswell house for sale",
    "Milns Park property",
    "Christchurch real estate",
    "4 bedroom house Halswell",
    "private sale Christchurch",
    "architectural home Halswell",
    "corner site property",
    "indoor outdoor living",
  ],
  authors: [{ name: "Karen Davies" }],
  creator: "Karen Davies",
  publisher: "Private Sale",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    siteName: "18 Whitburn Avenue - Private Sale",
    title: "18 Whitburn Avenue, Halswell | Architectural 4 Bed Home",
    description:
      "Refined 4-bedroom residence in sought-after Milns Park. 209m² of considered living on a 607m² corner site with indoor-outdoor flow, dual living, and covered alfresco entertaining.",
    images: [
      {
        url: "https://res.cloudinary.com/dioazaxrs/image/upload/v1774428232/1001_lvdyrn.jpg",
        width: 1200,
        height: 630,
        alt: "18 Whitburn Avenue, Halswell - Rear exterior with outdoor entertaining area",
      },
      {
        url: "https://res.cloudinary.com/dioazaxrs/image/upload/v1774428234/1007_1_qipzqq.jpg",
        width: 1200,
        height: 630,
        alt: "18 Whitburn Avenue - Indoor outdoor flow with timber ceiling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "18 Whitburn Avenue, Halswell | 4 Bed Home For Sale",
    description:
      "Stunning architectural residence in Milns Park. 4 beds, 2 baths, 209m² on corner site. Private sale.",
    images: ["https://res.cloudinary.com/dioazaxrs/image/upload/v1774428232/1001_lvdyrn.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg" },
    ],
  },
  manifest: "/site.webmanifest",
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
