import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How fast can AD FutureStack start on a project?',
    a: 'We can typically assemble and onboard a dedicated senior engineering pod within 5 to 10 business days after scope finalization.'
  },
  {
    q: 'Do you offer ongoing SLA support after launch?',
    a: 'Yes. We provide 24/7 APM monitoring, security patch management, performance audits, and guaranteed SLA response times.'
  },
  {
    q: 'Who owns the intellectual property (IP)?',
    a: 'You do. Upon project delivery and signoff, 100% of the code, repositories, configurations, and intellectual property belong entirely to your company.'
  },
  {
    q: 'What engagement models do you support?',
    a: 'We support fixed-scope enterprise deliverables, monthly engineering retainers, and embedded staff augmentation.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="my-16 space-y-6 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 uppercase">Frequently Asked Questions</h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-violet-600 transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`h-5 w-5 text-violet-600 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
