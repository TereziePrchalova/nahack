import { useState } from 'react'
import { C, mono } from '../styles/tokens'

const LINKS = ['About', 'Workstreams', 'Schedule', 'Venue', 'Contact']

export default function Nav() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px clamp(20px,4vw,48px)',
        borderBottom: `1px solid ${C.border}`,
        background: 'rgba(7,9,12,0.92)',
        backdropFilter: 'blur(16px)',
      }}>
        {/* Logo */}
        <div style={{ ...mono, color: C.cyan, fontWeight: 700, fontSize: 12, letterSpacing: '0.12em' }}>
          NA-HACKATHON 2026
        </div>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: 28 }}>
          {LINKS.map(l => (
            <NavBtn key={l} onClick={() => scrollTo(l)}>{l}</NavBtn>
          ))}
        </div>

        {/* Reg closed badge */}
        <div className="nav-tag" style={{
          ...mono, fontSize: 10, letterSpacing: '0.08em',
          color: C.muted, border: `1px solid ${C.border}`,
          padding: '4px 12px', borderRadius: 2,
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
            background: C.red, animation: 'pulse 2s infinite',
          }} />
          REG CLOSED
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none', flexDirection: 'column', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 4, position: 'relative', width: 30, height: 22,
          }}
        >
          <span style={{
            position: 'absolute', left: 0, width: 22, height: 2, background: C.cyan,
            transition: 'transform 0.25s ease, top 0.25s ease',
            top: open ? 10 : 0, transform: open ? 'rotate(45deg)' : 'none',
          }} />
          <span style={{
            position: 'absolute', left: 0, top: 10, width: 22, height: 2, background: C.cyan,
            transition: 'opacity 0.15s ease', opacity: open ? 0 : 1,
          }} />
          <span style={{
            position: 'absolute', left: 0, width: 22, height: 2, background: C.cyan,
            transition: 'transform 0.25s ease, top 0.25s ease',
            top: open ? 10 : 20, transform: open ? 'rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: 53, left: 0, right: 0, zIndex: 99,
          background: C.bg2, borderBottom: `1px solid ${C.border}`,
          padding: '16px 24px 24px',
        }}>
          {LINKS.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              ...mono, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: C.mutedLight, display: 'block', width: '100%', textAlign: 'left',
              padding: '13px 0', background: 'none', border: 'none',
              borderBottom: `1px solid ${C.border}`, cursor: 'pointer',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = C.cyan}
              onMouseLeave={e => e.currentTarget.style.color = C.mutedLight}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

function NavBtn({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      ...mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
      color: C.muted, background: 'none', border: 'none', cursor: 'pointer', padding: 0,
      transition: 'color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.color = C.cyan}
      onMouseLeave={e => e.currentTarget.style.color = C.muted}
    >
      {children}
    </button>
  )
}
