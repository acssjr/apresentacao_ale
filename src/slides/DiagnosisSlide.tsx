import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { Globe, Activity, MessageCircle, Mail, GitBranch, MapPin, CheckCircle2, AlertCircle, XCircle } from 'lucide-react'

// Status: "good" | "improve" | "missing"
const good = [
  {
    title: 'CRM Barber Code ativo',
    sub: 'Base de clientes existente — pronta para remarketing imediato',
    status: 'good' as const,
  },
  {
    title: 'Presença no Instagram',
    sub: 'Canal existe, mas com baixo engajamento — precisa de estratégia de conteúdo',
    status: 'improve' as const,
  },
  {
    title: 'Atendimento de qualidade',
    sub: 'O diferencial competitivo que sustenta todo o funil',
    status: 'good' as const,
  },
]

const statusConfig = {
  good:    { Icon: CheckCircle2, color: '#00E676', bg: 'rgba(0,230,118,0.05)',  border: 'rgba(0,230,118,0.15)',  label: 'Ativo' },
  improve: { Icon: AlertCircle,  color: '#FFB800', bg: 'rgba(255,184,0,0.05)',  border: 'rgba(255,184,0,0.2)',   label: 'Melhorar' },
}

const needed = [
  { Icon: Globe,          title: 'Landing Page',           body: 'Sem ela, tráfego pago não tem destino. Todo lead que clica no anúncio some.',                             priority: 'CRÍTICO',    pc: '#FF3B3B' },
  { Icon: Activity,       title: 'Pixel Instalado',        body: 'Sem rastreamento não há retargeting nem audiências lookalike. Cada lead perdido é dinheiro jogado fora.',  priority: 'CRÍTICO',    pc: '#FF3B3B' },
  { Icon: MessageCircle,  title: 'Follow-up < 5 Minutos',  body: 'Lead atendido em 2h tem conversão 80% menor. Automação resolve isso de forma imediata.',                   priority: 'URGENTE',    pc: '#FF8C00' },
  { Icon: Mail,           title: 'Captura de E-mail',      body: 'Base própria para remarketing independente de plataforma — ativo que você controla para sempre.',          priority: 'IMPORTANTE', pc: '#FFD700' },
  { Icon: GitBranch,      title: 'Funil de Nutrição',      body: 'Lead frio precisa de 3–7 touchpoints antes de converter. Sem funil, você perde 70% dos leads qualificados.', priority: 'IMPORTANTE', pc: '#FFD700' },
  { Icon: MapPin,         title: 'Google Business Otimizado', body: 'Posição #1 para "prótese capilar Feira de Santana" — gratuito, alta intenção, nenhum concorrente disputando.', priority: 'RÁPIDO', pc: '#00E676' },
]

export function DiagnosisSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1 }} />
      <SlideHeader slideNum="11 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '1.5% 5.2% 3%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8%' }}>
          O QUE EXISTE HOJE — E O QUE PRECISA MUDAR
        </p>
        <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 48px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '2%', textTransform: 'uppercase' }}>
          O Serviço É Excelente.<br />A Captação Precisa de Estrutura.
        </h2>

        <div className="flex gap-5" style={{ flex: 1, overflow: 'hidden' }}>

          {/* Left — what works / needs improvement */}
          <div style={{ flex: '0 0 42%', display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* Status legend */}
            <div className="flex items-center gap-4" style={{ marginBottom: 2 }}>
              {(['good', 'improve'] as const).map((s) => {
                const c = statusConfig[s]
                return (
                  <div key={s} className="flex items-center gap-1.5">
                    <c.Icon size={11} color={c.color} />
                    <span style={{ fontSize: 9, color: c.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{c.label}</span>
                  </div>
                )
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {good.map((g, i) => {
                const cfg = statusConfig[g.status]
                return (
                  <div
                    key={i}
                    className="glass rounded-xl flex items-start gap-3"
                    style={{
                      padding: '10px 14px',
                      background: cfg.bg,
                      border: `1px solid ${cfg.border}`,
                    }}
                  >
                    <cfg.Icon size={16} color={cfg.color} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: 'clamp(11px,1.1vw,14px)', fontWeight: 700, color: cfg.color, marginBottom: 3 }}>{g.title}</p>
                      <p style={{ fontSize: 'clamp(10px,0.9vw,12px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{g.sub}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.07)' }} />

            {/* Email insight */}
            <div
              className="glass rounded-xl flex items-start gap-3"
              style={{
                padding: '12px 14px',
                background: 'rgba(0,200,255,0.04)',
                border: '1px solid rgba(0,200,255,0.15)',
                flexShrink: 0,
              }}
            >
              <Mail size={15} color="#00C8FF" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontSize: 'clamp(11px,1.1vw,14px)', fontWeight: 700, color: '#fff', marginBottom: 5 }}>
                  E-mail não é antiquado. É o ativo mais resiliente.
                </p>
                <p style={{ fontSize: 'clamp(10px,0.9vw,12px)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>
                  Não depende de algoritmo. <strong style={{ color: 'rgba(255,255,255,0.8)' }}>500 e-mails segmentados</strong> de homens com calvície em FSA valem mais do que 10.000 seguidores não engajados.
                </p>
              </div>
            </div>
          </div>

          {/* Right — what's missing */}
          <div style={{ flex: '0 0 54%', display: 'flex', flexDirection: 'column' }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 10 }}>
              <XCircle size={14} color="#FF3B3B" />
              <p style={{ fontSize: 11, color: '#FF3B3B', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>
                O QUE PRECISA SER CONSTRUÍDO
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1 }}>
              {needed.map(({ Icon, title, body, priority, pc }, i) => (
                <div
                  key={i}
                  className="glass rounded-xl flex items-center gap-3"
                  style={{ flex: 1, padding: '7px 14px' }}
                >
                  <Icon size={14} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 'clamp(10px,0.95vw,13px)', fontWeight: 700, color: 'rgba(255,255,255,0.9)', marginBottom: 2 }}>{title}</p>
                    <p style={{ fontSize: 'clamp(9px,0.8vw,11px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.35 }}>{body}</p>
                  </div>
                  <span style={{
                    flexShrink: 0, fontSize: 8, fontWeight: 700,
                    padding: '3px 8px', borderRadius: 10,
                    background: `${pc}14`, border: `1px solid ${pc}35`,
                    color: pc, letterSpacing: '0.08em', whiteSpace: 'nowrap',
                  }}>
                    {priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
