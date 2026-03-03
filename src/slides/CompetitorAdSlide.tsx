import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { ImageUpload } from '../components/ImageUpload'
import { Check, X } from 'lucide-react'

const goodItems = [
  'Usa antes/depois',
  'Mostra resultado visual',
]

const badItems = [
  'Copy genérica sem dor específica',
  'Sem CTA para avaliação gratuita',
  'Sem segmentação avançada',
  'Sem pixel de retargeting',
]

const gapsLeft = [
  { title: 'Sem landing page', sub: 'Leads sem destino' },
  { title: 'Sem funil de captação', sub: 'Sem automação de WhatsApp' },
  { title: 'Sem pixel instalado', sub: 'Zero retargeting' },
]

const gapsRight = [
  { title: 'Sem oferta de entrada', sub: 'Avaliação gratuita = barreira removida' },
  { title: 'Sem conteúdo emocional', sub: 'Posts sem estrutura antes/depois' },
]

export function CompetitorAdSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
      <SlideHeader slideNum="05 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '1.5% 5.2% 2.5%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.6%' }}>
          ANÁLISE DA CONCORRÊNCIA — ANÚNCIO
        </p>
        <h2 style={{ fontSize: 'clamp(20px, 3.2vw, 44px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.5%', textTransform: 'uppercase' }}>
          Um Único Anúncio Ativo.<br />Cheio de Lacunas.
        </h2>

        <div className="flex gap-5" style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>

          {/* Left — ad image placeholder (portrait, tall) */}
          <div style={{ height: '100%', aspectRatio: '9 / 16', flexShrink: 0 }}>
            <ImageUpload
              storageKey="competitor-ad"
              label={'Clique para adicionar\nprint do anúncio'}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Right — analysis */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, minHeight: 0, overflow: 'hidden' }}>

            {/* Checklist — 2 columns: good left, bad right */}
            <div className="glass rounded-xl" style={{ padding: 'clamp(12px,1.5vw,18px)', flexShrink: 0 }}>
              <p style={{ fontSize: 9, color: '#00C8FF', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 10 }}>ANÁLISE DO CRIATIVO</p>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                {/* Good */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <p style={{ fontSize: 8, color: '#00E676', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>O QUE FAZ BEM</p>
                  {goodItems.map((text, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={11} color="#00E676" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: 'clamp(10px,0.9vw,12px)', color: 'rgba(255,255,255,0.85)' }}>{text}</span>
                    </div>
                  ))}
                </div>
                <div style={{ width: 1, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />
                {/* Bad */}
                <div style={{ flex: 1.8, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <p style={{ fontSize: 8, color: '#FF3B3B', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>O QUE FALTA</p>
                  {badItems.map((text, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <X size={11} color="#FF3B3B" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: 'clamp(10px,0.9vw,12px)', color: 'rgba(255,255,255,0.65)' }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gap cards — 2 columns */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, minHeight: 0 }}>
              <p style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', flexShrink: 0 }}>LACUNAS CRÍTICAS</p>
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, minHeight: 0 }}>
                {[...gapsLeft, ...gapsRight].map((g, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      padding: '10px 16px',
                      borderRadius: 8,
                      background: 'rgba(255,59,59,0.12)',
                      border: '1px solid rgba(255,59,59,0.35)',
                    }}
                  >
                    <p style={{ fontSize: 'clamp(10px,0.95vw,13px)', fontWeight: 700, color: '#FF6B6B' }}>{g.title}</p>
                    <p style={{ fontSize: 'clamp(9px,0.8vw,11px)', color: 'rgba(255,255,255,0.7)', marginTop: 3 }}>{g.sub}</p>
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
