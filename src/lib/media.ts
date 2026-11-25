import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

export interface ImageDimensions {
  width: number;
  height: number;
}

const dimensionCache = new Map<string, ImageDimensions>();

export async function getPublicImageDimensions(
  src: string | undefined,
  fallback: ImageDimensions = { width: 1400, height: 1050 }
): Promise<ImageDimensions> {
  if (!src || !src.startsWith('/')) {
    return fallback;
  }

  const cached = dimensionCache.get(src);
  if (cached) return cached;

  const cleanPath = src.split('?')[0].replace(/^\/+/, '');
  const diskPath = path.resolve(process.cwd(), 'public', cleanPath);

  try {
    if (fs.existsSync(diskPath)) {
      const meta = await sharp(diskPath).metadata();
      if (meta.width && meta.height) {
        const dims = { width: meta.width, height: meta.height };
        dimensionCache.set(src, dims);
        return dims;
      }
    }
  } catch {
    // Fall back to explicit aspect dimensions if metadata read fails
  }

  return fallback;
}
