export default function Tag({
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
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.9,7.5l-6-6C7.7,1.3,7.5,1.2,7.3,1.2H4.7c-0.9,0-1.8,0.4-2.4,1s-1,1.5-1,2.4v2.7c0,0.2,0.1,0.4,0.2,0.5l6,6
		c0.3,0.3,0.7,0.4,1.2,0.4c0.4,0,0.8-0.2,1.2-0.5l4-4c0.3-0.3,0.4-0.7,0.4-1.2C14.3,8.2,14.2,7.8,13.9,7.5z M12.8,8.8l-4,4
		c-0.1,0.1-0.3,0.1-0.3,0L2.8,7V4.7c0-0.5,0.2-1,0.6-1.4C3.7,3,4.2,2.7,4.7,2.7H7l5.8,5.7c0,0,0.1,0.1,0.1,0.2
		C12.8,8.7,12.8,8.8,12.8,8.8z"
      />
      <path
        fill="currentColor"
        d="M6,4.2C5,4.2,4.2,5,4.2,6C4.2,7,5,7.8,6,7.8C7,7.8,7.8,7,7.8,6C7.8,5,7,4.2,6,4.2z M6,6.8
		C5.5,6.8,5.2,6.5,5.2,6S5.5,5.2,6,5.2S6.8,5.5,6.8,6S6.5,6.8,6,6.8z"
      />
    </svg>
  );
}
