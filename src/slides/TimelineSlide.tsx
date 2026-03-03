import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'

const weeks = [
  {
    badge: 'SEMANA 1', title: 'ONBOARDING',
    color: '#00C8FF',
    items: [
      'Acesso às contas de anúncio e Instagram',
      'Briefing de público e posicionamento',
      'Pesquisa de concorrência e benchmarks',
      'Entrega dos materiais de suporte',
      'Definição de criativos a serem gravados',
      'Configuração inicial de rastreamento',
    ],
  },
  {
    badge: 'SEMANA 2', title: 'ESTRATÉGIA',
    color: '#FFA500',
    items: [
      'Apresentação do plano completo',
      'Aprovação de criativos e copy',
      'Revisão e ajustes com o cliente',
      'Pixel instalado e eventos configurados',
      'Landing page em construção',
      'Automação de WhatsApp em setup',
    ],
  },
  {
    badge: 'SEMANA 3', title: 'START',
    color: '#00E676',
    items: [
      'Landing page no ar',
      'Primeiras campanhas ativas',
      'Automação de WhatsApp funcionando',
      'Criativos entregues e no ar',
      'Google Business atualizado',
      'Primeiros dados chegando',
    ],
  },
  {
    badge: 'SEMANA 4 EM DIANTE', title: 'OTIMIZAÇÃO CONTÍNUA',
    color: '#B06EFF',
    items: [
      'Dados reais: o que está convertendo',
      'Ajuste de segmentação e copy',
      'Escala dos criativos campeões',
      'Relatório semanal entregue',
      'Novas campanhas baseadas em dados',
      'Construção da base de e-mail iniciada',
    ],
  },
]

export function TimelineSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
      <SlideHeader slideNum="15 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '1.5% 5.2% 3%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8%' }}>
          OS PRÓXIMOS PASSOS
        </p>
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 44px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '2%', textTransform: 'uppercase' }}>
          Do Contrato à Primeira<br />Campanha no Ar: 3 Semanas.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5%', flex: 1, overflow: 'hidden' }}>
          {weeks.map((w, i) => {
            const c = w.color
            return (
              <div
                key={i}
                className="glass rounded-xl flex items-center gap-5"
                style={{
                  flex: 1,
                  padding: 'clamp(10px,1.4vw,18px) clamp(16px,2vw,24px)',
                  border: `1px solid ${c}28`,
                  background: `linear-gradient(135deg, ${c}0d, ${c}04)`,
                }}
              >
                {/* Label column */}
                <div style={{ flexShrink: 0, width: 150, textAlign: 'left' }}>
                  <span style={{
                    fontSize: 8, fontWeight: 700, padding: '4px 10px',
                    borderRadius: 20, display: 'inline-block', marginBottom: 6,
                    background: `${c}1a`,
                    border: `1px solid ${c}40`,
                    color: c,
                    letterSpacing: '0.06em',
                    whiteSpace: 'nowrap',
                  }}>
                    {w.badge}
                  </span>
                  <p style={{
                    fontSize: 'clamp(12px,1.3vw,18px)', fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '0.04em',
                  }}>
                    {w.title}
                  </p>
                </div>

                <div style={{ width: 1, alignSelf: 'stretch', background: `${c}22`, flexShrink: 0 }} />

                {/* Items — 2 column grid */}
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3% 5%' }}>
                  {w.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span style={{
                        flexShrink: 0, marginTop: 5,
                        width: 4, height: 4, borderRadius: '50%',
                        background: c,
                        display: 'inline-block',
                      }} />
                      <span style={{ fontSize: 'clamp(10px,0.95vw,13px)', color: 'rgba(255,255,255,0.82)', lineHeight: 1.4 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <p style={{ textAlign: 'center', fontSize: 'clamp(10px,1vw,14px)', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginTop: '1.5%' }}>
          "A otimização é contínua. O algoritmo aprende ao longo do tempo — os primeiros 30 dias são a base de tudo."
        </p>
      </div>
    </div>
  )
}
