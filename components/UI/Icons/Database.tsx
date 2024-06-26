export default function Database({
  width,
  height,
  props,
}: {
  width?: number;
  height?: number;
  [x: string]: any;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_327_8268)">
        <path
          d="M12 9C16.4183 9 20 7.65685 20 6C20 4.34315 16.4183 3 12 3C7.58172 3 4 4.34315 4 6C4 7.65685 7.58172 9 12 9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6V12C4 12.7956 4.84285 13.5587 6.34315 14.1213C7.84344 14.6839 9.87827 15 12 15C14.1217 15 16.1566 14.6839 17.6569 14.1213C19.1571 13.5587 20 12.7956 20 12V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12V18C4 18.7956 4.84285 19.5587 6.34315 20.1213C7.84344 20.6839 9.87827 21 12 21C14.1217 21 16.1566 20.6839 17.6569 20.1213C19.1571 19.5587 20 18.7956 20 18V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_327_8268">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
