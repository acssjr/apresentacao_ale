import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { GlassCard } from '../components/GlassCard'

const players = [
  {
    handle: '@robsonramos_protesecapilar',
    url: 'https://www.instagram.com/robsonramos_protesecapilar/',
    stat: '3M',
    sub: 'Instagram · 1,2M TikTok',
    body: 'Identidade religiosa como veículo de confiança. Vídeo de reação familiar: esposa não reconhece o marido. Custo zero, potencial viral infinito.',
    tag: 'REPLICÁVEL EM FSA',
    tagColor: 'cyan',
  },
  {
    handle: '@franciscoesteticacapilar',
    url: 'https://www.instagram.com/franciscoesteticacapilar/',
    stat: '2M',
    sub: 'Instagram',
    body: 'Vídeo viral com 24M views: menino de 12 anos, vítima de queimadura, recebe prótese pela primeira vez. Emoção real = alcance orgânico desproporcional.',
    tag: 'REPLICÁVEL EM FSA',
    tagColor: 'cyan',
  },
  {
    handle: '@oberdaluz',
    url: 'https://www.instagram.com/oberdaluz/',
    stat: '448K',
    sub: 'R$250k/mês',
    body: 'Especializou em prótese afro — nicho dentro do nicho. 3 unidades, 40% da clientela é feminina. Feira de Santana tem maioria afrodescendente.',
    tag: 'DIFERENCIAL ÚNICO EM FSA',
    tagColor: 'green',
  },
  {
    handle: '@felipelorenzoprotesecapilar',
    url: 'https://www.instagram.com/felipelorenzoprotesecapilar/',
    stat: '299K',
    sub: '45K próteses',
    body: 'Funil mais sofisticado: landing page → formulário → videochamada → fabricação → portal VIP pós-venda com vídeos de manutenção.',
    tag: 'MODELO DE FUNIL A REPLICAR',
    tagColor: 'cyan',
  },
  {
    handle: '@gutomagalhaes_',
    url: 'https://www.instagram.com/gutomagalhaes_/',
    stat: '88K',
    sub: '',
    body: '+11.000 homens transformados. Volume alto de prova social: qualquer perfil demográfico se vê representado.',
    tag: 'PROVA SOCIAL EM ESCALA',
    tagColor: 'cyan',
  },
]

function tagStyle(color: string) {
  if (color === 'green') return { background: 'rgba(0,230,118,0.12)', color: '#00E676', border: '1px solid rgba(0,230,118,0.3)' }
  return { background: 'rgba(0,200,255,0.12)', color: '#00C8FF', border: '1px solid rgba(0,200,255,0.3)' }
}

export function PlayersSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
      <SlideHeader slideNum="06 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '2% 5.2% 3%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1%' }}>
          O QUE OS GRANDES FAZEM — E O QUE É REPLICÁVEL
        </p>
        <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 48px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '2.5%', textTransform: 'uppercase' }}>
          Nenhum Deles Vende<br />Prótese. Todos Vendem<br />Autoestima.
        </h2>

        {/* 5 cards */}
        <div className="flex gap-3" style={{ flex: 1, overflow: 'hidden', minHeight: 0 }}>
          {players.map((p, i) => (
            <GlassCard key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6%', overflow: 'hidden' }}>
              <div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ fontSize: 9, color: '#00C8FF', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 4, display: 'block', textDecoration: 'none', cursor: 'pointer' }}
                  onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
                >
                  {p.handle}
                </a>
                <p style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', fontWeight: 700, color: 'white', lineHeight: 1 }}>{p.stat}</p>
                <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{p.sub}</p>
              </div>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <p style={{ fontSize: 'clamp(10px, 0.9vw, 13px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, flex: 1 }}>{p.body}</p>
              <span style={{
                fontSize: 8,
                fontWeight: 700,
                padding: '4px 8px',
                borderRadius: 20,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                alignSelf: 'flex-start',
                ...tagStyle(p.tagColor),
              }}>
                {p.tag}
              </span>
            </GlassCard>
          ))}
        </div>

        {/* Bottom highlight */}
        <GlassCard.LeftAccent
          accentColor="#00C8FF"
          accentWidth="4px"
          style={{ marginTop: '2%', padding: 'clamp(10px,1.2vw,16px) clamp(14px,1.6vw,22px)' }}
        >
          <div className="flex items-center justify-between gap-6">
            <p style={{ fontSize: 'clamp(12px, 1.4vw, 20px)', fontStyle: 'italic', color: 'white', lineHeight: 1.4, flex: 1 }}>
              "O copy não cria desejo. Ele apenas pega as esperanças, sonhos, medos e desejos que já existem no coração de milhões de pessoas — e direciona esses desejos para um produto específico."
            </p>
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap', flexShrink: 0 }}>
              Eugene Schwartz<br />Breakthrough Advertising
            </p>
          </div>
        </GlassCard.LeftAccent>
      </div>
    </div>
  )
}
