const isProduction = process.env.NODE_ENV === 'production';
const repoName = 'wollfcar-vitrine';

export function getImagePath(path: string) {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const prefix = isProduction ? `/${repoName}` : '';
  return `${prefix}/${cleanPath}`;
} 