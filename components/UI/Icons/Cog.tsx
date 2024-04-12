export default function Cog({
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
      <path
        fill="currentColor"
        d="M19.9,9.4c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3
	c0.7-1.1,0.5-2.4-0.4-3.3c-0.9-0.9-2.2-1.1-3.3-0.4c-0.1,0.1-0.2,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.2
	c-0.1-0.1-0.1-0.2-0.2-0.3C14.3,2.8,13.3,2,12,2c-1.3,0-2.3,0.8-2.6,2.1C9.3,4.3,9.1,4.5,8.9,4.6C8.7,4.7,8.5,4.6,8.3,4.5
	C7.2,3.9,5.8,4,4.9,4.9C4,5.8,3.9,7.2,4.5,8.3c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.2-0.1,0.3c0,0.1-0.1,0.2-0.2,0.3
	C4.3,9.3,4.2,9.3,4.1,9.4C2.8,9.7,2,10.7,2,12c0,1.3,0.8,2.3,2.1,2.6c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.2,0.3
	c0,0.1,0.1,0.2,0.1,0.3s0,0.2-0.1,0.3c-0.7,1.1-0.5,2.4,0.4,3.3c0.9,0.9,2.2,1.1,3.3,0.4c0.1-0.1,0.2-0.1,0.3-0.1
	c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2,0.1,0.3,0.2s0.1,0.2,0.2,0.3C9.7,21.2,10.7,22,12,22s2.3-0.8,2.6-2.1c0-0.1,0.1-0.2,0.2-0.3
	c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.3,0.1c1.1,0.7,2.4,0.5,3.3-0.4s1.1-2.2,0.4-3.3
	c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3c0-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.2c1.2-0.3,2.1-1.4,2.1-2.6
	C22,10.7,21.2,9.7,19.9,9.4z M19.4,12.7c-0.4,0.1-0.8,0.3-1.1,0.6c-0.3,0.3-0.6,0.6-0.7,1c-0.2,0.4-0.2,0.8-0.2,1.2
	c0,0.4,0.2,0.8,0.4,1.2c0.3,0.5,0,0.8-0.1,0.9c-0.1,0.1-0.4,0.4-0.9,0.1c-0.4-0.2-0.8-0.4-1.2-0.4c-0.4,0-0.9,0-1.3,0.2
	c-0.4,0.2-0.7,0.4-1,0.7c-0.3,0.3-0.5,0.7-0.6,1.1C12.6,20,12.1,20,12,20s-0.6,0-0.7-0.6c-0.1-0.4-0.3-0.8-0.6-1.1
	c-0.3-0.3-0.6-0.6-1-0.7c-0.3-0.1-0.7-0.2-1-0.2c-0.1,0-0.1,0-0.2,0c-0.4,0-0.8,0.2-1.2,0.4c-0.4,0.3-0.8,0-0.9-0.1S6,17.2,6.2,16.8
	c0.2-0.4,0.4-0.8,0.4-1.2c0-0.4,0-0.9-0.2-1.3c-0.2-0.4-0.4-0.8-0.7-1C5.4,13,5,12.8,4.6,12.7C4,12.6,4,12.1,4,12
	c0-0.1,0-0.6,0.6-0.7C5,11.2,5.4,11,5.7,10.7c0.3-0.3,0.6-0.6,0.7-1c0.2-0.4,0.2-0.8,0.2-1.3c0-0.4-0.2-0.8-0.4-1.2
	C6,6.8,6.2,6.4,6.3,6.3C6.4,6.2,6.8,6,7.2,6.2C8,6.7,8.9,6.8,9.7,6.4c0.8-0.3,1.4-1,1.6-1.9v0C11.4,4,11.9,4,12,4s0.6,0,0.7,0.6
	C12.8,5,13,5.4,13.3,5.7c0.3,0.3,0.6,0.6,1,0.7c0.4,0.2,0.8,0.2,1.3,0.2c0.4,0,0.8-0.2,1.2-0.4c0.5-0.3,0.8,0,0.9,0.1
	c0.1,0.1,0.4,0.4,0.1,0.9c-0.2,0.4-0.4,0.8-0.4,1.2c0,0.4,0,0.9,0.2,1.3c0.2,0.4,0.4,0.7,0.7,1c0.3,0.3,0.7,0.5,1.1,0.6
	C20,11.4,20,11.9,20,12C20,12.1,20,12.6,19.4,12.7z"
      />
      <path
        fill="currentColor"
        d="M12,8c-2.2,0-4,1.8-4,4s1.8,4,4,4c2.2,0,4-1.8,4-4S14.2,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2
	c1.1,0,2,0.9,2,2S13.1,14,12,14z"
      />
    </svg>
  );
}
