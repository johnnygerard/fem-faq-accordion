import { faqs } from "@/app/faqs";
import Faq from "@/components/faq";
import IconStar from "@/components/icon-star";

export default function FaqAccordion() {
  return (
    <div className="w-full rounded-[0.5rem] bg-white p-[1.5rem] shadow-[0px_32px_56px_0px_rgba(80,0,118,0.10)] max-dt:max-w-[24rem] dt:w-[37.5rem] dt:rounded-[1rem] dt:p-[2.5rem]">
      <div className="mb-[1.5rem] flex items-center gap-[1.5rem] dt:mb-[2rem]">
        <IconStar />
        <h1 className="text-display text-dark-purple dt:text-display-dt">
          FAQs
        </h1>
      </div>
      <ul>
        {faqs.map((faq) => (
          <li
            key={faq.question}
            className="border-t border-light-pink py-[1.25rem] first:border-none first:pt-0 last:pb-0 dt:py-[1.5rem]"
          >
            <Faq {...faq} />
          </li>
        ))}
      </ul>
    </div>
  );
}
