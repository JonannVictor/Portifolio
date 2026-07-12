export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid discreto, esmaecendo nas bordas */}
      <div
        className="absolute inset-0 bg-dot-grid bg-[length:28px_28px] opacity-[0.35]"
        style={{
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 30%, black 0%, transparent 75%)',
        }}
      />

      {/* Glow azul suave, atrás do painel de código */}
      <div
        className="absolute right-[-10%] top-[12%] h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: 'rgba(76, 130, 251, 0.16)' }}
      />

      {/* Vinheta leve pra ancorar o conteúdo no centro */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/60" />

      {/* Linha de base sutil, estilo "canvas de produto" */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
    </div>
  )
}
