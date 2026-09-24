import type { Metadata } from "next";
import "./globals.css";

const title = "The Global Food Holding | Commercial Kitchen Solutions";
const description = "End-to-end commercial kitchen design, equipment, project delivery and after-sales support across Sri Lanka and regional markets.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://tgfholding.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "The Global Food Holding commercial kitchen solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
