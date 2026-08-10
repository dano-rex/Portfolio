export function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-background">
      {/* 3D Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F8FAFC 1px, transparent 1px),
            linear-gradient(to bottom, #F8FAFC 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(500px) rotateX(60deg) scale(2.5) translateY(-100px)',
          transformOrigin: 'top center',
        }}
      />
      
      {/* Aurora Orbs - Optimized using radial gradients instead of heavy CSS blurs */}
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] mix-blend-screen animate-pulse-slow" 
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }} 
      />
      <div 
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] mix-blend-screen animate-float" 
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', animationDelay: '2s' }} 
      />
      <div 
        className="absolute bottom-0 left-1/3 w-[800px] h-[800px] mix-blend-screen animate-float" 
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', animationDelay: '4s' }} 
      />
      
      {/* Gradient Mask to fade out grid at edges */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)] pointer-events-none" />
    </div>
  );
}
