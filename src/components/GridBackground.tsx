export function GridBackground() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0, overflow: 'hidden' }}>
      <div style={{
        position:'absolute',inset:0,
        backgroundImage:'linear-gradient(rgba(0,200,255,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(0,200,255,0.045) 1px,transparent 1px)',
        backgroundSize:'80px 80px',
        maskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 30%,transparent 100%)',
        WebkitMaskImage:'radial-gradient(ellipse 85% 85% at 50% 50%,black 30%,transparent 100%)',
      }} />
      <div style={{position:'absolute',width:'50%',height:'50%',top:'25%',left:'25%',background:'radial-gradient(ellipse,rgba(0,200,255,0.05) 0%,transparent 70%)',filter:'blur(60px)'}} />
    </div>
  )
}
