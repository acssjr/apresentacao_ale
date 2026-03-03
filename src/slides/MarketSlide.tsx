import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'

const stats = [
  { value: '42M', label: 'brasileiros com calvície' },
  { value: '16,6%', label: 'crescimento anual do mercado global' },
  { value: '40%', label: 'dos casos são femininos — crescendo 10%/ano' },
  { value: 'R$800', label: 'custo inicial vs R$20.000 do transplante' },
]

export function MarketSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />

      <SlideHeader slideNum="02 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '2% 5.2% 4%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1%' }}>
          O MERCADO DE PRÓTESE CAPILAR NO BRASIL
        </p>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '3%', textTransform: 'uppercase' }}>
          42 Milhões de Brasileiros<br />com Calvície.
        </h2>

        <div className="flex gap-6" style={{ flex: 1, overflow: 'hidden' }}>
          {/* Left 58% — body text */}
          <div style={{ flex: '0 0 58%', display: 'flex', flexDirection: 'column', gap: '4%', justifyContent: 'center' }}>
            <p style={{ fontSize: 'clamp(13px, 1.35vw, 17px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
              O Brasil é o <strong style={{ color: '#fff', fontWeight: 700 }}>4º maior mercado de beleza do mundo</strong>. O segmento de restauração capilar cresce a{' '}
              <strong style={{ color: '#fff' }}>16,6% ao ano</strong> globalmente — e deve passar de US$ 6,4 bilhões para{' '}
              <strong style={{ color: '#fff' }}>US$ 18,9 bilhões até 2030</strong>. O perfil dominante do cliente tem entre 30 e 40 anos, classes B e C, motivação principal: recuperar a autoestima.
            </p>
            <p style={{ fontSize: 'clamp(13px, 1.35vw, 17px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>
              A prótese capilar tem vantagem competitiva clara sobre o transplante:{' '}
              <strong style={{ color: '#fff' }}>custo inicial de R$ 800–4.000</strong> versus R$ 20.000–30.000,{' '}
              <strong style={{ color: '#fff' }}>resultado imediato</strong> versus 12–18 meses de espera,{' '}
              <strong style={{ color: '#fff' }}>zero procedimento cirúrgico</strong>. O cliente não quer o produto — quer parecer mais jovem, ser mais atraente, ter mais presença.
            </p>
          </div>

          {/* Right 38% — 2×2 stat grid */}
          <div style={{ flex: '0 0 38%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3%' }}>
            {stats.map((s, i) => (
              <div
                key={i}
                className="glass rounded-xl"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: 'clamp(16px, 2.5vw, 28px) clamp(14px, 2vw, 22px)',
                  minHeight: 0,
                }}
              >
                <span style={{
                  fontSize: 'clamp(28px, 3.2vw, 48px)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1,
                  display: 'block',
                }}>
                  {s.value}
                </span>
                <span style={{
                  fontSize: 'clamp(10px, 0.9vw, 12px)',
                  color: 'rgba(255,255,255,0.55)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: 8,
                  lineHeight: 1.4,
                  display: 'block',
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer quote */}
        <p style={{
          fontSize: 'clamp(11px, 1.1vw, 15px)',
          color: 'rgba(255,255,255,0.45)',
          fontStyle: 'italic',
          marginTop: '2%',
        }}>
          "O desejo já existe em 42 milhões de pessoas. O trabalho não é criar demanda — é aparecer na frente de quem já quer a solução." — Schwartz, <em>Breakthrough Advertising</em>
        </p>
      </div>
    </div>
  )
}
