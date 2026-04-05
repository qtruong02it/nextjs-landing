'use client'

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  company: string
  message: string
}

const initialState: FormState = { name: '', email: '', company: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    // Replace with your form handler (e.g. Resend, Formspree, your own API route)
    try {
      await new Promise(r => setTimeout(r, 900)) // simulate request
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%',
    height: 40,
    padding: '0 14px',
    fontSize: 14,
    border: '0.5px solid var(--color-border-strong)',
    borderRadius: 'var(--radius-md)' as const,
    background: 'var(--color-bg)',
    color: 'var(--color-text-primary)',
    outline: 'none',
  }

  return (
    <section id="contact" style={{ padding: '5rem 2rem', maxWidth: 640, margin: '0 auto' }}>
      <p style={{
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        color: 'var(--color-text-tertiary)',
        marginBottom: '0.75rem',
        textAlign: 'center',
      }}>
        Contact
      </p>
      <h2 style={{
        fontSize: 'clamp(24px, 4vw, 34px)',
        fontWeight: 400,
        letterSpacing: '-0.8px',
        textAlign: 'center',
        marginBottom: '0.75rem',
      }}>
        Get in touch
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--color-text-secondary)',
        textAlign: 'center',
        marginBottom: '2.5rem',
        lineHeight: 1.6,
      }}>
        Have a question or want to discuss enterprise options? We&apos;ll get back to you within one business day.
      </p>

      {status === 'success' ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          border: '0.5px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-surface)',
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: 12, color: 'var(--color-text-secondary)' }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>Message sent</p>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>We&apos;ll be in touch soon.</p>
          <button
            onClick={() => setStatus('idle')}
            style={{
              marginTop: '1.25rem',
              fontSize: 13,
              background: 'none',
              border: '0.5px solid var(--color-border-strong)',
              color: 'var(--color-text-secondary)',
              padding: '7px 16px',
              borderRadius: 'var(--radius-md)',
            }}
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label style={{ fontSize: 12, color: 'var(--color-text-secondary)', display: 'block', marginBottom: 6 }}>
                Name <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input required type="text" value={form.name} onChange={update('name')} placeholder="Jane Smith" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 12, color: 'var(--color-text-secondary)', display: 'block', marginBottom: 6 }}>
                Email <span style={{ color: '#dc2626' }}>*</span>
              </label>
              <input required type="email" value={form.email} onChange={update('email')} placeholder="jane@acme.com" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, color: 'var(--color-text-secondary)', display: 'block', marginBottom: 6 }}>
              Company
            </label>
            <input type="text" value={form.company} onChange={update('company')} placeholder="Acme Inc." style={inputStyle} />
          </div>

          <div>
            <label style={{ fontSize: 12, color: 'var(--color-text-secondary)', display: 'block', marginBottom: 6 }}>
              Message <span style={{ color: '#dc2626' }}>*</span>
            </label>
            <textarea
              required
              value={form.message}
              onChange={update('message')}
              placeholder="Tell us how we can help…"
              rows={5}
              style={{
                ...inputStyle,
                height: 'auto',
                padding: '10px 14px',
                resize: 'vertical',
                lineHeight: 1.6,
              }}
            />
          </div>

          {status === 'error' && (
            <p style={{ fontSize: 13, color: '#dc2626' }}>Something went wrong — please try again.</p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              alignSelf: 'flex-start',
              padding: '10px 22px',
              fontSize: 14,
              fontWeight: 500,
              background: 'var(--color-accent)',
              color: '#fff',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              opacity: status === 'loading' ? 0.6 : 1,
              transition: 'opacity 0.15s',
            }}
          >
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </section>
  )
}
