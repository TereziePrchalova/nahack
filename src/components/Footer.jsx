import { C, mono } from '../styles/tokens'
import IBT from '../../public/IBT.png'
import ELIXIR from '../../public/elixir.png'

export default function Footer() {
  return (
    <footer style={{
      padding: '20px clamp(20px,4vw,48px)',
      borderTop: `1px solid ${C.border}`,
      display: 'flex', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 12,
      position: 'relative', zIndex: 1,
    }}>
      <span style={{ ...mono, fontSize: 11, color: C.muted, marginTop: 'auto' }}>
        © 2026 NUCLEIC ACID STRUCTURE HACKATHON · IBT CAS · PRAGUE
      </span>
      <span style={{ ...mono, fontSize: 11, color: C.muted }}>
        FUNDED BY ELIXIR AND SUPPORTED BY IBT
        <img style={{width: '3rem', margin: '0 1rem'}} src={ELIXIR}/>
        <img style={{width: '3rem'}} src={IBT}/>
      </span>
    </footer>
  )
}
