import { ReactElement, useState, useEffect, useCallback, useRef } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'

interface PresentationProps {
  slides: ReactElement[]
}

export function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const total = slides.length
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const showControls = useCallback(() => {
    setControlsVisible(true)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setControlsVisible(false), 3000)
  }, [])

  useEffect(() => {
    showControls()
    return () => { if (hideTimer.current) clearTimeout(hideTimer.current) }
  }, [showControls])

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= total) return
    setCurrent(idx)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      await document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      showControls()
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault(); next()
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault(); prev()
      }
      if (e.key === 'f' || e.key === 'F') toggleFullscreen()
      if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen(); setIsFullscreen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, toggleFullscreen, showControls])

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const ctrlStyle: React.CSSProperties = {
    opacity: controlsVisible ? 1 : 0,
    transition: 'opacity 300ms ease',
    pointerEvents: controlsVisible ? 'auto' : 'none',
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ background: '#0A0A0A', userSelect: 'none' }}
      onMouseMove={showControls}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, i) => {
          const diff = i - current
          let opacity = 0
          let scale = 1
          if (diff === 0) { opacity = 1; scale = 1 }
          else if (diff < 0) { opacity = 0; scale = 0.95 }
          else { opacity = 0; scale = 1.05 }

          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                opacity,
                transform: `scale(${scale})`,
                transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
                pointerEvents: diff === 0 ? 'auto' : 'none',
                zIndex: diff === 0 ? 1 : 0,
              }}
            >
              {slide}
            </div>
          )
        })}
      </div>



      {/* Bottom nav bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-between"
        style={{
          ...ctrlStyle,
          padding: '0 5.2% 2.5%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
        }}
      >
        {/* Slide counter */}
        <div
          className="glass tabular"
          aria-live="polite"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            padding: '5px 13px',
            borderRadius: 20,
            letterSpacing: '0.06em',
          }}
        >
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>
            {String(current + 1).padStart(2, '0')}
          </span>
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', fontWeight: 400, lineHeight: 1 }}>
            /
          </span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>
            {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === current ? 24 : 6,
                height: 6,
                borderRadius: 3,
                background: i === current
                  ? 'rgba(255,255,255,0.9)'
                  : 'rgba(255,255,255,0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 300ms ease',
                padding: 0,
                touchAction: 'manipulation',
              }}
            />
          ))}
        </div>


      </div>
    </div>
  )
}
