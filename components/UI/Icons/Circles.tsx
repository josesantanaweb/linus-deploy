export default function Circles({
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
        d="M21.2,9.8c-0.9-4.3-4.8-7.6-9.4-7.6c-5.3,0-9.6,4.3-9.6,9.6c0,4.6,3.3,8.4,7.6,9.4c0.9,4.3,4.8,7.6,9.4,7.6
	c5.3,0,9.6-4.3,9.6-9.6C28.7,14.6,25.5,10.7,21.2,9.8z M5.2,11.8c0-3.7,3-6.6,6.6-6.6c2.9,0,5.4,1.9,6.3,4.5c-4.4,0.5-7.9,4-8.4,8.4
	C7.1,17.2,5.2,14.7,5.2,11.8z M18.4,12.6c-0.4,3-2.8,5.4-5.8,5.8C13,15.4,15.4,13,18.4,12.6z M19.2,25.8c-2.9,0-5.4-1.9-6.3-4.5
	c4.4-0.5,7.9-4,8.4-8.4c2.6,0.9,4.5,3.4,4.5,6.3C25.8,22.8,22.8,25.8,19.2,25.8z"
      />
    </svg>
  );
}
