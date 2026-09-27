/** Phosphor "trend-up" (light) — svg02. */
export function TrendUpIcon() {
  return (
    <svg viewBox="0 0 256 256" focusable="false" className="block size-full" fill="rgb(31, 31, 31)" aria-hidden="true">
      <path d="M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z" />
    </svg>
  );
}

/** Phosphor "rocket" (light) — svg04. */
export function RocketIcon() {
  return (
    <svg viewBox="0 0 256 256" focusable="false" className="block size-full" fill="rgb(255, 255, 255)" aria-hidden="true">
      <path d="M150,224a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h32A6,6,0,0,1,150,224ZM128,110a10,10,0,1,0-10-10A10,10,0,0,0,128,110Zm93.67,45.4L209.31,211A14,14,0,0,1,187,219l-27.79-21H96.82L69,219a14,14,0,0,1-22.34-8L34.33,155.4a14.06,14.06,0,0,1,2.91-12l29-34.76a121.28,121.28,0,0,1,8.48-36.71c12.72-31.88,35.52-51.88,44.73-59a14,14,0,0,1,17.16,0c9.21,7.12,32,27.12,44.73,59a121.28,121.28,0,0,1,8.48,36.71l29,34.76A14.06,14.06,0,0,1,221.67,155.4ZM98.26,186h59.48c21.93-38.46,26.12-75.33,12.43-109.62-11.95-30-34.35-48.87-40.93-54a2,2,0,0,0-2.48,0c-6.58,5.09-29,24-40.93,54C72.14,110.67,76.33,147.54,98.26,186ZM87,190.4c-12-21.49-18.9-42.6-20.62-63.19L46.46,151.08a2,2,0,0,0-.42,1.71l12.37,55.64a2,2,0,0,0,3.2,1.13l.13-.11Zm122.57-39.32-19.89-23.87c-1.72,20.59-8.6,41.7-20.62,63.19l25.23,19,.13.11a2,2,0,0,0,3.2-1.13L210,152.79A2,2,0,0,0,209.54,151.08Z" />
    </svg>
  );
}

/** Phosphor "quotes" (fill) — svg05. */
export function QuoteIcon() {
  return (
    <svg viewBox="0 0 256 256" focusable="false" className="block size-full" fill="rgb(31, 31, 31)" aria-hidden="true">
      <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z" />
    </svg>
  );
}

const TICKS = Array.from({ length: 41 }, (_, i) => {
  const a = (i * 9 * Math.PI) / 180;
  const s = Math.sin(a);
  const c = Math.cos(a);
  return {
    x1: 100 + 74 * s,
    y1: 100 - 74 * c,
    x2: 100 + 100 * s,
    y2: 100 - 100 * c,
    // last 4 ticks (333°–360°) are the unfilled 10% of the gauge
    stroke: i >= 37 ? "rgba(31, 31, 31, 0.03)" : "rgba(31, 31, 31, 0.6)",
  };
});

/** Radial 90% tick gauge — svg03 (41 ticks every 9°, r 74→100 in a 200 viewBox). */
export function TickDial() {
  return (
    <svg viewBox="0 0 200 200" className="block size-full" aria-hidden="true">
      {TICKS.map((t, i) => (
        <line
          key={i}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke={t.stroke}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
