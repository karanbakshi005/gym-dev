// lib/magnolia.ts

export async function fetchFromMagnolia(path: string) {
  const base = process.env.MAGNOLIA_BASE_URL;
  const apiKey = process.env.MAGNOLIA_API_KEY;

  const url = `${base}/${path}`;

  const res = await fetch(url, {
    headers: {
      Authorization: apiKey ? `Bearer ${apiKey}` : undefined,
    },
    next: { revalidate: 60 },
  });

  return res.json();
}

