import { faqs } from "@/app/faqs";
import Faq from "@/components/faq";
import IconStar from "@/components/icon-star";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="flex items-center gap-[1.5rem]">
        <IconStar />
        <h1 className="text-display text-dark-purple">FAQs</h1>
      </div>
      <ul>
        {faqs.map((faq) => (
          <li
            key={faq.question}
            className="border-t border-light-pink first:border-none"
          >
            <Faq {...faq} />
          </li>
        ))}
      </ul>
    </div>
  );
}
