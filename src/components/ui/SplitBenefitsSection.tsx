import { CircleCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SplitSection, SplitItem } from '../../data/serviceDetails';

interface AccentScheme {
  headerBg: string;
  checkIcon: string;
  lineBg: string;
}

function SplitColumn({ label, icon: Icon, items, accent }: {
  label: string;
  icon?: LucideIcon;
  items: SplitItem[];
  accent: AccentScheme;
}) {
  return (
    <div className={`${accent.headerBg} border border-gray-200 rounded-xl p-6`}>
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-200">
        {Icon && <Icon className={`w-5 h-5 ${accent.checkIcon} flex-shrink-0`} />}
        <h4 className="font-playfair font-bold text-gray-900 text-base">{label}</h4>
      </div>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <CircleCheck className={`w-5 h-5 ${accent.checkIcon} mt-0.5 flex-shrink-0`} />
            <div>
              <p className="font-playfair font-bold text-base text-gray-900 mb-1">{item.title}</p>
              <p className="text-base text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Props {
  section: SplitSection;
  accent: AccentScheme;
}

export default function SplitBenefitsSection({ section, accent }: Props) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-8 h-0.5 flex-shrink-0 rounded-full ${accent.lineBg}`} />
        <h3 className="font-playfair font-bold text-gray-900 text-lg">{section.sectionTitle}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SplitColumn
          label={section.leftLabel}
          icon={section.leftIcon}
          items={section.leftItems}
          accent={accent}
        />
        <SplitColumn
          label={section.rightLabel}
          icon={section.rightIcon}
          items={section.rightItems}
          accent={accent}
        />
      </div>
    </div>
  );
}
