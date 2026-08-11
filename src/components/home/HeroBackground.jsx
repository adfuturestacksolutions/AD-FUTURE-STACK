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
        src=""
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
