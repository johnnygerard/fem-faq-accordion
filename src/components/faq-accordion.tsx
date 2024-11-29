import { faqs } from "@/app/faqs";
import IconStar from "@/components/icon-star";
import * as Accordion from "@radix-ui/react-accordion";
import IconPlus from "@/components/icon-plus";
import IconMinus from "@/components/icon-minus";

export default function FaqAccordion() {
  return (
    <div className="w-full rounded-[0.5rem] bg-white p-[1.5rem] shadow-[0px_32px_56px_0px_rgba(80,0,118,0.10)] max-dt:max-w-[24rem] dt:w-[37.5rem] dt:rounded-[1rem] dt:p-[2.5rem]">
      <div className="mb-[1.5rem] flex items-center gap-[1.5rem] dt:mb-[2rem]">
        <IconStar />
        <h1 className="text-display text-dark-purple dt:text-display-dt">
          FAQs
        </h1>
      </div>
      <Accordion.Root type="single" collapsible defaultValue="0">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={index.toString()}
            className="border-t border-light-pink py-[1.25rem] first:border-none first:pt-0 last:pb-0 dt:py-[1.5rem]"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between">
                <span className="mr-[1.5rem] text-left text-title text-dark-purple transition-colors hover:text-pink dt:text-title-dt">
                  {faq.question}
                </span>
                <IconPlus className="shrink-0 group-data-[state=open]:hidden" />
                <IconMinus className="shrink-0 group-data-[state=closed]:hidden" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="mt-[1.5rem] text-pale-purple">
              {faq.answer}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
