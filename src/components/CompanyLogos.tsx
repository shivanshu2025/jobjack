import { Music, MessageSquare, Layers, FileText, Zap, CreditCard, PenTool, CheckSquare } from 'lucide-react';

const companies = [
  { name: 'Figma', icon: PenTool },
  { name: 'Stripe', icon: CreditCard },
  { name: 'Spotify', icon: Music },
  { name: 'Slack', icon: MessageSquare },
  { name: 'Adobe', icon: Layers },
  { name: 'Notion', icon: FileText },
  { name: 'Linear', icon: Zap },
  { name: 'Asana', icon: CheckSquare },
  { name: 'Figma', icon: PenTool },
  { name: 'Stripe', icon: CreditCard },
  { name: 'Spotify', icon: Music },
  { name: 'Slack', icon: MessageSquare },
  { name: 'Adobe', icon: Layers },
  { name: 'Notion', icon: FileText },
  { name: 'Linear', icon: Zap },
  { name: 'Asana', icon: CheckSquare },
];

export default function CompanyLogos() {
  return (
    <section className="bg-[#0b0f1a] py-10 md:py-12 overflow-hidden">
      <p className="text-center text-gray-500 text-xs font-medium mb-8 uppercase tracking-[0.15em]">
        Trusted by leading companies worldwide
      </p>
      
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee gap-4 md:gap-6 items-center flex-nowrap">
          {[...companies, ...companies].map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 hover:border-white/15 transition-all duration-300 hover:scale-105 cursor-pointer shrink-0"
              >
                <Icon 
                  size={16} 
                  className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300" 
                  strokeWidth={1.5}
                />
                <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-300 whitespace-nowrap">
                  {c.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
