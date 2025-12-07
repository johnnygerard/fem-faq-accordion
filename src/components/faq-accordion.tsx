import { Accordion } from "radix-ui";
import type { FC } from "react";
import { IconMinus } from "~/components/svg/icon-minus";
import { IconPlus } from "~/components/svg/icon-plus";
import { IconStar } from "~/components/svg/icon-star";
import { faq } from "~/data/faq";

export const FaqAccordion: FC = () => {
  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-[0px_32px_56px_0px_rgba(80,0,118,0.10)] max-dt:max-w-[24rem] dt:w-150 dt:rounded-2xl dt:p-10">
      <div className="mb-6 flex items-center gap-6 dt:mb-8">
        <IconStar />
        <h1 className="text-display text-dark-purple dt:text-display-dt">
          FAQ
        </h1>
      </div>
      <Accordion.Root type="single" collapsible defaultValue="0">
        {faq.map(({ question, answer }, index) => (
          <Accordion.Item
            key={index}
            value={index.toString()}
            className="border-t border-light-pink py-5 first:border-none first:pt-0 last:pb-0 dt:py-6"
          >
            <Accordion.Header asChild>
              <h2>
                <Accordion.Trigger className="group flex w-full items-center justify-between">
                  <span className="mr-6 text-left text-title text-dark-purple transition-colors hover:text-pink dt:text-title-dt">
                    {question}
                  </span>
                  <IconPlus className="shrink-0 group-data-[state=open]:hidden" />
                  <IconMinus className="shrink-0 group-data-[state=closed]:hidden" />
                </Accordion.Trigger>
              </h2>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
              <p className="mt-6 text-pale-purple">{answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};
