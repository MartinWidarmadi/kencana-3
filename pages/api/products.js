import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "products.json");

  try {
    const jsonData = await fs.readFile(filePath, "utf8");
    const products = JSON.parse(jsonData);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error reading products file" });
  }
}
