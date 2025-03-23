export function getImagePath(path: string) {
  const basePath = process.env.NODE_ENV === 'production' ? '/wollfcar-vitrine' : '';
  return `${basePath}${path}`;
} 