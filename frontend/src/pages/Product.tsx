import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Minus, Plus, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '../store/cart';
import { api } from '../lib/api';

interface ProductData {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  stock: number;
  images: string[];
  category: { id: string; name: string; slug: string };
}

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [imgError, setImgError] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    api.get<ProductData>(`/products/${id}`)
      .then(setProduct)
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center shop-dark">
        <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 shop-dark">
        <p className="text-white/50">Product not found</p>
        <Link to="/shop">
          <Button variant="outline" className="gap-2 border-white/10 text-white hover:bg-white/5">
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Button>
        </Link>
      </div>
    );
  }

  const isProfessional = Number(product.price) >= 3000;

  return (
    <div className="min-h-screen shop-dark relative">
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10">
              {imgError || !product.images?.[0] ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-white/20" />
                  </div>
                  <span className="text-sm text-white/30">{product.category?.name}</span>
                </div>
              ) : (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-[var(--accent)] font-medium mb-2">
              {product.category?.name}
            </span>
            <h1
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--heading)' }}
            >
              {product.name}
            </h1>
            <p className="text-white/50 leading-relaxed mb-6">{product.description}</p>

            {isProfessional && (
              <div className="flex items-center gap-2 mb-4 px-3 py-2 rounded-lg bg-[var(--accent-muted)] border border-[var(--accent-border)] w-fit">
                <Wrench className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--accent)] font-medium">Professional installation available</span>
              </div>
            )}

            <p className="text-sm text-white/40 mb-6">
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 rounded-md flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-white font-medium" style={{ fontFamily: 'var(--mono)' }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 rounded-md flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <Button
                onClick={() => addItem({
                  id: product.id,
                  name: product.name,
                  image: product.images?.[0] || '',
                })}
                className="flex-1 h-12 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[#1A1A1A] font-semibold rounded-lg gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Request Quote
              </Button>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-3">
              {['30-day return policy', 'Secure checkout with Fawry support'].map((text) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/40">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
