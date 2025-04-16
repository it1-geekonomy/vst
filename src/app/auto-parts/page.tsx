export default function Page() {
  const gradientColor = "rgba(223, 172, 79, 0.56)"

    return (
      <div className="relative w-full min-h-screen">
      {/* Fixed background gradient */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(33.31% 35.31% at 91.72% 2.91%, ${gradientColor} 0%, transparent 100%),
            linear-gradient(161.25deg, rgba(241, 233, 146, 1) 50.56%, rgba(241, 233, 146, 0) 107.23%)
          `
        }}
        
      />
    
    </div>
  );
}
  