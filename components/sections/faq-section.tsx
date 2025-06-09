import { SectionHeader } from "@/components/ui/section-header"
import { FAQItem } from "@/components/ui/faq-item"

interface FAQSectionProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-4">
        <SectionHeader title="Frequently Asked" highlight="Questions" />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
