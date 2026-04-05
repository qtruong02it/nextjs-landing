'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    // Replace with your actual newsletter API (e.g. Resend, Mailchimp, ConvertKit)
    try {
      await new Promise(r => setTimeout(r, 800)) // simulate request
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section style={{
      background: 'var(--color-surface)',
      borderTop: '0.5px solid var(--color-border)',
      borderBottom: '0.5px solid var(--color-border)',
      padding: '4rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(20px, 3vw, 26px)',
          fontWeight: 400,
          letterSpacing: '-0.6px',
          marginBottom: '0.6rem',
        }}>
          Stay in the loop
        </h2>
        <p style={{
          fontSize: 14,
          color: 'var(--color-text-secondary)',
          marginBottom: '1.75rem',
          lineHeight: 1.6,
        }}>
          Get product updates, release notes, and early access to new features.
          No spam, unsubscribe anytime.
        </p>

        {status === 'success' ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            fontSize: 14,
            color: 'var(--color-text-secondary)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            You&apos;re subscribed — thanks!
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@company.com"
              style={{
                flex: '1 1 220px',
                maxWidth: 300,
                height: 40,
                padding: '0 14px',
                fontSize: 14,
                border: '0.5px solid var(--color-border-strong)',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg)',
                color: 'var(--color-text-primary)',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                height: 40,
                padding: '0 20px',
                fontSize: 13,
                fontWeight: 500,
                background: 'var(--color-accent)',
                color: '#fff',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                opacity: status === 'loading' ? 0.6 : 1,
                transition: 'opacity 0.15s',
              }}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p style={{ fontSize: 13, color: '#dc2626', marginTop: '0.75rem' }}>
            Something went wrong — please try again.
          </p>
        )}
      </div>
    </section>
  )
}
