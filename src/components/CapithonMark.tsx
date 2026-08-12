export function CapithonMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`capithon-mark ${compact ? 'is-compact' : ''}`} aria-label="Capithon">
      <svg viewBox="0 0 44 44" role="img" aria-hidden="true">
        <path d="M10 8h15l9 9-12 19H10l8-14L10 8Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M18 22h13" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="10" cy="8" r="2.5" fill="currentColor" />
      </svg>
      {!compact && <span>CAPITHON</span>}
    </div>
  )
}
