export default function Efts({
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
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.21707 11.4339L7.49702 10.6411L8.24166 9.82119L8.96242 10.6132C9.09416 10.7582 9.27281 10.8397 9.45909 10.8397C9.64536 10.8397 9.82402 10.7582 9.95575 10.6132L12.7404 7.54722C12.8058 7.47539 12.8576 7.39009 12.8929 7.29619C12.9283 7.20229 12.9465 7.10164 12.9465 7C12.9465 6.89836 12.9283 6.79771 12.8929 6.70381C12.8576 6.60992 12.8058 6.52461 12.7404 6.45278L9.95575 3.38679C9.89051 3.31487 9.81303 3.25782 9.72775 3.2189C9.64247 3.17998 9.55106 3.15994 9.45874 3.15994C9.36642 3.15994 9.275 3.17998 9.18972 3.2189C9.10444 3.25782 9.02696 3.31487 8.96172 3.38679L8.24166 4.17958L7.49702 3.35972L8.21707 2.56615C8.54642 2.20364 8.99304 2 9.45874 2C9.92443 2 10.3711 2.20364 10.7004 2.56615L13.4858 5.63291C13.815 5.99552 14 6.48727 14 7C14 7.51273 13.815 8.00448 13.4858 8.36709L10.7004 11.4339C10.3711 11.7964 9.92443 12 9.45874 12C8.99304 12 8.54642 11.7964 8.21707 11.4339ZM3.2996 2.56615L0.514203 5.63291C0.184959 5.99552 0 6.48727 0 7C0 7.51273 0.184959 8.00448 0.514203 8.36709L3.2996 11.4339C3.62894 11.7964 4.07557 12 4.54126 12C5.00696 12 5.45358 11.7964 5.78293 11.4339L8.56832 8.36709C8.89757 8.00448 9.08253 7.51273 9.08253 7C9.08253 6.48727 8.89757 5.99552 8.56832 5.63291L5.78293 2.56615C5.45358 2.20364 5.00696 2 4.54126 2C4.07557 2 3.62894 2.20364 3.2996 2.56615ZM1.25955 6.45355L4.04495 3.38679C4.17669 3.24178 4.35534 3.16033 4.54161 3.16033C4.72789 3.16033 4.90654 3.24178 5.03828 3.38679L7.82297 6.45355C7.95467 6.5986 8.02866 6.79529 8.02866 7.00039C8.02866 7.20548 7.95467 7.40218 7.82297 7.54722L5.03828 10.6124C4.90654 10.7574 4.72789 10.8389 4.54161 10.8389C4.35534 10.8389 4.17669 10.7574 4.04495 10.6124L1.25955 7.54645C1.19424 7.47462 1.14242 7.38931 1.10707 7.29542C1.07172 7.20152 1.05352 7.10087 1.05352 6.99923C1.05352 6.89758 1.07172 6.79693 1.10707 6.70304C1.14242 6.60914 1.19424 6.52384 1.25955 6.452V6.45355Z"
        fill="currentColor"
      />
    </svg>
  );
}