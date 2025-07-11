import { siteConfig } from "@/config/config";
import { SectionHeader } from "../section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function FAQSection() {
  const { faqSection } = siteConfig;

  return (
    <section id="faq" className="relative flex w-full flex-col items-center justify-center gap-10 pb-10">
      <SectionHeader>
        <h2 className="text-balance text-center text-3xl font-medium tracking-tighter md:text-4xl">{faqSection.title}</h2>
        <p className="text-muted-foreground text-balance text-center font-medium">{faqSection.description}</p>
      </SectionHeader>

      <div className="mx-auto w-full max-w-3xl px-10">
        <Accordion type="single" collapsible className="grid w-full gap-2 border-b-0">
          {faqSection.faQitems.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()} className="grid gap-2 border-0">
              <AccordionTrigger className="bg-accent border-border data-[state=open]:ring-primary/20 cursor-pointer rounded-lg border px-4 py-3.5 no-underline hover:no-underline data-[state=open]:ring">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-primary bg-accent rounded-lg border p-3">
                <p className="text-primary font-medium leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
