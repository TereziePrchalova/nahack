import { C, mono } from '../styles/tokens'
import { useReveal } from '../hooks'
import { SectionTag, SectionTitle } from './UI'

const INFO = [
  ['Accommodation',       'Arranged for non-local participants at the venue hotel. Details provided to confirmed participants.'],
  ['Travel & Reimbursement', 'Travel guidance and reimbursement/support details shared directly with accepted participants.'],
  ['Session Hours',       'Daily sessions 10:00 – 16:00, with additional evening activities on days 1 and 2.'],
]

export default function Venue() {
  const ref = useReveal()
  return (
    <section id="venue" style={sectionStyle}>
      <SectionTag>Venue &amp; logistics</SectionTag>
      <SectionTitle>
        HOTEL<br />
        <span style={{ color: C.cyan }}>GLOBUS</span>
      </SectionTitle>

      <div className="reveal" ref={ref} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 'clamp(32px,5vw,80px)',
        alignItems: 'start',
      }}>
        <div>
          <div style={{
            ...mono, fontSize: 13, lineHeight: 2.1, color: C.mutedLight,
            borderLeft: `2px solid ${C.cyanDim}`, paddingLeft: 24, marginBottom: 28,
          }}>
            Hotel Globus<br />
            Gregorova 2115/10<br />
            148 00 Praha 4–Chodov<br />
            Prague, Czech Republic
          </div>
          <a
            href="https://www.hotel-globus.cz/cs/"
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: C.cyan, ...mono, fontSize: 12, letterSpacing: '0.1em',
              borderBottom: `1px solid ${C.cyanDim}`, paddingBottom: 2,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            → hotel-globus.cz
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {INFO.map(([label, text]) => (
            <div key={label} style={{
              background: C.bg2, border: `1px solid ${C.border}`, padding: '20px 24px',
            }}>
              <strong style={{ color: C.white, display: 'block', marginBottom: 6, fontSize: 12, ...mono, letterSpacing: '0.08em' }}>
                {label}
              </strong>
              <p style={{ fontSize: 14, color: C.mutedLight, lineHeight: 1.65 }}>{text}</p>
            </div>
          ))}
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
