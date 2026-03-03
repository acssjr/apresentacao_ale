import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { GlassCard } from '../components/GlassCard'
import { Brain, PenTool, Rocket } from 'lucide-react'

const columns = [
  {
    icon: Brain,
    title: 'PENSAR',
    items: [
      'Pesquisa de público por nível de consciência (Schwartz)',
      'Estudo da concorrência e biblioteca de anúncios',
      'Definição de copy e criativos por nível',
      'Estratégia de segmentação local (FSA e entorno)',
    ],
  },
  {
    icon: PenTool,
    title: 'CRIAR',
    items: [
      'Landing page de captação',
      'Roteiro de criativos (antes/depois emocional, reação familiar)',
      'Configuração de pixel, eventos e rastreamento',
      'Automação de follow-up via WhatsApp',
      'Base de captura de e-mail',
    ],
  },
  {
    icon: Rocket,
    title: 'REALIZAR',
    items: [
      'Campanhas no ar na Semana 3',
      'Otimização contínua baseada em dados reais',
      'Relatório semanal de performance',
      'Escala do que converte, pausa do que não converte',
    ],
  },
]

export function MethodologySlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
      <SlideHeader slideNum="13 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '2% 5.2% 3%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1%' }}>
          COMO FUNCIONA
        </p>
        <h2 style={{ fontSize: 'clamp(20px, 3vw, 44px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '3%', textTransform: 'uppercase' }}>
          A Jornada: Pensar,<br />Criar, Realizar.
        </h2>

        <div className="flex gap-5" style={{ flex: 1, overflow: 'hidden' }}>
          {columns.map(({ icon: Icon, title, items }, i) => (
            <GlassCard.TopAccent
              key={i}
              accentColor="#00C8FF"
              style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div className="flex flex-col items-center text-center" style={{ gap: 10 }}>
                <Icon size={32} color="white" strokeWidth={1.5} />
                <h3 style={{
                  fontSize: 'clamp(16px, 2vw, 28px)',
                  fontWeight: 700,
                  color: '#00C8FF',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {title}
                </h3>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.1)' }} />
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                {items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span style={{ flexShrink: 0, marginTop: 3, width: 5, height: 5, borderRadius: '50%', background: '#00C8FF', display: 'inline-block' }} />
                    <span style={{ fontSize: 'clamp(11px, 1.1vw, 16px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard.TopAccent>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          fontSize: 'clamp(11px, 1.1vw, 15px)',
          color: 'rgba(255,255,255,0.5)',
          fontStyle: 'italic',
          marginTop: '2%',
        }}>
          "O algoritmo aprende com dados reais. Os primeiros 30 dias são o investimento mais importante — e os resultados compõem ao longo do tempo."
        </p>
      </div>
    </div>
  )
}
