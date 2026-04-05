import Link from 'next/link'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  Support: ['Docs', 'Status', 'Community', 'Contact'],
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: '0.5px solid var(--color-border)',
      padding: '3.5rem 2rem 2rem',
      maxWidth: 1080,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem',
      }}>
        <div style={{ gridColumn: 'span 1' }}>
          <p style={{ fontSize: 15, fontWeight: 500, letterSpacing: '-0.3px', marginBottom: '0.5rem' }}>Acme</p>
          <p style={{ fontSize: 12, color: 'var(--color-text-tertiary)', lineHeight: 1.6 }}>
            Build faster,<br />ship with confidence.
          </p>
        </div>

        {Object.entries(footerLinks).map(([group, items]) => (
          <div key={group}>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.4px', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: '0.9rem' }}>
              {group}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {items.map(item => (
                <li key={item}>
                  <Link href="#" style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        borderTop: '0.5px solid var(--color-border)',
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>
          © {new Date().getFullYear()} Acme, Inc. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Twitter', 'GitHub', 'LinkedIn'].map(social => (
            <Link key={social} href="#" style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>
              {social}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
