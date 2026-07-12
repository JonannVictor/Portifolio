export default function BrowserMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-base-panel/80 shadow-panel backdrop-blur-xl">
      <div className="flex items-center gap-4 border-b border-line px-5 py-3.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="truncate font-mono text-[11px] tracking-wide text-ink-faint">
          {alt}
        </span>
      </div>
      <img src={src} alt={alt} className="w-full" />
    </div>
  )
}
