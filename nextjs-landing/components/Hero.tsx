import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{
      maxWidth: 680,
      margin: '0 auto',
      padding: '6rem 2rem 5rem',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'inline-block',
        background: 'var(--color-surface)',
        border: '0.5px solid var(--color-border)',
        borderRadius: 20,
        fontSize: 11,
        color: 'var(--color-text-secondary)',
        padding: '4px 14px',
        marginBottom: '1.75rem',
        letterSpacing: '0.4px',
        textTransform: 'uppercase',
      }}>
        Now in public beta
      </div>

      <h1 style={{
        fontSize: 'clamp(36px, 6vw, 52px)',
        fontWeight: 400,
        lineHeight: 1.15,
        letterSpacing: '-1.5px',
        marginBottom: '1.25rem',
        color: 'var(--color-text-primary)',
      }}>
        Build faster,<br />ship with confidence
      </h1>

      <p style={{
        fontSize: 17,
        color: 'var(--color-text-secondary)',
        lineHeight: 1.7,
        marginBottom: '2.5rem',
        maxWidth: 520,
        margin: '0 auto 2.5rem',
      }}>
        The modern platform for teams who want clean infrastructure,
        zero config, and production-ready deploys from day one.
      </p>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link
          href="#pricing"
          style={{
            background: 'var(--color-accent)',
            color: '#fff',
            padding: '11px 24px',
            borderRadius: 'var(--radius-md)',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Start for free
        </Link>
        <Link
          href="#"
          style={{
            background: 'transparent',
            color: 'var(--color-text-primary)',
            border: '0.5px solid var(--color-border-strong)',
            padding: '11px 24px',
            borderRadius: 'var(--radius-md)',
            fontSize: 14,
          }}
        >
          View docs →
        </Link>
      </div>
    </section>
  )
}
