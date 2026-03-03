import { VideoBackground } from '../components/VideoBackground'
import { SlideHeader } from '../components/SlideHeader'

const cards = [
  {
    num: '01',
    title: 'RECEITA RECORRENTE VIA MANUTENÇÃO',
    body: 'Cada cliente de prótese retorna a cada 7–20 dias para manutenção. Com manutenções entre R$100–300, um único cliente vale entre R$2.400 e R$9.800 por ano — sem nenhum novo esforço de captação.',
    stats: [
      { v: 'R$9.800', label: 'valor anual máximo por cliente', color: '#fff' },
      { v: '10 clientes', label: 'fixos = até R$98k/ano só em manutenção', color: '#fff' },
      { v: '7–20 dias', label: 'ciclo médio de retorno', color: 'rgba(255,255,255,0.5)' },
    ],
  },
  {
    num: '02',
    title: 'AVALIAÇÃO SIGILOSA COMO FUNIL DE ENTRADA',
    body: 'A barreira emocional #1 do cliente é: "as pessoas vão perceber que é prótese?". A avaliação sigilosa gratuita remove essa barreira antes de qualquer compromisso. Nenhum concorrente em FSA oferece isso.',
    stats: [
      { v: '0', label: 'concorrentes oferecem avaliação gratuita em FSA', color: '#FF3B3B' },
      { v: '100%', label: 'dos grandes players nacionais usam oferta de entrada', color: '#00E676' },
      { v: '3–5×', label: 'mais conversão com lead que passa pela avaliação', color: '#fff' },
    ],
  },
  {
    num: '03',
    title: 'POSIÇÃO DE PRIMEIRO ENTRANTE',
    body: 'Mercado em Estágio 1–2 significa que quem constrói pixel, base de e-mails e autoridade local agora define o padrão. O segundo a entrar pagará o dobro pelo mesmo posicionamento.',
    stats: [
      { v: '1', label: 'único concorrente com digital ativo hoje', color: '#FF3B3B' },
      { v: '12–18m', label: 'antes do mercado evoluir para o Estágio 3', color: 'rgba(255,255,255,0.5)' },
      { v: 'Agora', label: 'melhor janela para construir autoridade local', color: '#00C8FF' },
    ],
  },
]

export function OpportunitiesSlide() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: '#0A0A0A' }}>
      <VideoBackground />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
      <SlideHeader slideNum="12 / 16" />

      <div className="relative z-10 flex flex-col" style={{ flex: 1, padding: '2% 5.2% 3%', overflow: 'hidden' }}>
        <p style={{ fontSize: 9, color: '#00C8FF', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1%' }}>
          ONDE ESTÁ O DINHEIRO
        </p>
        <h2 style={{ fontSize: 'clamp(20px, 3.5vw, 48px)', fontWeight: 700, lineHeight: 1.05, marginBottom: '2%', textTransform: 'uppercase' }}>
          Três Oportunidades<br />que Mudam o Jogo.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2%', flex: 1, overflow: 'hidden' }}>
          {cards.map((c, i) => (
            <div
              key={i}
              className="glass rounded-xl"
              style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 0, overflow: 'hidden' }}
            >
              {/* Left content */}
              <div style={{ flex: '0 0 58%', padding: 'clamp(14px,1.8vw,22px)', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                <p style={{
                  fontSize: 9, fontWeight: 700, color: '#00C8FF',
                  letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8,
                }}>
                  {c.num} · {c.title}
                </p>
                <p style={{ fontSize: 'clamp(12px,1.2vw,16px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                  {c.body}
                </p>
              </div>

              {/* Right stats — 3 boxes in a row */}
              <div style={{ flex: 1, display: 'flex', gap: 0 }}>
                {c.stats.map((s, j) => (
                  <div
                    key={j}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: 'clamp(10px,1.4vw,18px) clamp(8px,1vw,14px)',
                      borderRight: j < c.stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                    }}
                  >
                    <p style={{
                      fontSize: 'clamp(20px,2.2vw,32px)',
                      fontWeight: 700,
                      color: s.color,
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>
                      {s.v}
                    </p>
                    <p style={{
                      fontSize: 'clamp(9px,0.8vw,11px)',
                      color: 'rgba(255,255,255,0.45)',
                      lineHeight: 1.35,
                    }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
