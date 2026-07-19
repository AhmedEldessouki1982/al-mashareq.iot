import { useRef, useEffect, useState } from 'react';
import { Lightbulb, Shield, Wifi, Cpu, CreditCard } from 'lucide-react';

const features = [
  { icon: Lightbulb, title: 'Lighting that listens', description: 'Dim, schedule, and colour-match your lights from your phone or by voice.' },
  { icon: Shield, title: 'Locks you can check', description: 'Know your door is locked, grant temporary access, or let yourself in remotely.' },
  { icon: Wifi, title: 'Networks that stay up', description: 'Mesh WiFi, managed switches, and outdoor access points — all configured on install.' },
  { icon: Cpu, title: 'Your own server', description: 'Run automations locally on a NAS or rack server. No cloud subscription needed.' },
  { icon: CreditCard, title: 'Pay in EGP', description: 'Fawry, Vodafone Cash, or card. No conversion fees, no foreign transaction.' },
];

export function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 md:py-28 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-wide uppercase text-[var(--accent)] mb-3">What we sell</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--heading)' }}
          >
            Real hardware. Real control.
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-primary)] bg-[var(--bg-card)] p-5 hover:border-[var(--accent-border)] transition-colors duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-[var(--bg-muted)] flex items-center justify-center mb-3">
                <Icon className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1.5">{title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
