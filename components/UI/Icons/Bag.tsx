export default function Bag({
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
      viewBox="0 0 13 16"
      fill="none"
      {...props}
    >
      <path  fill="currentColor" d="M11.4105 3.76501H9.99885C9.99885 1.78867 8.44602 0.23584 6.46969 0.23584C4.49335 0.23584 2.94052 1.78867 2.94052 3.76501H1.52885C0.752437 3.76501 0.117188 4.40026 0.117188 5.17667V13.6467C0.117188 14.4231 0.752437 15.0583 1.52885 15.0583H11.4105C12.1869 15.0583 12.8222 14.4231 12.8222 13.6467V5.17667C12.8222 4.40026 12.1869 3.76501 11.4105 3.76501ZM6.46969 1.64751C7.6696 1.64751 8.58719 2.56509 8.58719 3.76501H4.35219C4.35219 2.56509 5.26977 1.64751 6.46969 1.64751ZM11.4105 13.6467H1.52885V5.17667H11.4105V13.6467ZM6.46969 8.00001C5.26977 8.00001 4.35219 7.08242 4.35219 5.88251H2.94052C2.94052 7.85884 4.49335 9.41167 6.46969 9.41167C8.44602 9.41167 9.99885 7.85884 9.99885 5.88251H8.58719C8.58719 7.08242 7.6696 8.00001 6.46969 8.00001Z"/>
    </svg>
  );
}
