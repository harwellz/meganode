/**
 * Animated feature icons for the VisionTech tech row. Each icon lives in a 34×55 box
 * (Framer's icon frame). Keyframes are declared once in `VisionTechKeyframes`.
 */

export function VisionTechKeyframes() {
  return (
    <style>{`
@keyframes vt-wobble { from { transform: rotate(-20deg); } to { transform: rotate(35deg); } }
@keyframes vt-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes vt-knob { from { transform: translateY(var(--vt-a)); } to { transform: translateY(var(--vt-b)); } }
@media (prefers-reduced-motion: reduce) {
  .vt-anim { animation: none !important; }
}
`}</style>
  );
}

const LENS_PATH =
  "M 5.587 1.427 C 10.875 -1.564 17.587 0.299 20.577 5.587 C 23.402 10.582 21.894 16.844 17.262 20.044 L 21.222 27.048 L 22.096 26.555 L 30.956 42.223 L 27.475 44.192 L 18.613 28.524 L 19.481 28.033 L 15.521 21.028 C 10.392 23.346 4.251 21.41 1.427 16.417 C -1.563 11.129 0.299 4.417 5.587 1.427 Z M 18.836 6.571 C 16.389 2.245 10.898 0.721 6.571 3.168 C 2.245 5.615 0.721 11.106 3.168 15.432 C 5.615 19.759 11.106 21.283 15.432 18.836 C 19.759 16.389 21.283 10.898 18.836 6.571 Z";
const SPARKLE_BIG =
  "M 5.621 0.224 C 5.682 -0.074 6.108 -0.074 6.169 0.224 L 6.981 4.157 C 7.049 4.485 7.305 4.742 7.634 4.81 L 11.567 5.622 C 11.865 5.683 11.865 6.109 11.567 6.17 L 7.634 6.981 C 7.305 7.049 7.049 7.306 6.981 7.635 L 6.169 11.567 C 6.108 11.865 5.683 11.865 5.621 11.567 L 4.809 7.635 C 4.741 7.306 4.484 7.049 4.156 6.981 L 0.223 6.17 C -0.074 6.109 -0.074 5.683 0.223 5.622 L 4.156 4.81 C 4.484 4.742 4.741 4.485 4.809 4.157 Z";
const SPARKLE_SMALL =
  "M 2.113 0.144 C 2.153 -0.048 2.426 -0.048 2.465 0.144 L 2.731 1.429 C 2.775 1.64 2.94 1.805 3.151 1.849 L 4.435 2.114 C 4.627 2.154 4.627 2.427 4.435 2.466 L 3.15 2.731 C 2.939 2.775 2.774 2.94 2.73 3.151 L 2.465 4.436 C 2.426 4.628 2.152 4.628 2.113 4.436 L 1.848 3.151 C 1.805 2.94 1.64 2.775 1.428 2.731 L 0.143 2.466 C -0.048 2.426 -0.048 2.153 0.143 2.114 L 1.428 1.849 C 1.64 1.805 1.805 1.64 1.848 1.429 Z";

/** 1. Magnifier + sparkles, wobbling between −20° and +35° around the lens centre. */
export function MagnifierIcon() {
  return (
    <div className="relative h-[55px] w-[34px]" aria-hidden="true">
      <div className="vt-anim absolute inset-0 origin-[11px_22px] animate-[vt-wobble_2s_ease-in-out_infinite_alternate]">
        <svg className="absolute top-[11px] left-0 h-[44px] w-[31px] overflow-visible" viewBox="0 0 30.956 44.192">
          <path d={LENS_PATH} fill="#fff" />
        </svg>
        <svg className="absolute top-[11px] left-[33px] h-[12px] w-[12px] overflow-visible" viewBox="0 0 11.79 11.791">
          <path d={SPARKLE_BIG} fill="#fff" />
        </svg>
        <svg className="absolute top-[25px] left-[39px] h-[5px] w-[5px] overflow-visible" viewBox="0 0 4.579 4.58">
          <path d={SPARKLE_SMALL} fill="#fff" />
        </svg>
      </div>
    </div>
  );
}

/** 2. Orbit: outer ring + dot spins one way, inner ring + dot the other, centre dot fixed. */
export function OrbitIcon() {
  return (
    <div className="relative h-[55px] w-[34px]" aria-hidden="true">
      <div className="vt-anim absolute top-[6.05px] left-0 h-[44px] w-[44px] animate-[vt-spin_6s_linear_infinite_reverse]">
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_#fff]" />
        <div className="absolute top-0 left-[8px] h-[6px] w-[6px] rounded-full bg-white" />
      </div>
      <div className="vt-anim absolute top-[15.5px] left-[9px] h-[25px] w-[25px] animate-[vt-spin_4s_linear_infinite]">
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_#fff]" />
        <div className="absolute top-[14px] left-[20px] h-[6px] w-[6px] rounded-full bg-white" />
      </div>
      <div className="absolute top-[24.55px] left-[19px] h-[7px] w-[7px] rounded-full bg-white" />
    </div>
  );
}

/** Knob rest position (top) and bob range per track. */
const KNOBS = [
  { top: "top-[9px]", range: "[--vt-a:0px] [--vt-b:25px]", timing: "[animation-duration:1.8s] [animation-delay:-0.4s]" },
  { top: "top-[26px]", range: "[--vt-a:-10px] [--vt-b:4px]", timing: "[animation-duration:1.5s] [animation-delay:-1.1s]" },
  { top: "top-[15px]", range: "[--vt-a:-6px] [--vt-b:10px]", timing: "[animation-duration:1.6s] [animation-delay:-0.2s]" },
  { top: "top-[34px]", range: "[--vt-a:-10px] [--vt-b:5px]", timing: "[animation-duration:1.4s] [animation-delay:-0.8s]" },
];

/** 3. Sliders: four 1px tracks with 7×3 knobs bobbing at staggered phases. */
export function SlidersIcon() {
  return (
    <div className="flex h-[55px] w-[34px] items-end justify-center gap-px overflow-hidden" aria-hidden="true">
      {KNOBS.map((k, i) => (
        <div key={i} className="relative h-[44px] w-[7px] overflow-hidden">
          <div className="absolute inset-y-0 left-[2.48px] w-px bg-white" />
          <div
            className={`vt-anim absolute inset-x-0 h-[3px] bg-white [animation-name:vt-knob] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite] [animation-direction:alternate] ${k.top} ${k.range} ${k.timing}`}
          />
        </div>
      ))}
    </div>
  );
}
