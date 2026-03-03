import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { ArrowRight } from 'lucide-react'

const stages = [
  {
    num: '1',
    label: 'PIONEIRO',
    body: 'Basta dizer o que a prótese faz. "Prótese capilar masculina — resultado natural." A maioria das promessas diretas bem estruturadas converte porque ninguém mais está fazendo.',
    example: '"Prótese capilar em Feira de Santana — agende sua avaliação."',
    active: true,
  },
  {
    num: '2',
    label: 'CONCORRÊNCIA',
    body: 'A promessa precisa ser maior: melhor material, mais natural, mais rápido. A diferenciação começa a ser por intensidade. O primeiro a entrar dita o padrão.',
    example: '"A prótese mais natural do mercado — resultado em 2h, 100% indetectável."',
    active: false,
  },
  {
    num: '3',
    label: 'MECANISMO ÚNICO',
    body: 'O público já viu as promessas. Agora precisa de um "porquê" diferente — técnica exclusiva, material importado, método próprio de aplicação.',
    example: '"Sistema de micro-ventilação capilar — respira como cabelo real."',
    active: false,
  },
  {
    num: '4',
    label: 'GUERRA DE INTENSIDADE',
    body: 'Guerra de superlativos: "3× mais durável", "8h de aplicação vira 2h". Preço domina. Margem cai.',
    example: '',
    active: false,
  },
  {
    num: '5',
    label: 'IDENTIDADE',
    body: 'Abandona o produto. Vende transformação, lifestyle, pertencimento. É onde estão Robson Ramos e Francisco Oliveira.',
    example: '',
    active: false,
  },
]

export function SophisticationSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
      <SlideHeader slideNum="03 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '1.5% 5.2% 2%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8%' }}>
          OS 5 ESTÁGIOS DE SOFISTICAÇÃO — APLICADO A PRÓTESES CAPILARES
        </p>
        <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 48px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.5%', textTransform: 'uppercase' }}>
          Feira Está no Estágio 1.<br />O País Já Caminha Para o 3.
        </h2>

        <div className="flex gap-6" style={{ flex: 1, overflow: 'hidden' }}>
          {/* Left 55% — stages with transition */}
          <div style={{ flex: '0 0 55%', display: 'flex', flexDirection: 'column', gap: '1.5%' }}>
            {stages.map((s, i) => (
              <div
                key={i}
                className="glass rounded-xl"
                style={{
                  flex: i <= 1 ? 1.3 : 0.8,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: 'clamp(6px,0.9vw,12px) clamp(12px,1.5vw,20px)',
                  opacity: 1,
                  ...(s.active
                    ? { background: 'linear-gradient(135deg, rgba(0,200,255,0.08), rgba(0,200,255,0.02))', border: '1px solid rgba(0,200,255,0.2)' }
                    : i === 1
                      ? { background: 'linear-gradient(135deg, rgba(255,165,0,0.05), transparent)', border: '1px solid rgba(255,165,0,0.15)' }
                      : {}),
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div style={{ flex: 1 }}>
                    <div className="flex items-center gap-2" style={{ marginBottom: 3 }}>
                      <span style={{
                        fontSize: 'clamp(16px, 1.6vw, 22px)',
                        fontWeight: 800,
                        color: s.active ? '#00C8FF' : i === 1 ? 'rgba(0,200,255,0.7)' : 'rgba(255,255,255,0.3)',
                        lineHeight: 1,
                      }}>
                        {s.num}
                      </span>
                      <span style={{
                        fontSize: 'clamp(9px, 0.85vw, 11px)',
                        fontWeight: 700,
                        color: s.active ? '#00C8FF' : i === 1 ? 'rgba(0,200,255,0.6)' : 'rgba(255,255,255,0.5)',
                        letterSpacing: '0.08em',
                      }}>
                        {s.label}
                      </span>
                    </div>
                    <p style={{ fontSize: 'clamp(9px, 0.8vw, 11px)', color: s.active ? 'rgba(255,255,255,0.85)' : i === 1 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.65)', lineHeight: 1.45 }}>
                      {s.body}
                    </p>
                    {s.example && (
                      <p style={{ fontSize: 'clamp(8px, 0.7vw, 10px)', color: s.active ? 'rgba(255,255,255,0.5)' : i === 1 ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginTop: 3 }}>
                        Ex: {s.example}
                      </p>
                    )}
                  </div>
                  {s.active && (
                    <span style={{
                      flexShrink: 0,
                      fontSize: 8,
                      fontWeight: 700,
                      padding: '3px 9px',
                      borderRadius: 20,
                      background: 'rgba(0,200,255,0.12)',
                      border: '1px solid rgba(0,200,255,0.25)',
                      color: '#00C8FF',
                      whiteSpace: 'nowrap',
                    }}>
                      ESTAMOS AQUI
                    </span>
                  )}
                  {i === 1 && (
                    <span style={{
                      flexShrink: 0,
                      fontSize: 8,
                      fontWeight: 700,
                      padding: '3px 9px',
                      borderRadius: 20,
                      background: 'rgba(255,165,0,0.12)',
                      border: '1px solid rgba(255,165,0,0.25)',
                      color: '#FFA500',
                      whiteSpace: 'nowrap',
                    }}>
                      EM 12–18 MESES
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Transition indicator between stage 1 and 2 */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                padding: 'clamp(8px,1vw,14px) clamp(12px,1.5vw,20px)',
                background: 'linear-gradient(90deg, rgba(0,200,255,0.06), rgba(255,165,0,0.06))',
                borderRadius: 12,
              }}
            >
              <span style={{ fontSize: 'clamp(10px,0.95vw,13px)', color: '#00C8FF', fontWeight: 700 }}>ESTÁGIO 1</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #00C8FF, #FFA500)', borderRadius: 2 }} />
                <ArrowRight size={14} color="#FFA500" />
              </div>
              <span style={{ fontSize: 'clamp(10px,0.95vw,13px)', color: '#FFA500', fontWeight: 700 }}>ESTÁGIO 2</span>
              <span style={{ fontSize: 'clamp(9px,0.8vw,11px)', color: 'rgba(255,255,255,0.45)', marginLeft: 8 }}>
                Janela de 12–18 meses para construir autoridade antes que a concorrência chegue
              </span>
            </div>
          </div>

          {/* Right 40% — search stats */}
          <div style={{ flex: '0 0 40%' }}>
            <div className="glass rounded-xl" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 14, padding: 'clamp(12px,1.5vw,20px)' }}>
              <div>
                <p style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>2.400+</p>
                <p style={{ fontSize: 'clamp(9px, 0.85vw, 12px)', color: '#00C8FF', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 3, fontWeight: 600 }}>
                  buscas mensais estimadas
                </p>
                <p style={{ fontSize: 'clamp(9px, 0.85vw, 12px)', color: 'rgba(255,255,255,0.5)', marginTop: 4, lineHeight: 1.4 }}>
                  por "prótese capilar" na região de Feira de Santana e entorno (BA)
                </p>
              </div>

              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)' }} />

              {/* Bar chart */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { label: 'Salvador', pct: 100, color: 'rgba(255,255,255,0.35)', textColor: 'rgba(255,255,255,0.6)' },
                  { label: 'Feira de Santana', pct: 35, color: '#00C8FF', textColor: '#00C8FF', bold: true },
                  { label: 'Interior BA', pct: 15, color: 'rgba(255,255,255,0.2)', textColor: 'rgba(255,255,255,0.35)' },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between items-center" style={{ marginBottom: 4 }}>
                      <span style={{ fontSize: 11, color: b.textColor, fontWeight: b.bold ? 700 : 400 }}>{b.label}</span>
                      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{b.pct}%</span>
                    </div>
                    <div style={{ height: 5, background: 'rgba(255,255,255,0.06)', borderRadius: 3 }}>
                      <div style={{ height: '100%', width: `${b.pct}%`, background: b.color, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)' }} />

              {/* Sophistication context */}
              <div>
                <p style={{ fontSize: 9, color: '#FFA500', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 6 }}>
                  ANÁLISE DE SOFISTICAÇÃO LOCAL
                </p>
                <p style={{ fontSize: 'clamp(9px,0.88vw,12px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
                  Enquanto players nacionais como <strong style={{ color: '#fff' }}>Robson Ramos</strong> e <strong style={{ color: '#fff' }}>Francisco Oliveira</strong> já operam no estágio 5 (vendem identidade, não produto), Feira de Santana ainda está no estágio mais primitivo: <strong style={{ color: '#00C8FF' }}>basta anunciar "prótese capilar" e o telefone toca</strong>.
                </p>
              </div>

              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)' }} />

              <div className="flex gap-4">
                {[
                  { n: '1', c: '#FF3B3B', label: 'concorrente com digital ativo na cidade' },
                  { n: '0', c: '#FF3B3B', label: 'landing pages ativas para prótese em FSA' },
                ].map((s) => (
                  <div key={s.label} style={{ flex: 1 }}>
                    <p style={{ fontSize: 'clamp(24px, 2.8vw, 40px)', fontWeight: 700, color: s.c, lineHeight: 1 }}>{s.n}</p>
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.35 }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
