interface GrainBackgroundProps {
  tint?: 'cyan' | 'red' | 'none'
}

export function GrainBackground({ tint = 'none' }: GrainBackgroundProps) {
  const tintMap: Record<string, string> = {
    cyan: 'rgba(0,200,255,0.05)',
    red: 'rgba(255,59,59,0.05)',
    none: 'transparent',
  }
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 50% 45%, rgba(18,18,28,1) 0%, #0A0A0A 100%)'}} />
      {tint !== 'none' && (
        <div style={{position:'absolute',inset:0,background:`radial-gradient(ellipse 55% 55% at 35% 40%, ${tintMap[tint]}, transparent)`}} />
      )}
      <div style={{
        position:'absolute',inset:0,
        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeBlend mode='screen'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        backgroundRepeat:'repeat',
        backgroundSize:'300px 300px',
        mixBlendMode:'overlay',
      }} />
    </div>
  )
}
