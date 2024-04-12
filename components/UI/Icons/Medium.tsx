import React from "react";

export default function Medium({ width, height, props }: { width?: number; height?: number; [x: string]: any }) {
    return (
        <svg
            width={width || "1em"}
            height={height || "1em"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_340_1815)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 6C9.5913 6 11.1174 6.63214 12.2426 7.75736C13.3679 8.88258 14 10.4087 14 12C14 13.5913 13.3679 15.1174 12.2426 16.2426C11.1174 17.3679 9.5913 18 8 18C6.4087 18 4.88258 17.3679 3.75736 16.2426C2.63214 15.1174 2 13.5913 2 12C2 10.4087 2.63214 8.88258 3.75736 7.75736C4.88258 6.63214 6.4087 6 8 6ZM17 7C18.5 7 19.5 9.239 19.5 12C19.5 14.761 18.5 17 17 17C15.5 17 14.5 14.761 14.5 12C14.5 9.239 15.5 7 17 7ZM21 7.5C21.38 7.5 21.712 8.327 21.88 9.746L21.927 10.189L21.946 10.424L21.976 10.918L21.986 11.177L21.998 11.718L22 12L21.998 12.282L21.986 12.823L21.976 13.083L21.946 13.576L21.926 13.811L21.881 14.254C21.712 15.674 21.381 16.5 21 16.5C20.62 16.5 20.288 15.673 20.12 14.254L20.073 13.811C20.0661 13.7327 20.0598 13.6544 20.054 13.576L20.024 13.082C20.0201 12.9957 20.0168 12.9094 20.014 12.823L20.002 12.282V11.718L20.014 11.177L20.024 10.917L20.054 10.424L20.074 10.189L20.119 9.746C20.288 8.326 20.619 7.5 21 7.5ZM8 8C6.93913 8 5.92172 8.42143 5.17157 9.17157C4.42143 9.92172 4 10.9391 4 12C4 13.0609 4.42143 14.0783 5.17157 14.8284C5.92172 15.5786 6.93913 16 8 16C9.06087 16 10.0783 15.5786 10.8284 14.8284C11.5786 14.0783 12 13.0609 12 12C12 10.9391 11.5786 9.92172 10.8284 9.17157C10.0783 8.42143 9.06087 8 8 8ZM16.956 9.403C16.593 10.203 16.5 11.134 16.5 12C16.5 12.866 16.592 13.798 16.956 14.597C16.974 14.635 17.026 14.635 17.044 14.597C17.407 13.797 17.5 12.866 17.5 12C17.5 11.134 17.408 10.202 17.044 9.403C17.0403 9.39444 17.0341 9.38715 17.0263 9.38203C17.0185 9.37691 17.0093 9.37418 17 9.37418C16.9907 9.37418 16.9815 9.37691 16.9737 9.38203C16.9659 9.38715 16.9597 9.39444 16.956 9.403Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_340_1815">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}