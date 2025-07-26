"use client";

export async function getTaxonomyTerms(taxonomy) {
  const res = await fetch(`https://your-wp-site.com/wp-json/wp/v2/${taxonomy}?per_page=100`);
  if (!res.ok) throw new Error('Failed to fetch taxonomy terms');
  return res.json();
}
