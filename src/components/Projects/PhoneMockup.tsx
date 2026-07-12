export default function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-[2.25rem] border-4 border-line bg-base-panel/80 shadow-panel backdrop-blur-xl">
      <div className="flex justify-center py-2.5">
        <span className="h-1.5 w-16 rounded-full bg-white/15" />
      </div>
      <img src={src} alt={alt} className="w-full" />
    </div>
  )
}
