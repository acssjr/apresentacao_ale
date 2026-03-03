import { ReactNode, CSSProperties } from 'react'

const PHONE_WIDTH = 433
const PHONE_HEIGHT = 882
const SCREEN_X = 21.25
const SCREEN_Y = 19.25
const SCREEN_WIDTH = 389.5
const SCREEN_HEIGHT = 843.5
const SCREEN_RADIUS = 55.75

const LEFT_PCT = (SCREEN_X / PHONE_WIDTH) * 100
const TOP_PCT = (SCREEN_Y / PHONE_HEIGHT) * 100
const WIDTH_PCT = (SCREEN_WIDTH / PHONE_WIDTH) * 100
const HEIGHT_PCT = (SCREEN_HEIGHT / PHONE_HEIGHT) * 100
const RADIUS_H = (SCREEN_RADIUS / SCREEN_WIDTH) * 100
const RADIUS_V = (SCREEN_RADIUS / SCREEN_HEIGHT) * 100

interface IPhoneMockupProps {
  children?: ReactNode
  style?: CSSProperties
  className?: string
}

export function IPhoneMockup({ children, style, className = '' }: IPhoneMockupProps) {
  const hasContent = !!children

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        height: '100%',
        aspectRatio: `${PHONE_WIDTH}/${PHONE_HEIGHT}`,
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Screen content goes behind the SVG overlay */}
      {hasContent && (
        <div
          style={{
            position: 'absolute',
            left: `${LEFT_PCT}%`,
            top: `${TOP_PCT}%`,
            width: `${WIDTH_PCT}%`,
            height: `${HEIGHT_PCT}%`,
            borderRadius: `${RADIUS_H}% / ${RADIUS_V}%`,
            overflow: 'hidden',
            zIndex: 0,
            background: '#000',
          }}
        >
          {children}
        </div>
      )}

      {/* SVG phone frame — sits above content, punches out screen area */}
      <svg
        viewBox={`0 0 ${PHONE_WIDTH} ${PHONE_HEIGHT}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          transform: 'translateZ(0)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <g mask={hasContent ? 'url(#screenPunch)' : undefined}>
          {/* Titanium outer body */}
          <path
            d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
            fill="#3a3a3a"
          />
          {/* Inner body — dark screen surround */}
          <path
            d="M6 74C6 35.3401 37.3401 4 76 4H356C394.66 4 426 35.3401 426 74V808C426 846.66 394.66 878 356 878H76C37.3401 878 6 846.66 6 808V74Z"
            fill="#1a1a1a"
          />
        </g>

        {/* Top titanium strip */}
        <path
          opacity="0.4"
          d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
          fill="#5a5a5a"
        />

        {/* Screen bezel border */}
        <path
          d={`M${SCREEN_X} 75C${SCREEN_X} 44.2101 46.2101 ${SCREEN_Y} 77 ${SCREEN_Y}H355C385.79 ${SCREEN_Y} 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 ${SCREEN_X} 837.79 ${SCREEN_X} 807V75Z`}
          fill="#111"
          mask={hasContent ? 'url(#screenPunch)' : undefined}
        />

        {/* Dynamic Island pill */}
        <path
          d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
          fill="#0a0a0a"
        />

        <defs>
          <mask id="screenPunch" maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width={PHONE_WIDTH} height={PHONE_HEIGHT} fill="white" />
            <rect
              x={SCREEN_X}
              y={SCREEN_Y}
              width={SCREEN_WIDTH}
              height={SCREEN_HEIGHT}
              rx={SCREEN_RADIUS}
              ry={SCREEN_RADIUS}
              fill="black"
            />
          </mask>
        </defs>
      </svg>
    </div>
  )
}
