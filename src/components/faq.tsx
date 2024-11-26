import type { Faq } from "@/types/faq";
import IconPlus from "@/components/icon-plus";
import IconMinus from "@/components/icon-minus";

export default function Faq({ question, answer }: Faq) {
  return (
    <details className="group" name="faq">
      <summary className="flex justify-between items-center list-none">
        <span className="text-title">{question}</span>
        <IconPlus className="group-open:hidden" />
        <IconMinus className="hidden group-open:block" />
      </summary>
      <p>{answer}</p>
    </details>
  );
}
