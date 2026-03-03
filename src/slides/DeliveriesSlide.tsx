import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { Megaphone, Globe, Film, Activity, MessageCircle, MapPin, BarChart2, Mail, Palette, Video } from 'lucide-react'

const deliveries = [
  { Icon: Megaphone, title: 'Gestão de Tráfego Pago (Meta Ads)', desc: 'Criação, configuração e otimização contínua de campanhas no Facebook e Instagram.', value: 'R$1.200/mês', included: false },
  { Icon: Globe, title: 'Landing Page de Captação', desc: 'Página de conversão com formulário, integração WhatsApp e pixel instalado.', value: 'R$1.500 único', included: false },
  { Icon: Film, title: 'Roteiro de Criativos (4 vídeos/mês)', desc: 'Script, direção de gravação e orientação de edição para criativos que convertem.', value: 'R$800/mês', included: false },
  { Icon: Palette, title: 'Design Gráfico de Criativos', desc: 'Artes e peças visuais para feed, stories e anúncios com identidade profissional.', value: 'R$600/mês', included: false },
  { Icon: Video, title: 'Auxílio na Captação de Vídeos', desc: 'Orientação de produção, roteiro e briefing de gravação para o cliente executar.', value: 'R$400/mês', included: false },
  { Icon: Activity, title: 'Configuração de Pixel + Eventos', desc: 'Rastreamento completo para retargeting e audiências lookalike.', value: 'R$600 único', included: false },
  { Icon: MessageCircle, title: 'Automação de WhatsApp', desc: 'Follow-up automático para novos leads em menos de 5 minutos.', value: 'R$400/mês', included: false },
  { Icon: MapPin, title: 'Google Business Otimizado', desc: "Posicionamento para buscas locais 'prótese capilar Feira de Santana'.", value: 'R$300 único', included: false },
  { Icon: BarChart2, title: 'Relatório Semanal de Performance', desc: 'Dados reais toda semana: CPL, CTR, conversões, o que escalar.', value: 'INCLUÍDO', included: true },
  { Icon: Mail, title: 'Estratégia de E-mail Remarketing', desc: 'Captura e nutrição de base própria independente de algoritmo.', value: 'INCLUÍDO', included: true },
]

export function DeliveriesSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
      <SlideHeader slideNum="14 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '1.5% 5.2% 2%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6%' }}>
          EMPILHAMENTO DE VALOR — TUDO QUE ESTÁ INCLUSO
        </p>
        <h2 style={{ fontSize: 'clamp(18px, 2.6vw, 38px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.2%', textTransform: 'uppercase' }}>
          Tudo que Você Precisaria<br />Contratar Separado.
        </h2>

        {/* Full-width delivery list — 2 columns */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.7%', overflow: 'hidden' }}>
          {deliveries.map(({ Icon, title, desc, value, included }, i) => (
            <div
              key={i}
              className="glass rounded-lg flex items-center gap-3"
              style={{
                padding: 'clamp(6px,0.8vw,10px) clamp(12px,1.4vw,18px)',
                ...(included
                  ? { border: '1px solid rgba(0,230,118,0.15)', background: 'rgba(0,230,118,0.03)' }
                  : {}),
              }}
            >
              <Icon size={14} color={included ? 'rgba(0,230,118,0.6)' : 'rgba(0,200,255,0.4)'} style={{ flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 'clamp(10px,0.9vw,12px)', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>{title}</p>
                <p style={{ fontSize: 'clamp(8px,0.7vw,10px)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.3, marginTop: 1 }}>{desc}</p>
              </div>
              <span style={{
                flexShrink: 0,
                fontSize: included ? 'clamp(9px,0.85vw,12px)' : 'clamp(11px,1.1vw,15px)',
                color: included ? '#00E676' : '#fff',
                fontWeight: included ? 700 : 700,
                whiteSpace: 'nowrap',
                letterSpacing: included ? '0.06em' : '-0.01em',
              }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Total row */}
        <div
          className="glass rounded-lg flex items-center justify-between"
          style={{ padding: '10px 18px', flexShrink: 0, marginTop: '1%', border: '1px solid rgba(0,200,255,0.2)', background: 'linear-gradient(90deg, rgba(0,200,255,0.06), rgba(0,200,255,0.02))' }}
        >
          <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            VALOR DE MERCADO SE CONTRATADO SEPARADO
          </p>
          <p style={{ fontSize: 'clamp(16px,1.8vw,24px)', fontWeight: 700, color: '#fff' }}>
            ~R$4.100/mês <span style={{ fontSize: '60%', fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>+ R$2.400 em setup</span>
          </p>
        </div>
      </div>
    </div>
  )
}
