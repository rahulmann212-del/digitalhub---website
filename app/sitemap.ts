import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.anviaan.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/cookie-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}