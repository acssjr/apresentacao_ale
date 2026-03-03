export function AuroraBackground() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0, overflow: 'hidden' }}>
      <style>{`
        @keyframes aurora-1 {
          0%,100%{transform:translate(0%,0%) scale(1)}
          33%{transform:translate(8%,-6%) scale(1.08)}
          66%{transform:translate(-5%,9%) scale(0.95)}
        }
        @keyframes aurora-2 {
          0%,100%{transform:translate(0%,0%) scale(1.1)}
          33%{transform:translate(-10%,5%) scale(0.9)}
          66%{transform:translate(7%,-8%) scale(1.15)}
        }
        @keyframes aurora-3 {
          0%,100%{transform:translate(0%,0%) scale(0.95)}
          50%{transform:translate(5%,12%) scale(1.05)}
        }
      `}</style>
      <div style={{position:'absolute',width:'75%',height:'75%',top:'-15%',left:'-10%',background:'radial-gradient(ellipse,rgba(0,200,255,0.13) 0%,transparent 70%)',filter:'blur(70px)',animation:'aurora-1 22s ease-in-out infinite'}} />
      <div style={{position:'absolute',width:'65%',height:'65%',bottom:'-10%',right:'-5%',background:'radial-gradient(ellipse,rgba(0,60,220,0.11) 0%,transparent 70%)',filter:'blur(80px)',animation:'aurora-2 28s ease-in-out infinite'}} />
      <div style={{position:'absolute',width:'45%',height:'45%',top:'25%',right:'15%',background:'radial-gradient(ellipse,rgba(0,230,118,0.06) 0%,transparent 70%)',filter:'blur(60px)',animation:'aurora-3 19s ease-in-out infinite'}} />
    </div>
  )
}
