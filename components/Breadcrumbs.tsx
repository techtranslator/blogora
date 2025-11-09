import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link href={item.href} className="hover:text-primary transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-foreground">{item.name}</span>
          )}
          {index < items.length - 1 && <ChevronRight className="w-4 h-4 mx-2" />}
        </div>
      ))}
    </nav>
  );
}