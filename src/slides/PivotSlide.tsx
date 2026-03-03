import { VideoBackground } from '../components/VideoBackground'

export function PivotSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{ maxWidth: '75%', width: '100%' }}
      >
        {/* Label */}
        <p style={{
          fontSize: 9,
          color: '#00C8FF',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '3%',
        }}>
          RUSSELL BRUNSON · SEGREDOS DOS EXPERTS
        </p>

        {/* Main quote */}
        <h1 style={{
          fontSize: 'clamp(24px, 4vw, 52px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          color: 'white',
        }}>
          "Não há relação entre<br />ser bom e ser pago."
        </h1>

        <h2 style={{
          fontSize: 'clamp(24px, 4vw, 52px)',
          fontWeight: 600,
          letterSpacing: '-0.01em',
          lineHeight: 1.15,
          color: 'rgba(255,255,255,0.85)',
          marginTop: '0.6%',
        }}>
          Há, porém, uma enorme relação entre<br />
          ser bom em marketing e ser pago."
        </h2>

        {/* Separator */}
        <div style={{
          width: 80,
          height: 1,
          background: 'rgba(255,255,255,0.2)',
          margin: '3% auto',
        }} />

        {/* Closing */}
        <p style={{
          fontSize: 'clamp(14px, 1.8vw, 22px)',
          color: 'rgba(255,255,255,0.6)',
          fontStyle: 'italic',
          lineHeight: 1.6,
        }}>
          Você provavelmente domina o serviço.<br />
          A questão é: quantos ainda não te encontraram?
        </p>
      </div>
    </div>
  )
}
