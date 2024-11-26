import type { Faq } from "@/types/faq";
import IconPlus from "@/components/icon-plus";
import IconMinus from "@/components/icon-minus";

export default function Faq({ question, answer }: Faq) {
  return (
    <details className="group" name="faq">
      <summary className="flex list-none items-center justify-between">
        <span className="pr-[1.5rem] text-title text-dark-purple dt:text-title-dt">
          {question}
        </span>
        <div className="shrink-0">
          <IconPlus className="group-open:hidden" />
          <IconMinus className="hidden group-open:block" />
        </div>
      </summary>
      <p className="mt-[1.5rem] text-pale-purple">{answer}</p>
    </details>
  );
}
