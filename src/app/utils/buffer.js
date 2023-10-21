export async function imageToBuffer(image) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return buffer.toString("base64");
  }