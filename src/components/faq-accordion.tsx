import { faqs } from "@/app/faqs";
import Faq from "@/components/faq";
import IconStar from "@/components/icon-star";

export default function FaqAccordion() {
  return (
    <div className="w-full bg-white shadow-[0px_32px_56px_0px_rgba(80,0,118,0.10)] max-md:max-w-[24rem] md:w-[37.5rem]">
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
