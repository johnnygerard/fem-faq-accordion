import { faqs } from "@/app/faqs";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      <h1 className="text-display">FAQs</h1>
      <ul>
        {faqs.map((faq) => (
          <li key={faq.question}>
            <Faq {...faq} />
          </li>
        ))}
      </ul>
    </>
  );
}
