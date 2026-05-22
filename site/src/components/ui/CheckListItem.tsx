import { Check } from 'lucide-react';

interface CheckListItemProps {
  text: string;
  align?: 'left' | 'center';
}

export default function CheckListItem({ text, align = 'left' }: CheckListItemProps) {
  return (
    <li className={`flex items-start gap-3 ${align === 'center' ? 'justify-center text-center' : ''}`}>
      <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
      <span className="text-gray-600 text-base">{text}</span>
    </li>
  );
}
