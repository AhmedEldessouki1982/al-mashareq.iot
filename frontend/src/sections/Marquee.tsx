const items = [
  'Smart locks',
  'Camera systems',
  'Lighting control',
  'Sensor networks',
  'Mesh networking',
  'Local servers',
  'Automation scenes',
  'Custom dashboards',
]

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="flex items-center whitespace-nowrap">
          <span
            className="px-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)] md:px-10 md:text-sm"
            style={{ fontFamily: 'var(--mono)' }}
          >
            {item}
          </span>
          <span className="text-[var(--signal)] opacity-60" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="marquee border-y border-[var(--border-primary)] bg-[var(--bg-secondary)] py-4" role="presentation">
      <div className="marquee-track">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </div>
  )
}
