'use client'

import { useState } from 'react'
import Link from 'next/link'

const plans = [
  {
    name: 'Hobby',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'For personal projects and experimentation.',
    features: ['1 project', '100 deploys / month', '1 GB bandwidth', 'Community support'],
    cta: 'Start for free',
    featured: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 19,
    yearlyPrice: 15,
    description: 'For small teams shipping production apps.',
    features: ['Unlimited projects', 'Unlimited deploys', '100 GB bandwidth', 'Analytics dashboard', 'Priority support'],
    cta: 'Get started',
    featured: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    description: 'For large teams with custom requirements.',
    features: ['Everything in Pro', 'SSO & SAML', 'SLA guarantee', 'Custom contracts', 'Dedicated support'],
    cta: 'Contact sales',
    featured: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" style={{ padding: '5rem 2rem', maxWidth: 1080, margin: '0 auto' }}>
      <p style={{
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        color: 'var(--color-text-tertiary)',
        textAlign: 'center',
        marginBottom: '0.75rem',
      }}>
        Pricing
      </p>
      <h2 style={{
        fontSize: 'clamp(24px, 4vw, 34px)',
        fontWeight: 400,
        letterSpacing: '-0.8px',
        textAlign: 'center',
        marginBottom: '1rem',
      }}>
        Simple, transparent pricing
      </h2>

      {/* Toggle */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: '3rem' }}>
        <span style={{ fontSize: 13, color: yearly ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)' }}>Monthly</span>
        <button
          onClick={() => setYearly(!yearly)}
          aria-label="Toggle billing period"
          style={{
            width: 40,
            height: 22,
            borderRadius: 11,
            background: yearly ? 'var(--color-accent)' : 'var(--color-border-strong)',
            border: 'none',
            position: 'relative',
            transition: 'background 0.2s',
          }}
        >
          <span style={{
            position: 'absolute',
            top: 3,
            left: yearly ? 21 : 3,
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#fff',
            transition: 'left 0.2s',
          }} />
        </button>
        <span style={{ fontSize: 13, color: yearly ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)' }}>
          Yearly
          <span style={{
            marginLeft: 6,
            fontSize: 11,
            background: '#ecfdf5',
            color: '#065f46',
            padding: '2px 7px',
            borderRadius: 20,
          }}>−20%</span>
        </span>
      </div>

      {/* Plans */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 16,
      }}>
        {plans.map(plan => (
          <div
            key={plan.name}
            style={{
              background: 'var(--color-bg)',
              border: plan.featured ? '1.5px solid var(--color-accent)' : '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.75rem',
              position: 'relative',
            }}
          >
            {plan.featured && (
              <div style={{
                position: 'absolute',
                top: -11,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--color-accent)',
                color: '#fff',
                fontSize: 11,
                padding: '3px 12px',
                borderRadius: 20,
                whiteSpace: 'nowrap',
                letterSpacing: '0.3px',
              }}>
                Most popular
              </div>
            )}

            <h3 style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>{plan.name}</h3>
            <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
              {plan.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              {plan.monthlyPrice !== null ? (
                <>
                  <span style={{ fontSize: 32, fontWeight: 400, letterSpacing: '-1px' }}>
                    ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginLeft: 4 }}>/mo</span>
                </>
              ) : (
                <span style={{ fontSize: 26, fontWeight: 400, letterSpacing: '-0.5px' }}>Custom</span>
              )}
            </div>

            <ul style={{ listStyle: 'none', marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {plan.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--color-text-secondary)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={plan.name === 'Enterprise' ? '#contact' : '#'}
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '10px 0',
                borderRadius: 'var(--radius-md)',
                fontSize: 13,
                fontWeight: 500,
                background: plan.featured ? 'var(--color-accent)' : 'transparent',
                color: plan.featured ? '#fff' : 'var(--color-text-primary)',
                border: plan.featured ? 'none' : '0.5px solid var(--color-border-strong)',
              }}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
