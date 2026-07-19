import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, Tags, ShoppingCart, Users, ArrowLeft, Zap, MessageSquare, Settings, Cpu } from 'lucide-react';
import { useAuthStore } from '../../store/auth';
import { api } from '../../lib/api';

const sidebarLinks = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { href: '/admin/products', icon: Package, label: 'Products' },
  { href: '/admin/categories', icon: Tags, label: 'Categories' },
  { href: '/admin/quotes', icon: MessageSquare, label: 'Quotes' },
  { href: '/admin/orders', icon: ShoppingCart, label: 'Orders' },
  { href: '/admin/users', icon: Users, label: 'Users' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

export function AdminLayout() {
  const location = useLocation();
  const { user, token } = useAuthStore();
  const [hasApiKey, setHasApiKey] = useState(false);
  const [footerUsage, setFooterUsage] = useState<{ totalTokens: number; totalCost: number } | null>(null);

  useEffect(() => {
    if (!token) return;
    api.get<{ hasApiKey: boolean }>('/admin/settings', token).then(d => setHasApiKey(d.hasApiKey)).catch(() => {});
    api.get<{ totalTokens: number; totalCost: number }>('/ai/token-usage', token).then(setFooterUsage).catch(() => {});
  }, [token]);

  if (user?.role !== 'ADMIN') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <p className="text-[var(--text-muted)]">Access denied. Admin only.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[var(--bg-primary)]">
      <aside className="w-64 border-r border-[var(--border-primary)] bg-[var(--bg-secondary)] p-4 flex flex-col shrink-0">
        <Link to="/" className="flex items-center gap-2 mb-8 px-2">
          <div className="w-7 h-7 rounded-lg bg-[var(--text-primary)] flex items-center justify-center">
            <Zap className="w-4 h-4 text-[var(--bg-primary)]" />
          </div>
          <span className="font-bold text-[var(--text-primary)]">AL-Mashareq</span>
        </Link>

        <nav className="space-y-1 flex-1">
          {sidebarLinks.map((link) => {
            const isActive = link.exact
              ? location.pathname === link.href
              : location.pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent-border)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-muted)]'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Store
        </Link>
      </aside>

      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <Outlet />
          </div>
        </main>
        <footer className="border-t border-[var(--border-primary)] bg-[var(--bg-secondary)] px-6 py-2 flex items-center justify-between text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>{footerUsage?.totalTokens?.toLocaleString() ?? 0} tokens used</span>
            <span className="text-[var(--text-faint)]">|</span>
            <span>~${(footerUsage?.totalCost ?? 0).toFixed(4)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${hasApiKey ? 'bg-green-500' : 'bg-red-500'}`} />
            <Link to="/admin/settings" className="hover:text-[var(--accent)] transition-colors">
              {hasApiKey ? 'OpenRouter connected' : 'No API key'}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
