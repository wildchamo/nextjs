export async function imageToBuffer(image) {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  let end = buffer.toString("base64");
  return end;
}
