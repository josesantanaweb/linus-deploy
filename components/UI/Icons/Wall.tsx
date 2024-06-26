export default function Wall({
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
      viewBox="0 0 20 16"
      fill="none"
      {...props}
    >
      <path
        d="M19 0.5H1C0.801088 0.5 0.610322 0.579018 0.46967 0.71967C0.329018 0.860322 0.25 1.05109 0.25 1.25V14.75C0.25 14.9489 0.329018 15.1397 0.46967 15.2803C0.610322 15.421 0.801088 15.5 1 15.5H19C19.1989 15.5 19.3897 15.421 19.5303 15.2803C19.671 15.1397 19.75 14.9489 19.75 14.75V1.25C19.75 1.05109 19.671 0.860322 19.5303 0.71967C19.3897 0.579018 19.1989 0.5 19 0.5ZM6.25 9.5V6.5H13.75V9.5H6.25ZM1.75 9.5V6.5H4.75V9.5H1.75ZM15.25 6.5H18.25V9.5H15.25V6.5ZM18.25 5H10.75V2H18.25V5ZM9.25 2V5H1.75V2H9.25ZM1.75 11H9.25V14H1.75V11ZM10.75 14V11H18.25V14H10.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
