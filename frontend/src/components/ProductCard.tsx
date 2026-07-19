import { useState } from 'react';
import { ShoppingCart, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '../store/cart';

interface ProductCardProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category?: { name: string };
}

interface ProductCardProps {
  product: ProductCardProduct;
}

const PROFESSIONAL_THRESHOLD = 3000;

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [imgError, setImgError] = useState(false);

  const isProfessional = Number(product.price) >= PROFESSIONAL_THRESHOLD;

  return (
    <div className="group">
      <div className="rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] overflow-hidden hover:border-[var(--accent-border)] transition-colors duration-200">
        <div className="relative aspect-square bg-[var(--bg-muted)] overflow-hidden">
          {imgError || !product.images?.[0] ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-lg bg-[var(--bg-muted)] flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-[var(--text-faint)]" />
              </div>
              <span className="text-xs text-[var(--text-faint)]">{product.category?.name || 'Product'}</span>
            </div>
          ) : (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.category && (
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-primary)]">
                {product.category.name}
              </span>
            )}
            {isProfessional && (
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)] flex items-center gap-1">
                <Wrench className="w-3 h-3" />
                Professional install
              </span>
            )}
          </div>
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Button
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem({
                  id: product.id,
                  name: product.name,
                  image: product.images?.[0] || '',
                });
              }}
              className="w-full bg-[var(--bg-card)] border border-[var(--border-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-muted)] gap-2 rounded-lg"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Request Quote
            </Button>
          </div>
        </div>

        <div className="p-4">
          {product.category && (
            <p className="text-xs text-[var(--accent)] mb-1 font-medium">{product.category.name}</p>
          )}
          <h3 className="text-sm font-medium text-[var(--text-primary)] mb-2 line-clamp-2" style={{ fontFamily: 'var(--heading)' }}>{product.name}</h3>
        </div>
      </div>
    </div>
  );
}
