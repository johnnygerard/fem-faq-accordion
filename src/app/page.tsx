import { faqs } from "@/app/faqs";
import Faq from "@/components/faq";
import IconStar from "@/components/icon-star";

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-[1.5rem]">
        <IconStar />
        <h1 className="text-display">FAQs</h1>
      </div>
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
