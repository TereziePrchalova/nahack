import { C, bebas } from '../styles/tokens'
import { useReveal } from '../hooks'
import { SectionTag, SectionTitle } from './UI'

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" style={sectionStyle}>
      <SectionTag>About the hackathon</SectionTag>
      <div className="reveal" ref={ref} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(32px,5vw,80px)',
        alignItems: 'start',
      }}>
        <div>
          <SectionTitle>
            TWO BOTTLENECKS.<br />
            <span style={{ color: C.cyan }}>THREE DAYS.</span>
          </SectionTitle>
          <p style={bodyText}>
            The Nucleic Acid Structure Annotation &amp; Prediction Hackathon brings together
            domain experts and early-career researchers to tackle fragmented
            annotation/validation tooling and insufficient representation of non-canonical
            base pairs in RNA prediction.
          </p>
          <p style={{ ...bodyText, marginTop: 20 }}>
            Over three focused days, we will co-develop interoperable formats, integrated
            reproducible workflows, and benchmark case studies — producing outputs intended
            for community reuse and follow-on dissemination.
          </p>
        </div>

        <div>
          {[
            ['3',   'Focused days of collaborative development'],
            ['~20', 'Domain experts and early-career researchers'],
            ['2',   'Core workstreams targeting key bottlenecks'],
          ].map(([num, desc]) => (
            <div key={num} style={{
              display: 'flex', alignItems: 'baseline', gap: 16,
              paddingBottom: 28, marginBottom: 28,
              borderBottom: `1px solid ${C.border}`,
            }}>
              <span style={{ ...bebas, fontSize: 'clamp(56px,7vw,72px)', color: C.cyan, lineHeight: 1 }}>
                {num}
              </span>
              <span style={{ fontSize: 14, color: C.muted, maxWidth: 200, lineHeight: 1.5 }}>
                {desc}
              </span>
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

const bodyText = {
  fontSize: 'clamp(14px,1.4vw,16px)',
  lineHeight: 1.75,
  color: C.mutedLight,
}
