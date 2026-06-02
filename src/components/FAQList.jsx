import { CheckCircle2 } from 'lucide-react'

export default function FAQList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.q} className="glass-card p-5">
          <div className="flex gap-3">
            <CheckCircle2 size={17} className="text-snake-green flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-semibold text-white text-base mb-2">{item.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
