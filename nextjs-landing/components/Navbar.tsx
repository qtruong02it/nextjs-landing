'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#' },
  { label: 'Blog', href: '#' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '0.5px solid var(--color-border)',
    }}>
      <div style={{
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 2rem',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-0.3px' }}>
          Acme
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            style={{
              fontSize: 13,
              background: 'var(--color-accent)',
              color: '#fff',
              padding: '7px 16px',
              borderRadius: 'var(--radius-md)',
            }}
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: 4,
            color: 'var(--color-text-primary)',
          }}
          className="mobile-menu-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <path d="M3 12h18M3 6h18M3 18h18" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div style={{
          borderTop: '0.5px solid var(--color-border)',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {links.map(link => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              fontSize: 14,
              background: 'var(--color-accent)',
              color: '#fff',
              padding: '10px 16px',
              borderRadius: 'var(--radius-md)',
              textAlign: 'center',
            }}
          >
            Get started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
