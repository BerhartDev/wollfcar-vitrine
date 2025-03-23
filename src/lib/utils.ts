export function getImagePath(path: string) {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const basePath = process.env.NODE_ENV === 'production' ? '/wollfcar-vitrine' : '';
  return `${basePath}/${cleanPath}`;
} 