export function MeshBackground() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <div style={{position:'absolute',width:'55%',height:'55%',top:0,left:0,background:'radial-gradient(ellipse at top left,rgba(0,200,255,0.09) 0%,transparent 65%)',filter:'blur(50px)'}} />
      <div style={{position:'absolute',width:'50%',height:'50%',bottom:0,right:0,background:'radial-gradient(ellipse at bottom right,rgba(100,50,255,0.08) 0%,transparent 65%)',filter:'blur(60px)'}} />
      <div style={{position:'absolute',width:'40%',height:'40%',top:0,right:0,background:'radial-gradient(ellipse at top right,rgba(0,230,118,0.04) 0%,transparent 65%)',filter:'blur(50px)'}} />
      <div style={{position:'absolute',width:'65%',height:'35%',top:'32%',left:'17%',background:'radial-gradient(ellipse,rgba(255,255,255,0.012) 0%,transparent 70%)',filter:'blur(30px)'}} />
    </div>
  )
}
