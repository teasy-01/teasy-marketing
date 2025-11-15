import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQSchema } from './StructuredData';

export function FAQ() {
  const faqs = [
    {
      question: "What makes an adult marketing agency different from a traditional agency?",
      answer: "Adult brands face unique restrictions, platform rules, and audience behaviors. We develop strategies built specifically for adult content, compliance, and performance in this industry."
    },
    {
      question: "Do you work with studios, creators, or adult brands?",
      answer: "We partner with all major segments of the adult industry—studios, platforms, creators, and brands—tailoring our approach to each client's goals and market position."
    },
    {
      question: "Is adult marketing allowed on major social and advertising platforms?",
      answer: "Yes, but with strict guidelines. We know the policies inside and out, allowing us to navigate limitations and still deliver strong, scalable growth."
    },
    {
      question: "How long does it take to see results from adult marketing?",
      answer: "Timing varies by service, but most brands see early momentum within 30–60 days, with larger growth building steadily through our long-term strategy."
    },
    {
      question: "Can you handle both creative and strategy?",
      answer: "Absolutely. We combine high-level strategy with content direction, optimization, and execution to ensure every part of your marketing works together smoothly."
    }
  ];

  return (
    <section id="faq-section" className="bg-white py-32">{/* White background */}
      <FAQSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-black mb-4" style={{ fontSize: '48px', lineHeight: '1.1' }}>Frequently Asked Questions</h2>
          <p className="text-gray-600" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Get answers to common questions about our services, process, and approach.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-black border border-gray-800 rounded-lg px-6 hover:border-[#00A5DF] transition-colors"
            >
              <AccordionTrigger className="text-white hover:text-[#00A5DF] text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}