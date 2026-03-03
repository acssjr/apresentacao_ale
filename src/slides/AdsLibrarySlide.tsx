import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'
import { CheckCircle2 } from 'lucide-react'
import { ImageUpload } from '../components/ImageUpload'

export function AdsLibrarySlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
      <SlideHeader slideNum="07 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '2% 5.2% 3%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1%' }}>
          INTELIGÊNCIA COMPETITIVA — META ADS LIBRARY
        </p>
        <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 48px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '2%', textTransform: 'uppercase' }}>
          2.500+ Anúncios<br />no Brasil. 1 em<br />Feira de Santana.
        </h2>

        <div className="flex gap-4" style={{ flex: 1, overflow: 'hidden' }}>

          {/* Col 1 — National stats (narrower) */}
          <div style={{ flex: '0 0 24%' }}>
            <div className="glass rounded-xl" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 14, padding: 'clamp(14px,1.8vw,22px)' }}>
              <div>
                <p style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>2.500+</p>
                <p style={{ fontSize: 10, color: '#00C8FF', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 5, fontWeight: 600 }}>
                  anúncios ativos de prótese capilar no Brasil
                </p>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <div>
                <p style={{ fontSize: 'clamp(20px,2.5vw,34px)', fontWeight: 700, color: '#fff', lineHeight: 1 }}>R$6B</p>
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>mercado de cuidados capilares</p>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <p style={{ fontSize: 'clamp(10px,0.95vw,13px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                A maioria dos anúncios usa <strong style={{ color: '#fff' }}>antes/depois com reação emocional</strong>. Urgência com vagas limitadas. CTA direto para WhatsApp.
              </p>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <div>
                <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>O QUE FUNCIONA:</p>
                {['Antes/depois com emoção', 'Urgência (vagas limitadas)', 'CTA direto WhatsApp'].map((t, i) => (
                  <div key={i} className="flex items-start gap-2" style={{ marginBottom: 6 }}>
                    <CheckCircle2 size={13} color="#00E676" style={{ flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontSize: 'clamp(10px,0.85vw,12px)', color: 'rgba(255,255,255,0.8)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2 — Ad pattern (LARGER — Instagram-sized image area) */}
          <div style={{ flex: '0 0 48%' }}>
            <div className="glass rounded-xl" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 10, padding: 'clamp(14px,1.8vw,22px)' }}>
              <p style={{ fontSize: 'clamp(12px, 1.3vw, 18px)', fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                PADRÃO DOS ANÚNCIOS QUE CONVERTEM
              </p>

              {/* Large image area — sized for Instagram screenshot */}
              <div style={{
                flex: 1,
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 10,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 0,
              }}>
                <ImageUpload
                  label="Arraste ou clique para inserir o print do anúncio"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {['✓ Âncora de preço', '✓ Escassez real', '✓ Visual antes/depois', '✓ CTA WhatsApp'].map((a) => (
                  <span key={a} style={{ fontSize: 9, color: '#00E676', fontWeight: 600 }}>{a}</span>
                ))}
              </div>

              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
                Dados estimados com base em pesquisa na Meta Ads Library — março 2026.
              </p>
            </div>
          </div>

          {/* Col 3 — Local gap */}
          <div style={{ flex: '0 0 24%' }}>
            <div
              className="glass rounded-xl"
              style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'clamp(14px,1.8vw,22px)' }}
            >
              <div>
                <p style={{ fontSize: 'clamp(72px,8vw,100px)', fontWeight: 700, color: '#FF3B3B', lineHeight: 1 }}>1</p>
                <p style={{ fontSize: 'clamp(13px,1.3vw,18px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.3, marginTop: 6 }}>
                  anúncio ativo em Feira de Santana
                </p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', marginTop: 6 }}>
                  de um total de 2.500+ no Brasil
                </p>
              </div>
              <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <div>
                <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 10 }}>OPORTUNIDADE:</p>
                <p style={{ fontSize: 'clamp(10px,1vw,14px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65 }}>
                  Ser o segundo a entrar neste mercado local ainda é ser pioneiro. O primeiro a construir pixel, base e autoridade define o benchmark.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
