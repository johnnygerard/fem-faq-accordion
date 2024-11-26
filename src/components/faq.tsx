import type { Faq } from "@/types/faq";
import IconPlus from "@/components/icon-plus";
import IconMinus from "@/components/icon-minus";

export default function Faq({ question, answer }: Faq) {
  return (
    <details className="group" name="faq">
      <summary className="flex list-none items-center justify-between">
        <span className="text-title text-dark-purple">{question}</span>
        <IconPlus className="group-open:hidden" />
        <IconMinus className="hidden group-open:block" />
      </summary>
      <p className="text-pale-purple">{answer}</p>
    </details>
  );
}
