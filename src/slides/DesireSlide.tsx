import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { ArrowRight, Sparkles } from 'lucide-react'

const journey = [
  { step: '01', label: 'DHT bloqueadores naturais', sub: 'não funcionou — efeitos colaterais sem resultado' },
  { step: '02', label: 'Minoxidil', sub: 'funcionou em alguns, irritou a maioria' },
  { step: '03', label: 'Minoxidil 3× mais forte', sub: 'mesma promessa, dose maior — mesma frustração' },
  { step: '04', label: 'Transplante R$25.000', sub: 'caro, cirúrgico, 18 meses de espera — inacessível' },
]

const desires = [
  { say: 'Cabelo natural', want: 'Parecer mais jovem' },
  { say: 'Resultado rápido', want: 'Recuperar a autoestima' },
  { say: 'Opção barata', want: 'Status e presença social' },
  { say: 'Sem cirurgia', want: 'Ser atraente novamente' },
  { say: 'Ninguém perceber', want: 'Liberdade do boné' },
]

export function DesireSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.58)', zIndex: 1 }} />
      <SlideHeader slideNum="09 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '2% 5.2% 4%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1%' }}>
          COMO O MERCADO PENSA
        </p>
        <h2 style={{ fontSize: 'clamp(24px, 4vw, 52px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '3%', textTransform: 'uppercase' }}>
          Eles Não Querem Cabelo.<br />Querem o Que o Cabelo<br />Representa.
        </h2>

        <div className="flex gap-6" style={{ flex: 1, overflow: 'hidden' }}>

          {/* Left — Frustration Journey */}
          <div style={{ flex: '0 0 46%', display: 'flex', flexDirection: 'column' }}>
            <div className="glass rounded-xl" style={{ flex: 1, padding: 'clamp(16px,2vw,26px)', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: 11, color: '#00C8FF', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 18 }}>
                A JORNADA DA FRUSTRAÇÃO
              </p>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {/* Steps 01–04: fully readable, slightly muted */}
                {journey.map((j, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'stretch', gap: 14, paddingBottom: '4%' }}>
                    {/* Step indicator + connector */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 30, flexShrink: 0 }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.55)' }}>{j.step}</span>
                      </div>
                      <div style={{ flex: 1, width: 1, background: 'rgba(255,255,255,0.1)', minHeight: 8 }} />
                    </div>
                    {/* Content */}
                    <div style={{ flex: 1, paddingTop: 5 }}>
                      <p style={{ fontSize: 'clamp(13px,1.2vw,16px)', fontWeight: 600, color: 'rgba(255,255,255,0.75)', lineHeight: 1.3, marginBottom: 4 }}>
                        {j.label}
                      </p>
                      <p style={{ fontSize: 'clamp(11px,0.95vw,13px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{j.sub}</p>
                    </div>
                  </div>
                ))}

                {/* Step 05 — highlighted contrast */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                    background: '#00C8FF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Sparkles size={16} color="#000" />
                  </div>
                  <div>
                    <p style={{ fontSize: 'clamp(14px,1.4vw,19px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 6 }}>
                      Prótese Capilar
                    </p>
                    <span style={{
                      fontSize: 9, fontWeight: 700, padding: '4px 12px', borderRadius: 20,
                      background: 'rgba(0,200,255,0.15)', border: '1px solid rgba(0,200,255,0.3)',
                      color: '#00C8FF',
                    }}>
                      A SOLUÇÃO REAL
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 'clamp(10px,0.95vw,13px)', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginTop: 16, paddingTop: 14 }}>
                <strong style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'normal' }}>Quem foi frustrado pelo transplante</strong> é o seu lead mais quente.
              </p>
            </div>
          </div>

          {/* Right — Desire translation */}
          <div style={{ flex: '0 0 50%', display: 'flex', flexDirection: 'column' }}>
            <div className="glass rounded-xl" style={{ flex: 1, padding: 'clamp(16px,2vw,26px)', display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: 11, color: '#00C8FF', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 16 }}>
                O QUE O CLIENTE DIZ VS. O QUE ELE QUER DE VERDADE
              </p>

              {/* Column headers */}
              <div className="flex items-center" style={{ marginBottom: 12, paddingBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ flex: 1, fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>O QUE DIZ</span>
                <span style={{ width: 36, flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 9, color: '#00C8FF', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, textAlign: 'right' }}>O QUE QUER DE VERDADE</span>
              </div>

              {/* Rows */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {desires.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center"
                    style={{
                      flex: 1,
                      borderBottom: i < desires.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}
                  >
                    <span style={{ flex: 1, fontSize: 'clamp(12px,1.2vw,16px)', color: 'rgba(255,255,255,0.45)' }}>{d.say}</span>
                    <div style={{ width: 36, display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                      <ArrowRight size={14} color="rgba(255,255,255,0.2)" />
                    </div>
                    <span style={{ flex: 1, fontSize: 'clamp(13px,1.3vw,17px)', color: '#fff', fontWeight: 600, textAlign: 'right' }}>{d.want}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 18, paddingTop: 16 }}>
                <p style={{ fontSize: 'clamp(11px,1.1vw,15px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65 }}>
                  O cliente não compra <strong style={{ color: '#fff' }}>cabelo</strong>. Ele compra{' '}
                  <strong style={{ color: '#fff' }}>a versão dele mesmo que está presa dentro de um boné</strong>.
                  O marketing que converte fala sobre <em>isso</em>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
