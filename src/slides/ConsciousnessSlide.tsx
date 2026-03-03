import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'

const levels = [
  {
    num: '1',
    state: 'TOTALMENTE CONSCIENTE',
    desc: 'Já conhece Alexandre, já quer marcar. Basta dizer onde e como agendar. É o menor público, mas o mais fácil de converter.',
    action: 'CTA direto — "Agende sua avaliação agora"',
    badge: 'MENOR PÚBLICO',
    badgeColor: 'rgba(255,255,255,0.35)',
    badgeBg: 'rgba(255,255,255,0.06)',
    highlight: false,
  },
  {
    num: '2',
    state: 'CONSCIENTE DO PRODUTO',
    desc: 'Já ouviu falar de prótese, talvez conheça o Alan Santos. Precisa de prova social e de um argumento para escolher Alexandre.',
    action: 'Depoimento real + avaliação sigilosa como porta de entrada',
    badge: 'ALTA PRIORIDADE',
    badgeColor: '#00C8FF',
    badgeBg: 'rgba(0,200,255,0.1)',
    highlight: true,
  },
  {
    num: '3',
    state: 'CONSCIENTE DA SOLUÇÃO',
    desc: 'Quer resolver a calvície, mas não conhece a prótese. Pesquisa minoxidil, transplante ou convive com o problema.',
    action: 'Apresentar a prótese como solução para um desejo que ele já tem',
    badge: 'VOLUME MÉDIO',
    badgeColor: '#00C8FF',
    badgeBg: 'rgba(0,200,255,0.08)',
    highlight: true,
  },
  {
    num: '4',
    state: 'CONSCIENTE DO PROBLEMA',
    desc: 'Usa boné, evita foto, se sente mais velho — mas não verbalizou como necessidade de compra. A headline precisa nomear essa dor.',
    action: 'Começar na dor. "Se você escolhe o boné antes de sair de casa sem nem pensar..."',
    badge: 'MAIOR VOLUME',
    badgeColor: '#00E676',
    badgeBg: 'rgba(0,230,118,0.08)',
    highlight: false,
  },
  {
    num: '5',
    state: 'TOTALMENTE INCONSCIENTE',
    desc: 'Não percebe nem o problema. Não é o foco inicial — demanda tempo e volume de conteúdo para trabalhar.',
    action: 'Conteúdo educativo de longo prazo. Não é o alvo agora.',
    badge: 'NÃO É FOCO AGORA',
    badgeColor: 'rgba(255,255,255,0.3)',
    badgeBg: 'rgba(255,255,255,0.04)',
    highlight: false,
  },
]

const ladderSteps = [
  { n: 1, title: 'CONTEÚDO ORGÂNICO', sub: 'Vídeo antes/depois — custo zero, desejo alto' },
  { n: 2, title: 'AVALIAÇÃO SIGILOSA', sub: 'Remove a barreira "vão perceber?"' },
  { n: 3, title: 'PRIMEIRA APLICAÇÃO', sub: 'Ticket R$150–400 → cliente recorrente' },
  { n: 4, title: 'MANUTENÇÃO', sub: 'Retorno a cada 7–20 dias. Alta fidelização.' },
  { n: 5, title: 'INDICAÇÃO', sub: 'Cliente vira embaixador. CAC cai a zero.' },
]

export function ConsciousnessSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.58)', zIndex: 1 }} />
      <SlideHeader slideNum="10 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '2% 5.2% 3%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1%' }}>
          COMO CHEGAR A CADA TIPO DE PROSPECT
        </p>
        <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 48px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '2.5%', textTransform: 'uppercase' }}>
          Os 5 Níveis de Consciência.<br />Uma Estratégia para Cada Um.
        </h2>

        {/* Five consciousness level cards */}
        <div className="flex gap-3" style={{ flex: '0 0 auto', marginBottom: '2.5%' }}>
          {levels.map((l) => (
            <div
              key={l.num}
              className="glass rounded-xl"
              style={{
                flex: 1,
                padding: 'clamp(10px,1.4vw,18px)',
                ...(l.highlight
                  ? { border: '1px solid rgba(0,200,255,0.25)', background: 'linear-gradient(135deg,rgba(0,200,255,0.07),rgba(0,200,255,0.02))' }
                  : {}),
              }}
            >
              {/* Level badge */}
              <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: l.highlight ? '#00C8FF' : 'rgba(255,255,255,0.06)',
                  border: l.highlight ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700,
                  color: l.highlight ? '#000' : 'rgba(255,255,255,0.4)',
                  flexShrink: 0,
                }}>
                  {l.num}
                </span>
                <p style={{ fontSize: 'clamp(8px,0.8vw,11px)', fontWeight: 700, color: l.highlight ? '#00C8FF' : 'rgba(255,255,255,0.7)', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1.2 }}>
                  {l.state}
                </p>
              </div>

              <p style={{ fontSize: 'clamp(10px,0.9vw,12px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, marginBottom: 10 }}>
                {l.desc}
              </p>

              <div style={{
                borderRadius: 6, padding: '7px 10px',
                background: l.highlight ? 'rgba(0,200,255,0.08)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${l.highlight ? 'rgba(0,200,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
                marginBottom: 8,
              }}>
                <p style={{ fontSize: 'clamp(8px,0.75vw,10px)', color: l.highlight ? '#00C8FF' : 'rgba(255,255,255,0.5)', fontWeight: 600, marginBottom: 2 }}>
                  ESTRATÉGIA →
                </p>
                <p style={{ fontSize: 'clamp(9px,0.85vw,11px)', color: l.highlight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)', fontStyle: 'italic', lineHeight: 1.4 }}>
                  {l.action}
                </p>
              </div>

              <span style={{
                display: 'inline-block',
                fontSize: 8, fontWeight: 700,
                padding: '3px 7px', borderRadius: 20,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: l.badgeBg,
                color: l.badgeColor,
                border: `1px solid ${l.badgeColor}33`,
              }}>
                {l.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Value Ladder — horizontal */}
        <div className="glass rounded-xl" style={{ padding: 'clamp(10px,1.2vw,16px)', flexShrink: 0 }}>
          <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>
            ESCADA DE VALOR — A JORNADA DO CLIENTE
          </p>
          <div className="flex items-end gap-2">
            {ladderSteps.map((s, i) => (
              <div key={s.n} className="flex items-end gap-2" style={{ flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    borderRadius: 8,
                    padding: 'clamp(6px,1vw,12px) clamp(6px,0.8vw,10px)',
                    paddingBottom: `${8 + i * 5}px`,
                    background: `rgba(0,200,255,${0.04 + i * 0.04})`,
                    border: `1px solid rgba(0,200,255,${0.06 + i * 0.06})`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                  }}
                >
                  <span style={{ fontSize: 9, color: 'rgba(0,200,255,0.6)', fontWeight: 700 }}>{s.n}</span>
                  <p style={{ fontSize: 'clamp(7px,0.75vw,10px)', fontWeight: 700, color: i === ladderSteps.length - 1 ? '#00C8FF' : 'rgba(255,255,255,0.8)' }}>
                    {s.title}
                  </p>
                  <p style={{ fontSize: 'clamp(7px,0.7vw,9px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.3 }}>{s.sub}</p>
                </div>
                {i < ladderSteps.length - 1 && (
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.15)', flexShrink: 0, paddingBottom: 8 }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
