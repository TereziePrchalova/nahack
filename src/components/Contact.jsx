import { C, mono, bebas } from '../styles/tokens'
import { SectionTag } from './UI'

export default function Contact() {
  return (
    <section id="contact" style={sectionStyle}>
      {/* Background tint */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(0,229,255,0.03) 0%, rgba(0,201,167,0.03) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 'clamp(40px,5vw,80px)',
        alignItems: 'start',
      }}>
        <div>
          <SectionTag>Get in touch</SectionTag>
          <h2 style={{
            ...bebas, fontSize: 'clamp(44px,7vw,88px)',
            lineHeight: 0.95, color: C.white, marginBottom: 28,
          }}>
            QUESTIONS?<br />
            <span style={{ color: C.cyan }}>CONTACT US.</span>
          </h2>
          <p style={{ fontSize: 13, color: C.muted, marginBottom: 8 }}>
            Lada Biedermannová — IBT CAS
          </p>
          <a
            href="mailto:lada.biedermannova@ibt.cas.cz"
            style={{
              ...mono, fontSize: 'clamp(11px,1.2vw,13px)', color: C.cyan,
              display: 'inline-block',
              borderBottom: `1px solid ${C.cyanDim}`, paddingBottom: 4,
              marginBottom: 28, wordBreak: 'break-all',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            lada.biedermannova@ibt.cas.cz
          </a>
          <p style={{ ...mono, fontSize: 11, color: C.muted, letterSpacing: '0.12em', lineHeight: 1.8 }}>
            ANNOTATION · VALIDATION · RNA PREDICTION
          </p>
        </div>

        <div style={{
          background: 'rgba(255,79,106,0.05)',
          border: '1px solid rgba(255,79,106,0.28)',
          padding: 'clamp(20px,2.5vw,32px)',
          borderRadius: 4,
        }}>
          <div style={{ ...bebas, fontSize: 'clamp(24px,3vw,32px)', color: C.red, marginBottom: 12 }}>
            REGISTRATION CLOSED
          </div>
          <div style={{ ...mono, fontSize: 11, color: 'rgba(255,120,135,0.65)', letterSpacing: '0.1em', lineHeight: 2 }}>
            Deadline was 2 March 2026<br />
            Confirmations sent by 11 March 2026<br /><br />
            For questions, contact the organizers directly.
          </div>
        </div>
      </div>
    </section>
  )
}

const sectionStyle = {
  position: 'relative', zIndex: 1,
  padding: 'clamp(48px,8vw,100px) clamp(20px,4vw,48px)',
  borderTop: `1px solid ${C.border}`,
}
