import { C, mono } from '../styles/tokens'
import { useReveal } from '../hooks'
import { SectionTag, SectionTitle, Pill } from './UI'

const TAGS = [
  'Nucleic-acid Structural Biology', 'Tool Development',
  'Annotation / Validation', 'RNA Structure Prediction',
  'Data Standards (mmCIF)', 'Benchmarking',
  'Reproducible Workflows', 'Early-career Researchers',
]

export default function Who() {
  const ref = useReveal()
  return (
    <section id="who" style={sectionStyle}>
      <SectionTag>Who should apply</SectionTag>
      <SectionTitle>
        FOR<br />
        <span style={{ color: C.cyan }}>WHOM</span>
      </SectionTitle>

      <div className="reveal" ref={ref}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
          {TAGS.map(t => <Pill key={t}>{t}</Pill>)}
        </div>

        <p style={{ fontSize: 'clamp(14px,1.4vw,16px)', lineHeight: 1.75, color: C.mutedLight, maxWidth: 680, marginBottom: 40 }}>
          The event is designed for a balanced mix of domain experts and early-career
          researchers. We welcome participants working on nucleic-acid structural biology,
          tool development, annotation/validation, RNA structure prediction, data standards,
          benchmarking, or reproducible workflow practices.
        </p>

        <div style={{
          background: C.bg2, border: `1px solid ${C.border}`,
          padding: 'clamp(20px,2.5vw,32px)', maxWidth: 640,
          borderLeft: `3px solid ${C.teal}`,
        }}>
          <div style={{ ...mono, fontSize: 10, letterSpacing: '0.15em', color: C.teal, textTransform: 'uppercase', marginBottom: 12 }}>
            Pre-hackathon Onboarding
          </div>
          <p style={{ fontSize: 14, color: C.mutedLight, lineHeight: 1.7 }}>
            To help teams hit the ground running, we are aligning with reproducible workflow
            practices including{' '}
            <strong style={{ color: C.white }}>Nextflow / nf-core</strong> concepts.
            Practical onboarding materials and requirements will be shared with confirmed participants.
          </p>
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
