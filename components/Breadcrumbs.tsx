import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
            {index === items.length - 1 ? (
              <span className="text-gray-400" style={{ fontSize: '14px' }}>
                {item.label}
              </span>
            ) : (
              <a 
                href={item.href}
                className="text-[#00A5DF] hover:underline"
                style={{ fontSize: '14px' }}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
