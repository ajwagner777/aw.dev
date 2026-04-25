import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join, basename, extname } from 'path'

const INPUT_DIR = 'public/images'
const OUTPUT_DIR = 'public/images'

// Desktop: 1920px wide, quality 80
// Mobile: 800px wide, quality 75
const VARIANTS = [
  { suffix: '', width: 1920, jpegQ: 80, webpQ: 80 },
  { suffix: '-mobile', width: 800, jpegQ: 75, webpQ: 75 },
]

const textures = readdirSync(INPUT_DIR).filter(f => f.startsWith('texture-') && extname(f) === '.jpg')

for (const file of textures) {
  const name = basename(file, '.jpg')
  const src = join(INPUT_DIR, file)

  for (const { suffix, width, jpegQ, webpQ } of VARIANTS) {
    const base = `${OUTPUT_DIR}/${name}${suffix}`
    const img = sharp(src).resize({ width, withoutEnlargement: true })

    // WebP
    await img.clone().webp({ quality: webpQ }).toFile(`${base}.webp`)
    console.log(`✓ ${base}.webp`)

    // Optimised JPEG (strip EXIF)
    await img.clone().jpeg({ quality: jpegQ, mozjpeg: true }).toFile(`${base}-opt.jpg`)
    console.log(`✓ ${base}-opt.jpg`)
  }
}

console.log('\nDone.')
