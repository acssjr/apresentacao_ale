import { VideoBackground } from '../components/VideoBackground'
import { Check } from 'lucide-react'

const planBase = [
  'Gestão de tráfego pago (Meta Ads)',
  'Landing page de captação',
  'Roteiro de 4 criativos/mês',
  'Configuração de pixel + eventos',
  'Automação de follow-up WhatsApp',
  'Google Business otimizado',
  'Relatório semanal de performance',
  'Estratégia de e-mail remarketing',
]

const planGrowth = [
  'Google Ads (busca ativa "prótese capilar FSA")',
  '2ª landing page temática',
  'E-mail marketing mensal para base',
  'Relatório quinzenal com call de alinhamento',
]

export function OfferSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />



      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '3% 5.2% 3%', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ marginBottom: '2%', flexShrink: 0 }}>
          <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1%' }}>
            A OFERTA
          </p>
          {/* Headline — kept compact to avoid unwanted line breaks */}
          <h1 style={{
            fontSize: 'clamp(26px, 4vw, 54px)',
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: '-0.015em',
            whiteSpace: 'nowrap',
          }}>
            Um Investimento. Receita Recorrente Todo Mês.
          </h1>
          <p style={{
            fontSize: 'clamp(13px, 1.3vw, 18px)',
            color: 'rgba(255,255,255,0.6)',
            marginTop: '1%',
            lineHeight: 1.5,
          }}>
            Contrato de 3 meses renováveis. Tempo mínimo para o algoritmo aprender e os resultados aparecerem.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-4" style={{ flex: 1, overflow: 'hidden' }}>

          {/* Plan 1 — Launch */}
          <div className="glass rounded-xl" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden', padding: 'clamp(16px,2vw,24px)' }}>
            <span style={{
              fontSize: 9, fontWeight: 700, padding: '3px 10px', borderRadius: 20, alignSelf: 'flex-start',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.5)', letterSpacing: '0.12em',
            }}>PLANO INICIAL</span>

            <p style={{ fontSize: 'clamp(18px,2vw,28px)', fontWeight: 700, color: 'white', letterSpacing: '0.04em' }}>LANÇAMENTO</p>
            <div>
              <span style={{ fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, color: '#fff' }}>R$1.200</span>
              <span style={{ fontSize: 'clamp(13px,1.3vw,18px)', color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>/mês</span>
            </div>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>3 meses · renovável</p>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {planBase.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check size={11} color="rgba(255,255,255,0.4)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 'clamp(10px,0.95vw,13px)', color: 'rgba(255,255,255,0.75)' }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Valor de mercado: ~R$3.200/mês + R$2.400 setup</p>
          </div>

          {/* Plan 2 — Growth */}
          <div
            className="glass rounded-xl"
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', gap: 10,
              overflow: 'hidden', padding: 'clamp(16px,2vw,24px)',
              border: '1px solid rgba(0,200,255,0.3)',
              background: 'linear-gradient(135deg, rgba(0,200,255,0.06), rgba(0,200,255,0.01))',
            }}
          >
            <span style={{
              fontSize: 9, fontWeight: 700, padding: '3px 10px', borderRadius: 20, alignSelf: 'flex-start',
              background: 'rgba(0,200,255,0.12)', border: '1px solid rgba(0,200,255,0.25)',
              color: '#00C8FF', letterSpacing: '0.12em',
            }}>ESCALAR EM 90 DIAS</span>

            <p style={{ fontSize: 'clamp(18px,2vw,28px)', fontWeight: 700, color: 'white', letterSpacing: '0.04em' }}>CRESCIMENTO</p>
            <div>
              <span style={{ fontSize: 'clamp(28px,3.2vw,46px)', fontWeight: 700, color: '#fff' }}>R$1.800</span>
              <span style={{ fontSize: 'clamp(13px,1.3vw,18px)', color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>/mês</span>
            </div>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>após primeiros 3 meses de resultados</p>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>Tudo do plano Lançamento, mais:</p>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {planGrowth.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check size={11} color="#00C8FF" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 'clamp(10px,0.95vw,13px)', color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why now */}
          <div
            className="glass rounded-xl"
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', gap: 14,
              justifyContent: 'space-between', overflow: 'hidden',
              padding: 'clamp(16px,2vw,24px)',
            }}
          >
            <div>
              <p style={{ fontSize: 9, color: '#00E676', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>POR QUE AGORA</p>
              <p style={{ fontSize: 'clamp(12px,1.2vw,16px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                O concorrente que entrar depois pagará o <strong style={{ color: '#fff' }}>dobro pelo mesmo posicionamento</strong> — e nunca terá a base de pixel e e-mail que você terá construído.
              </p>
            </div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />

            <div>
              <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 8 }}>
                Validade desta proposta:
              </p>
              <p style={{ fontSize: 'clamp(36px,4.5vw,64px)', fontWeight: 700, color: '#FF3B3B', lineHeight: 1 }}>3 dias</p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginTop: 8, lineHeight: 1.4 }}>
                Após esse prazo, a condição de lançamento não estará disponível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
