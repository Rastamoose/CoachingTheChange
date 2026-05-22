import { Star, MessageSquare } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  rating: number;
  category: string;
}

export default function TestimonialCard({ quote, name, title, rating, category }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-xs text-gray-500 font-medium">{category}</span>
      </div>
      <MessageSquare className="w-4 h-4 text-gray-300 mb-2 flex-shrink-0" />
      <p className="text-base text-gray-700 leading-relaxed italic flex-1 mb-4">
        "{quote}"
      </p>
      <div className="border-t border-gray-100 pt-3 mt-auto">
        <p className="font-playfair font-bold text-gray-900 text-sm">{name}</p>
        {title && <p className="text-gray-500 text-sm">{title}</p>}
      </div>
    </div>
  );
}
