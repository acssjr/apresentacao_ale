interface SlideHeaderProps {
  slideNum: string
}

export function SlideHeader({ slideNum }: SlideHeaderProps) {
  return (
    <div
      className="relative z-10 flex items-center justify-between w-full"
      style={{
        padding: '2.5% 5.2% 0',
        fontSize: 'clamp(11px, 1.4vw, 18px)',
        color: 'rgba(255,255,255,0.7)',
      }}
    >
      <span style={{ fontWeight: 400, letterSpacing: '0.02em' }}>Proposta Estratégica</span>
    </div>
  )
}
