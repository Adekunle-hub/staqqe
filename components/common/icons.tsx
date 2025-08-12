export const Arrow = ({ bgColor = "transparent", iconColor = "white", size = 24 }) => (
  <span
    style={{
      backgroundColor: bgColor,
      display: "inline-flex",
  
     
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={iconColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </span>
);
