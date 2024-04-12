export default function Badge({
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
        d="M22,18.18l-3.3-5.73A7.6,7.6,0,1,0,4.4,8.94a7.54,7.54,0,0,0,.87,3.51L2,18.18A.82.82,0,0,0,2,19a.84.84,0,0,0,.74.38l3.37-.22,1.49,3a.81.81,0,0,0,.7.46h0a.81.81,0,0,0,.7-.41l3-5.17,3,5.17a.81.81,0,0,0,.7.41h0a.81.81,0,0,0,.7-.46l1.49-3,3.37.22A.83.83,0,0,0,22,19,.8.8,0,0,0,22,18.18ZM12,3.51A5.43,5.43,0,1,1,6.58,8.94,5.44,5.44,0,0,1,12,3.51ZM8.36,20.12,7.3,18a.78.78,0,0,0-.78-.45l-2.39.15,2.16-3.74a7.65,7.65,0,0,0,4.23,2.45Zm9.12-2.59a.79.79,0,0,0-.78.45l-1.06,2.14-2.16-3.73a7.65,7.65,0,0,0,4.23-2.45l2.15,3.74Z"
        transform="translate(-1.86 -1.34)"
      />
    </svg>
  );
}
