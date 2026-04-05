const companies = ['Linear', 'Vercel', 'Stripe', 'Notion', 'Loom', 'Figma']

export default function SocialProof() {
  return (
    <section style={{
      borderTop: '0.5px solid var(--color-border)',
      borderBottom: '0.5px solid var(--color-border)',
      padding: '2.5rem 2rem',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        color: 'var(--color-text-tertiary)',
        marginBottom: '1.5rem',
      }}>
        Trusted by teams at
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(1.5rem, 4vw, 3rem)',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}>
        {companies.map(name => (
          <span
            key={name}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--color-text-tertiary)',
              letterSpacing: '-0.2px',
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
