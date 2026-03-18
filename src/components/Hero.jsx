import { C, mono, bebas } from '../styles/tokens'
import { useCountdown } from '../hooks'
import DnaHelix from './DnaHelix'

export default function Hero() {
  const cd = useCountdown('2026-05-27T10:00:00+02:00')

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: '100px clamp(20px,4vw,48px) clamp(48px,6vw,80px)',
      overflow: 'hidden',
    }}>
      <DnaHelix />

      {/* Radial glow behind text */}
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div style={{
          ...mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: C.cyan, marginBottom: 22,
          display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
        }}>
          <span style={{ display: 'inline-block', width: 32, height: 1, background: C.cyan }} />
          Workshop / Hackathon
          <span style={{
            background: C.cyanDark, border: `1px solid ${C.cyanDim}`, color: C.cyan,
            fontSize: 10, padding: '3px 10px', borderRadius: 20, letterSpacing: '0.1em',
          }}>
            Prague 2026
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          ...bebas, fontSize: 'clamp(64px,12vw,148px)',
          lineHeight: 0.92, color: C.white, maxWidth: 820,
        }}>
          NUCLEIC<br />
          ACID<br />
          <span style={{ color: C.cyan }}>STRUCTURE</span><br />
          <span style={{
            fontSize: 'clamp(28px,4.5vw,50px)',
            color: C.mutedLight, letterSpacing: '0.03em',
          }}>
            ANNOTATION &amp; PREDICTION HACKATHON 2026
          </span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: 'clamp(14px,1.5vw,16px)', lineHeight: 1.7,
          color: C.mutedLight, maxWidth: 440, marginTop: 24,
        }}>
          From tools to interoperable workflows for nucleic acid structures. This event addresses two key bottlenecks in the field: fragmented annotation and validation tooling, and the insufficient treatment of non-Watson–Crick base pairs in RNA structure prediction.
        </p>

        {/* Meta strip */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 40px', marginTop: 36 }}>
          {[
            ['Dates',        '27–29 MAY 2026'],
            ['Participants', '~15–20 EXPERTS'],
            ['Location',     'HOTEL GLOBUS, PRAGUE, CZECH REPUBLIC'],
          ].map(([label, val]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ ...mono, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted }}>
                {label}
              </span>
              <span style={{ ...mono, fontSize: 'clamp(11px,1.2vw,14px)', color: C.white }}>
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* Countdown */}
        <div style={{ marginTop: 40, display: 'inline-block', maxWidth: '100%' }}>
          {/* Badge above box */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
            <span style={{
              background: C.bg, border: `1px solid ${C.red}`,
              color: C.red, ...mono, fontSize: 10,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '4px 12px', borderRadius: 2,
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: C.red, display: 'inline-block',
                animation: 'pulse 2s infinite',
              }} />
              Registration Closed
            </span>
          </div>

          {/* Countdown box */}
          <div style={{
            background: C.cyanDark,
            border: `1px solid ${C.cyanDim}`,
            borderRadius: 4,
            padding: 'clamp(16px,2vw,28px) clamp(16px,2vw,32px)',
            display: 'inline-flex', alignItems: 'center',
            maxWidth: '100%', overflowX: 'auto',
          }}>
            <span style={{
              ...mono, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: C.muted, writingMode: 'vertical-lr', transform: 'rotate(180deg)',
              paddingRight: 'clamp(12px,1.5vw,24px)',
              borderRight: `1px solid ${C.border}`,
              whiteSpace: 'nowrap',
            }}>
              Starts in
            </span>
            {[['Days', cd.days], ['Hours', cd.hours], ['Mins', cd.mins], ['Secs', cd.secs]].map(([label, val], i, arr) => (
              <div key={label} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '0 clamp(14px,2vw,28px)',
                borderRight: i < arr.length - 1 ? `1px solid ${C.cyanDim}` : 'none',
              }}>
                <span style={{
                  ...bebas, fontSize: 'clamp(36px,5vw,52px)',
                  color: C.cyan, lineHeight: 1,
                  minWidth: 'clamp(44px,5vw,64px)', textAlign: 'center',
                }}>
                  {val}
                </span>
                <span style={{
                  ...mono, fontSize: 9, letterSpacing: '0.15em',
                  textTransform: 'uppercase', color: C.muted, marginTop: 6,
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
