import sharp from 'sharp'

const bufferToBase64 = (buffer: Buffer): string =>
  `data:image/png;base64,${buffer.toString('base64')}`

const getFileBuffer = async (url: string) => {
  const response = await fetch(url)
  return Buffer.from(await response.arrayBuffer())
}

export const getBase64Image = async (filepath: string) => {
  try {
    const originalBuffer = await getFileBuffer(filepath)
    const buffer = await sharp(originalBuffer).toBuffer()
    return bufferToBase64(buffer)
  } catch {
    return ''
  }
}
