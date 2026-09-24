import Link from "next/link";

export default function NotFound() {
  return (
    <div className="country-page" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404 - Page Not Found</h1>
      <p style={{ marginBottom: "2rem", color: "#888" }}>
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="gold-btn">
        Return to Home
      </Link>
    </div>
  );
}
