"use client"

export default function TopToolbar() {
  const fire = (name: string) => () => window.dispatchEvent(new CustomEvent(name))
  const fireDetail = <T,>(name: string, detail: T) => () => window.dispatchEvent(new CustomEvent(name, { detail }))

  return (
    <div className="fixed top-14 left-1/2 -translate-x-1/2 z-40 pointer-events-auto w-[95vw] md:w-auto max-w-[95vw]">
      <div className="flex items-center gap-1 md:gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur px-2 md:px-3 py-1.5 shadow-xl overflow-x-auto">
        {/* Essential controls - always visible */}
        <button onClick={fire('nc-fit-view')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap">Fit</button>
        <button onClick={fire('nc-center-root')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden sm:inline-flex">Center</button>
        <div className="w-px h-5 bg-white/20 hidden sm:block" />
        <button onClick={fire('nc-add-node')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap">Add</button>
        <button onClick={fire('nc-delete-selection')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap">Del</button>
        <div className="w-px h-5 bg-white/20" />
        <button onClick={fire('nc-clear-board')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap">Clear</button>

        {/* Extended type/style controls - hidden on small mobile */}
        <div className="w-px h-5 bg-white/20 hidden md:block" />
        <span className="text-[11px] text-white/80 hidden md:inline">Type:</span>
        <button onClick={fireDetail('nc-convert-type', 'thought')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden sm:inline-flex">Thought</button>
        <button onClick={fireDetail('nc-convert-type', 'action')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden sm:inline-flex">Action</button>
        <button onClick={fireDetail('nc-convert-type', 'emotion')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden md:inline-flex">Emotion</button>
        <button onClick={fireDetail('nc-convert-type', 'root')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden md:inline-flex">Root</button>

        <div className="w-px h-5 bg-white/20 hidden lg:block" />
        <span className="text-[11px] text-white/80 hidden lg:inline">Edge:</span>
        <button onClick={fireDetail('nc-edges-curve', 'flexible')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden lg:inline-flex">Flexible</button>
        <button onClick={fireDetail('nc-edges-curve', 'straight')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden lg:inline-flex">Straight</button>
        <button onClick={fireDetail('nc-edges-line', 'solid')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden lg:inline-flex">Solid</button>
        <button onClick={fireDetail('nc-edges-line', 'dashed')} className="rounded-md border border-white/25 px-2 md:px-2.5 py-1 text-xs text-white hover:bg-white/10 whitespace-nowrap hidden lg:inline-flex">Dashed</button>
      </div>
    </div>
  )
}


