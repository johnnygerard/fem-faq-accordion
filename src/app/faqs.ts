import fs from "node:fs/promises";
import path from "node:path";

const text = await fs.readFile(path.resolve("data/faq.json"), "utf-8");
export const faqs: { question: string; answer: string }[] = JSON.parse(text);
