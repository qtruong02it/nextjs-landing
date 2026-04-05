const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Instant deploys',
    description: 'Push to main and your site is live in seconds. Zero configuration required.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Edge runtime',
    description: 'Run your code closer to your users with global edge distribution built in.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Built-in security',
    description: 'Automatic HTTPS, DDoS protection, and environment variable management.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Analytics',
    description: 'Real-time metrics, Web Vitals, and user behavior all in one dashboard.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Team collaboration',
    description: 'Invite teammates, manage roles, and review deployments together.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Open APIs',
    description: 'Integrate with your existing tools using our RESTful and GraphQL APIs.',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '5rem 2rem', maxWidth: 1080, margin: '0 auto' }}>
      <p style={{
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        color: 'var(--color-text-tertiary)',
        marginBottom: '0.75rem',
        textAlign: 'center',
      }}>
        Features
      </p>
      <h2 style={{
        fontSize: 'clamp(24px, 4vw, 34px)',
        fontWeight: 400,
        letterSpacing: '-0.8px',
        textAlign: 'center',
        marginBottom: '3rem',
      }}>
        Everything your team needs
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '0.5px',
        background: 'var(--color-border)',
        border: '0.5px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}>
        {features.map(f => (
          <div
            key={f.title}
            style={{
              background: 'var(--color-bg)',
              padding: '1.75rem',
            }}
          >
            <div style={{
              width: 30,
              height: 30,
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
              color: 'var(--color-text-secondary)',
            }}>
              {f.icon}
            </div>
            <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{f.title}</h3>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
