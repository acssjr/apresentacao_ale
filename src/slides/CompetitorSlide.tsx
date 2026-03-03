import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { ImageUpload } from '../components/ImageUpload'
import { IPhoneMockup } from '../components/IPhoneMockup'
import { CheckCircle2, XCircle } from 'lucide-react'

const observations = [
  {
    type: 'pos' as const,
    label: 'Posicionamento claro',
    text: 'Bio define o nicho ("Referência em Prótese Capilar Masculina"), exibe localização e tem destaques organizados: Antes/Depois, Feedbacks, Clientes, Dúvidas.',
  },
  {
    type: 'pos' as const,
    label: 'Autoridade local estabelecida',
    text: '8.831 seguidores em 313 posts — crescimento consistente por conteúdo. Presença ativa reconhecida no nicho de FSA.',
  },
  {
    type: 'neg' as const,
    label: 'Sem CTA direto na bio',
    text: 'A bio não direciona para avaliação gratuita nem para agendamento. O visitante chega ao perfil e não sabe qual é o próximo passo.',
  },
  {
    type: 'neg' as const,
    label: 'Sem landing page no funil',
    text: 'O Linktree em si não é o problema — o problema é não ter uma landing page vinculada a ele com formulário de captura. O lead clica e não converte.',
  },
]

const cfg = {
  pos: {
    Icon: CheckCircle2,
    color: '#00E676',
    bg: 'rgba(0,230,118,0.05)',
    border: 'rgba(0,230,118,0.15)',
  },
  neg: {
    Icon: XCircle,
    color: '#FF3B3B',
    bg: 'rgba(255,59,59,0.05)',
    border: 'rgba(255,59,59,0.18)',
  },
}

export function CompetitorSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
      <SlideHeader slideNum="04 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '1.5% 5.2% 3%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6%' }}>
          ANÁLISE DA CONCORRÊNCIA — PERFIL
        </p>
        <h2 style={{ fontSize: 'clamp(20px, 3.2vw, 44px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.5%', textTransform: 'uppercase' }}>
          O Concorrente Existe.<br />Mas Deixa Dinheiro na Mesa.
        </h2>

        <div className="flex gap-6" style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>

          {/* Left — iPhone mockup */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto', height: '100%' }}>
            <IPhoneMockup>
              <ImageUpload
                label={'Clique para adicionar\nscreenshot do Instagram'}
                style={{ width: '100%', height: '100%' }}
              />
            </IPhoneMockup>
          </div>

          {/* Right — profile analysis */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0, overflow: 'hidden' }}>

            {/* Handle + name */}
            <div className="glass rounded-xl" style={{ padding: '10px 16px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>Handle</p>
                <a
                  href="https://www.instagram.com/alansantos_protesecapilar/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ fontSize: 'clamp(13px,1.4vw,18px)', fontWeight: 700, color: 'white', textDecoration: 'none', cursor: 'pointer' }}
                  onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
                >
                  @alansantos_protesecapilar
                </a>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>Nome</p>
                <p style={{ fontSize: 'clamp(12px,1.2vw,15px)', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Alan Santos · Prótese Capilar</p>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, flexShrink: 0 }}>
              {[
                { label: 'Posts', value: '313' },
                { label: 'Seguidores', value: '8.831' },
                { label: 'Seguindo', value: '429' },
              ].map(s => (
                <div key={s.label} className="glass rounded-xl" style={{ padding: '10px 14px', textAlign: 'center' }}>
                  <p style={{ fontSize: 'clamp(18px,2vw,28px)', fontWeight: 700, color: 'white', lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Positive / negative observations */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0 }}>
              {observations.map((obs, i) => {
                const { Icon, color, bg, border } = cfg[obs.type]
                return (
                  <div
                    key={i}
                    className="rounded-xl"
                    style={{
                      flex: 1,
                      minHeight: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '8px 14px',
                      background: bg,
                      border: `1px solid ${border}`,
                    }}
                  >
                    <Icon size={16} color={color} style={{ flexShrink: 0 }} />
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontSize: 'clamp(9px,0.85vw,11px)', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{obs.label}</p>
                      <p style={{ fontSize: 'clamp(10px,0.9vw,12px)', color: 'rgba(255,255,255,0.65)', marginTop: 3, lineHeight: 1.45 }}>{obs.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
