import type { Faq } from "@/types/faq";
import Image from "next/image";

export default function Faq({ question, answer }: Faq) {
  return (
    <details className="group" name="faq">
      <summary className="flex justify-between items-center list-none">
        <span>{question}</span>
        <Image
          className="group-open:hidden"
          src="/images/icon-plus.svg"
          alt="Show answer"
          width={30}
          height={30}
        />
        <Image
          className="hidden group-open:block"
          src="/images/icon-minus.svg"
          alt="Hide answer"
          width={30}
          height={30}
        />
      </summary>
      <p>{answer}</p>
    </details>
  );
}
