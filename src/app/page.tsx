import { faqs } from "@/app/faqs";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <ul>
      {faqs.map((faq) => (
        <li key={faq.question}>
          <Faq {...faq} />
        </li>
      ))}
    </ul>
  );
}
