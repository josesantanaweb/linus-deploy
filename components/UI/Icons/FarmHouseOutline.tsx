export default function FarmHouseOutline({ width, height, props }: { width?: number; height?: number; [x: string]: any }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 14 14"
            fill="none"
            {...props}
        >
            <path
                d="M11.6667 12.25H9.91667V11.0833H11.6667V12.25ZM11.6667 9.91667H9.91667V8.75H11.6667V9.91667ZM11.6667 7.58334H9.91667V6.41667H11.6667V7.58334ZM14 4.55001C13.7667 2.62501 12.1333 1.16667 10.2083 1.16667C9.21667 1.16667 8.225 1.57501 7.525 2.27501C7.11667 2.68334 6.825 3.09167 6.65 3.61667L9.1 5.25H12.8333V12.8333H14V4.55001ZM7.75833 4.08334C8.10833 3.03334 9.1 2.33334 10.2083 2.33334C11.3167 2.33334 12.3083 3.03334 12.6583 4.08334H7.75833ZM4.375 3.50001L0 6.41667V12.8333H8.75V6.41667L4.375 3.50001ZM7.58333 11.6667H5.83333V8.16667H2.91667V11.6667H1.16667V7L4.375 4.95834L7.58333 7V11.6667Z"
                fill="currentColor"
            />
        </svg>
    );
}
