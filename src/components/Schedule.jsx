import { C, mono, bebas } from '../styles/tokens'
import { useReveal } from '../hooks'
import { SectionTag, SectionTitle } from './UI'

const DAYS = [
  {
    n: '01', date: 'Wed — 27 May', title: 'Kickoff & Start Implementing',
    items: ['12:00–13:30 Arrivals & registration', '12:30–13:30 Lunch', '13:30–14:00 Welcome and hackathon kickoff', '14:00–15:30 Work session 1', '15:30–16:00 Coffee break', '16:00–18:30 Work session 2', '18:30–24:00 Group dinner (buffet reception), Music Club, Hotel Globus'],
  },
  {
    n: '02', date: 'Thu — 28 May', title: 'Build, Integrate & Test',
    items: ['09:00–10:30 Work session 3', '10:30–11:00 Coffee break', '11:00–12:30 Work session 4', '12:30–13:30 Lunch', '13:30–15:00 Work session 5', '15:00–15:30 Coffee break', '15:30–17:30 Work session 6', '18:30 Group dinner'],
  },
  {
    n: '03', date: 'Fri — 29 May', title: 'Finalize & Demos',
    items: ['09:00–10:30 Work session 7', '10:30–11:00 Coffee break', '11:00–12:30 Project presentations and wrap-up', '12:30–13:30 Lunch', '13:30 Departure'],
  },
]

export default function Schedule() {
  const ref = useReveal()
  return (
    <section id="schedule" style={sectionStyle}>
      <SectionTag>Preliminary schedule</SectionTag>
      <SectionTitle>
        THREE<br />
        <span style={{ color: C.cyan }}>DAYS</span>
      </SectionTitle>

      <div className="reveal" ref={ref} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 2,
      }}>
        {DAYS.map((d, i) => (
          <div key={d.n} style={{
            padding: 'clamp(24px,3vw,40px)',
            border: `1px solid ${C.border}`,
            background: C.bg2,
            position: 'relative',
            borderTop: `2px solid ${i === 0 ? C.cyan : i === 1 ? C.teal : C.acid}`,
          }}>
            <div style={{
              ...bebas, fontSize: 'clamp(48px,6vw,64px)',
              color: 'rgba(0,229,255,0.07)', lineHeight: 1, marginBottom: 8,
            }}>
              {d.n}
            </div>
            <div style={{ ...mono, fontSize: 11, color: C.teal, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14 }}>
              {d.date}
            </div>
            <div style={{ fontSize: 16, fontWeight: 500, color: C.white, marginBottom: 16 }}>
              {d.title}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {d.items.map(item => (
                <li key={item} style={{ fontSize: 13, color: C.mutedLight, paddingLeft: 14, position: 'relative', lineHeight: 1.5 }}>
                  <span style={{ position: 'absolute', left: 0, color: C.cyanDim, fontSize: 11 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 20, ...mono, fontSize: 11, color: C.muted, letterSpacing: '0.1em' }}>
        ↳ Confirmed participants will receive a detailed agenda and onboarding pack closer to the event.
      </p>
    </section>
  )
}

const sectionStyle = {
  position: 'relative', zIndex: 1,
  padding: 'clamp(48px,8vw,100px) clamp(20px,4vw,48px)',
  borderTop: `1px solid ${C.border}`,
}
