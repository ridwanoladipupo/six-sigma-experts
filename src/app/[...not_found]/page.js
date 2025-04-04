export async function generateStaticParams() {
  return [
    { not_found: ["example-page"] }, // Add static paths
    { not_found: ["another-page"] },
  ];
}

export default function NotFoundPage({ params }) {
  return <h1>Page Not Found: {params.not_found.join("/")}</h1>;
}
