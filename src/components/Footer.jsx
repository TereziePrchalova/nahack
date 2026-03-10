import { C, mono } from '../styles/tokens'

export default function Footer() {
  return (
    <footer style={{
      padding: '20px clamp(20px,4vw,48px)',
      borderTop: `1px solid ${C.border}`,
      display: 'flex', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 12,
      position: 'relative', zIndex: 1,
    }}>
      <span style={{ ...mono, fontSize: 11, color: C.muted }}>
        © 2026 NUCLEIC ACID STRUCTURE HACKATHON · IBT CAS · PRAGUE
      </span>
      <span style={{ ...mono, fontSize: 11, color: C.muted }}>
        27–29 MAY 2026 · HOTEL GLOBUS
      </span>
    </footer>
  )
}
