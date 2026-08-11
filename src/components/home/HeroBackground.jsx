export default function HeroBackground({ bgScale = 1, bgOpacity = 1, mousePos = { x: 0, y: 0 }, isTouch = false }) {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 ease-out overflow-hidden"
      style={{
        transform: `scale(${bgScale}) translate3d(${isTouch ? 0 : mousePos.x * 2}px, ${isTouch ? 0 : mousePos.y * 2}px, 0)`,
        opacity: bgOpacity,
      }}
    >
      {/* 1. Full Image Background (Modern IT Team Working) */}
      <img
        src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="IT Solutions & Services Team Workspace"
        className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1]"
      />

      {/* 2. Dark Tint Overlay for Base Readability */}
      <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />


      {/* 5. Subtle Grid / Vector Lines */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 mix-blend-overlay" />
    </div>
  )
}
