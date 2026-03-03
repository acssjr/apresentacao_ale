import { VideoBackground } from '../components/VideoBackground'

export function CoverSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.48)', zIndex: 1 }} />



      {/* Top bar */}
      <div
        className="absolute flex items-center justify-between w-full"
        style={{ top: 0, left: 0, right: 0, padding: '3% 5.2% 0', zIndex: 10 }}
      >
        <div
          className="glass rounded-lg flex items-center"
          style={{ padding: '7px 16px' }}
        >
          <span style={{
            color: '#00C8FF',
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            PROPOSTA ESTRATÉGICA · 2026
          </span>
        </div>

        <span style={{
          fontSize: 13,
          color: 'rgba(255,255,255,0.65)',
          fontWeight: 600,
          letterSpacing: '0.04em',
        }}>
          Fábrica de Cortes
        </span>
      </div>

      {/* Main content — centered, nudged up 3% */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ zIndex: 10, paddingLeft: '5.2%', paddingRight: '5.2%', transform: 'translateY(-3%)' }}
      >
        <h1 style={{
          fontSize: 'clamp(36px, 7vw, 88px)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          textAlign: 'center',
          color: '#fff',
        }}>
          PROPOSTA ESTRATÉGICA
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2.4vw, 32px)',
          color: 'rgba(255,255,255,0.8)',
          marginTop: '2%',
          textAlign: 'center',
          lineHeight: 1.4,
        }}>
          Estudo de mercado, análise competitiva e plano de ação<br />
          para posicionamento de barbearia em prótese capilar.
        </p>

        <p style={{
          fontSize: 'clamp(13px, 1.5vw, 18px)',
          color: 'rgba(255,255,255,0.5)',
          marginTop: '3%',
          textAlign: 'center',
          letterSpacing: '0.06em',
        }}>
          Estudo de mercado e estratégia para Alexandre - A Fábrica dos Cortes
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center" style={{ padding: '0 0 6%', zIndex: 10 }}>
        <span style={{ fontSize: 'clamp(12px, 1.4vw, 18px)', color: 'rgba(255,255,255,0.4)' }}>2026</span>
      </div>
    </div>
  )
}
