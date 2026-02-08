export default function LandingBackground() {
  return (
    <svg
      className="fixed bottom-0 left-0 w-full pointer-events-none blur"
      viewBox="0 0 1440 260"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="soft-red-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="24" />
        </filter>
      </defs>

      <path
        d="
          M0,80
          C360,260 720,260 1080,140
          C1200,100 1320,90 1440,100
          L1440,260
          L0,260
          Z
        "
        fill="rgb(255, 0, 0)"
        filter="url(#soft-red-glow)"
      />

      <path
        d="
          M0,60
          C360,240 720,240 1080,120
          C1200,90 1320,80 1440,90
          L1440,260
          L0,260
          Z
        "
        fill="#b61717"
      />
    </svg>
  );
}
