import { useState, useRef, useEffect, useCallback, CSSProperties } from 'react'
import { Upload, RefreshCw, X } from 'lucide-react'

// ─── Rectangular image upload (click to upload, drag to reposition) ───────────

interface ImageUploadProps {
  label?: string
  style?: CSSProperties
  className?: string
  storageKey?: string
}

export function ImageUpload({ label = 'Clique para fazer upload', style, className = '', storageKey }: ImageUploadProps) {
  const [src, setSrc] = useState<string | null>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [dragging, setDragging] = useState(false)
  const dragRef = useRef<{ mx: number; my: number; px: number; py: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Load from localStorage on mount
  useEffect(() => {
    if (!storageKey) return
    try {
      const saved = localStorage.getItem(`img_upload_${storageKey}`)
      if (saved) {
        const parsed = JSON.parse(saved)
        setSrc(parsed.src)
        setPos(parsed.pos ?? { x: 50, y: 50 })
      }
    } catch {}
  }, [storageKey])

  const persist = useCallback((newSrc: string | null, newPos: { x: number; y: number }) => {
    if (!storageKey) return
    if (newSrc) {
      try { localStorage.setItem(`img_upload_${storageKey}`, JSON.stringify({ src: newSrc, pos: newPos })) } catch {}
    } else {
      localStorage.removeItem(`img_upload_${storageKey}`)
    }
  }, [storageKey])

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (storageKey) {
      // Upload para o servidor → salva em public/images/
      const reader = new FileReader()
      reader.onload = async ev => {
        const dataUrl = ev.target?.result as string
        const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
        try {
          const res = await fetch(`/api/upload?key=${storageKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataUrl, ext }),
          })
          const { url } = await res.json()
          setSrc(url)
          setPos({ x: 50, y: 50 })
          persist(url, { x: 50, y: 50 })
        } catch {
          // fallback: usa base64 em memória
          setSrc(dataUrl)
          setPos({ x: 50, y: 50 })
        }
      }
      reader.readAsDataURL(file)
    } else {
      // Sem storageKey: apenas base64 em memória (temporário)
      const reader = new FileReader()
      reader.onload = ev => {
        setSrc(ev.target?.result as string)
        setPos({ x: 50, y: 50 })
      }
      reader.readAsDataURL(file)
    }
    e.target.value = ''
  }

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    // Remove arquivo do servidor se for uma URL de arquivo
    if (storageKey && src && !src.startsWith('data:')) {
      fetch(`/api/upload?key=${storageKey}`, { method: 'DELETE' }).catch(() => {})
    }
    setSrc(null)
    setPos({ x: 50, y: 50 })
    persist(null, { x: 50, y: 50 })
  }

  const onMouseDown = (e: React.MouseEvent) => {
    if (!src) return
    e.preventDefault()
    setDragging(true)
    dragRef.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y }
  }

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!dragRef.current || !containerRef.current) return
    const { width, height } = containerRef.current.getBoundingClientRect()
    const dx = ((e.clientX - dragRef.current.mx) / width) * 100
    const dy = ((e.clientY - dragRef.current.my) / height) * 100
    const newPos = {
      x: Math.max(0, Math.min(100, dragRef.current.px - dx)),
      y: Math.max(0, Math.min(100, dragRef.current.py - dy)),
    }
    setPos(newPos)
  }, [])

  const onMouseUp = useCallback(() => {
    setDragging(false)
    if (dragRef.current && src) {
      persist(src, pos)
    }
    dragRef.current = null
  }, [src, pos, persist])

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [dragging, onMouseMove, onMouseUp])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 8,
        cursor: src ? (dragging ? 'grabbing' : 'grab') : 'pointer',
        ...style,
      }}
      onClick={() => { if (!src) inputRef.current?.click() }}
      onMouseDown={onMouseDown}
    >
      {src ? (
        <>
          <img
            src={src}
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: `${pos.x}% ${pos.y}%`,
              display: 'block',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
          {/* Remove button (X) */}
          <button
            onMouseDown={e => e.stopPropagation()}
            onClick={clearImage}
            style={{
              position: 'absolute', top: 6, right: 6,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 22, height: 22,
              background: 'rgba(0,0,0,0.7)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              cursor: 'pointer', color: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(8px)',
              padding: 0,
            }}
            title="Remover imagem"
          >
            <X size={11} />
          </button>
          {/* Swap button */}
          <button
            onMouseDown={e => e.stopPropagation()}
            onClick={e => { e.stopPropagation(); inputRef.current?.click() }}
            style={{
              position: 'absolute', bottom: 6, right: 6,
              display: 'flex', alignItems: 'center', gap: 4,
              background: 'rgba(0,0,0,0.65)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 6, padding: '3px 8px',
              cursor: 'pointer', color: 'rgba(255,255,255,0.75)',
              fontSize: 9, letterSpacing: '0.04em',
              backdropFilter: 'blur(8px)',
            }}
          >
            <RefreshCw size={9} />
            trocar
          </button>
          {/* Drag hint label */}
          <div style={{
            position: 'absolute', bottom: 6, left: 6,
            fontSize: 9, color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.03em',
            pointerEvents: 'none',
            userSelect: 'none',
          }}>
            arraste para reposicionar
          </div>
        </>
      ) : (
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 8,
          background: 'rgba(255,255,255,0.03)',
          border: '1px dashed rgba(255,255,255,0.15)',
          borderRadius: 8,
        }}>
          <Upload size={15} color="rgba(255,255,255,0.25)" />
          <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textAlign: 'center', lineHeight: 1.5 }}>
            {label}
          </p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={onFile}
      />
    </div>
  )
}

// ─── Circular avatar upload ────────────────────────────────────────────────────

interface AvatarUploadProps {
  size?: number
  storageKey?: string
}

export function AvatarUpload({ size = 42, storageKey }: AvatarUploadProps) {
  const [src, setSrc] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!storageKey) return
    try {
      const saved = localStorage.getItem(`avatar_upload_${storageKey}`)
      if (saved) setSrc(saved)
    } catch {}
  }, [storageKey])

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (storageKey) {
      const reader = new FileReader()
      reader.onload = async ev => {
        const dataUrl = ev.target?.result as string
        const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg'
        try {
          const res = await fetch(`/api/upload?key=${storageKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataUrl, ext }),
          })
          const { url } = await res.json()
          setSrc(url)
          try { localStorage.setItem(`avatar_upload_${storageKey}`, url) } catch {}
        } catch {
          setSrc(dataUrl)
          try { localStorage.setItem(`avatar_upload_${storageKey}`, dataUrl) } catch {}
        }
      }
      reader.readAsDataURL(file)
    } else {
      const reader = new FileReader()
      reader.onload = ev => { setSrc(ev.target?.result as string) }
      reader.readAsDataURL(file)
    }
    e.target.value = ''
  }

  const clearImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (storageKey && src && !src.startsWith('data:')) {
      fetch(`/api/upload?key=${storageKey}`, { method: 'DELETE' }).catch(() => {})
    }
    setSrc(null)
    if (storageKey) localStorage.removeItem(`avatar_upload_${storageKey}`)
  }

  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      <div
        style={{
          width: size, height: size, borderRadius: '50%',
          overflow: 'hidden',
          background: src ? 'none' : '#252525',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: src ? 'none' : '1px dashed rgba(255,255,255,0.15)',
          transition: 'border-color 200ms',
        }}
        onClick={() => inputRef.current?.click()}
      >
        {src
          ? <img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} draggable={false} />
          : <Upload size={12} color="rgba(255,255,255,0.25)" />
        }
        <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onFile} />
      </div>
      {src && (
        <button
          onClick={clearImage}
          style={{
            position: 'absolute', top: -4, right: -4,
            width: 16, height: 16,
            background: 'rgba(0,0,0,0.8)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '50%',
            cursor: 'pointer', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 0,
          }}
        >
          <X size={8} />
        </button>
      )}
    </div>
  )
}
