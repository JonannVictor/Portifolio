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

      {/* Glow azul suave, ligando o painel de código ao texto */}
      <div
        className="absolute right-[-6%] top-[10%] h-[600px] w-[600px] rounded-full blur-[130px]"
        style={{ background: 'rgba(76, 130, 251, 0.18)' }}
      />

      {/* Vinheta leve pra ancorar o conteúdo no centro */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/60" />

      {/* Linha de base sutil, estilo "canvas de produto" */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
    </div>
  )
}
