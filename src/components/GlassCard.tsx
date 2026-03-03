import { ReactNode, CSSProperties } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function GlassCard({ children, className = '', style }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-xl ${className}`}
      style={{
        padding: 'clamp(12px, 1.8vw, 24px)',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

interface AccentCardProps extends GlassCardProps {
  accentColor: string
  accentWidth?: string
}

GlassCard.LeftAccent = function GlassCardLeftAccent({
  children, className = '', style,
}: AccentCardProps) {
  return (
    <div
      className={`glass rounded-xl ${className}`}
      style={{
        padding: 'clamp(12px, 1.8vw, 24px)',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

GlassCard.TopAccent = function GlassCardTopAccent({
  children, className = '', style,
}: AccentCardProps) {
  return (
    <div
      className={`glass rounded-xl ${className}`}
      style={{
        padding: 'clamp(12px, 1.8vw, 24px)',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
