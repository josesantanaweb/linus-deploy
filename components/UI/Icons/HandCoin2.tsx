export default function HandCoin2({
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
      width={width || "1.025em"}
      height={height || "1em"}
      viewBox="0 0 41 40"
      fill="none"
    >
      <g clipPath="url(#clip0_2455_57725)">
        <path
          d="M36.2391 22.0406C35.7739 21.6827 35.2325 21.4369 34.6569 21.3223C34.0813 21.2077 33.4871 21.2273 32.9203 21.3797L26.3828 22.8828C26.5349 22.2403 26.5396 21.5717 26.3966 20.9271C26.2535 20.2825 25.9664 19.6787 25.5568 19.1608C25.1472 18.643 24.6256 18.2246 24.0313 17.9369C23.437 17.6493 22.7853 17.4999 22.125 17.5H14.3031C13.6462 17.4984 12.9956 17.6269 12.3886 17.8782C11.7817 18.1295 11.2306 18.4985 10.7672 18.9641L7.23281 22.5H2.75C2.08696 22.5 1.45107 22.7634 0.982233 23.2322C0.513392 23.7011 0.25 24.337 0.25 25L0.25 31.25C0.25 31.913 0.513392 32.5489 0.982233 33.0178C1.45107 33.4866 2.08696 33.75 2.75 33.75H19C19.1022 33.7501 19.204 33.7375 19.3031 33.7125L29.3031 31.2125C29.3669 31.1973 29.4291 31.1764 29.4891 31.15L35.5625 28.5656L35.6312 28.5344C36.215 28.2427 36.7148 27.8072 37.0837 27.269C37.4526 26.7308 37.6784 26.1075 37.7398 25.4579C37.8012 24.8082 37.6963 24.1537 37.4348 23.5558C37.1733 22.958 36.764 22.4365 36.2453 22.0406H36.2391ZM2.75 25H6.5V31.25H2.75V25ZM34.5359 26.2828L28.5984 28.8109L18.8438 31.25H9V24.2672L12.5359 20.7328C12.7672 20.4997 13.0426 20.3148 13.346 20.189C13.6493 20.0632 13.9747 19.999 14.3031 20H22.125C22.6223 20 23.0992 20.1975 23.4508 20.5492C23.8025 20.9008 24 21.3777 24 21.875C24 22.3723 23.8025 22.8492 23.4508 23.2008C23.0992 23.5525 22.6223 23.75 22.125 23.75H17.75C17.4185 23.75 17.1005 23.8817 16.8661 24.1161C16.6317 24.3505 16.5 24.6685 16.5 25C16.5 25.3315 16.6317 25.6495 16.8661 25.8839C17.1005 26.1183 17.4185 26.25 17.75 26.25H22.75C22.8441 26.2497 22.9379 26.2393 23.0297 26.2188L33.4984 23.8109L33.5469 23.7984C33.8665 23.7097 34.2076 23.7423 34.5045 23.89C34.8015 24.0376 35.0334 24.2899 35.1556 24.5982C35.2778 24.9066 35.2816 25.2492 35.1663 25.5602C35.0511 25.8712 34.8249 26.1286 34.5312 26.2828H34.5359ZM25.875 15C26.1838 15.0004 26.4922 14.9753 26.7969 14.925C27.1396 15.943 27.7667 16.8417 28.6039 17.5146C29.4412 18.1876 30.4537 18.6067 31.5216 18.7225C32.5895 18.8382 33.6683 18.6458 34.6303 18.1679C35.5923 17.6901 36.3974 16.9467 36.9504 16.0258C37.5033 15.1049 37.781 14.0448 37.7506 12.9711C37.7202 11.8973 37.383 10.8547 36.7789 9.96656C36.1747 9.07838 35.3289 8.38176 34.3413 7.95906C33.3538 7.53636 32.2659 7.40526 31.2062 7.58125C30.8762 6.60039 30.282 5.72958 29.489 5.06465C28.696 4.39973 27.7349 3.96647 26.7115 3.81256C25.6881 3.65865 24.6421 3.79004 23.6886 4.19229C22.735 4.59454 21.911 5.25204 21.307 6.09245C20.7031 6.93285 20.3427 7.92357 20.2656 8.95559C20.1884 9.9876 20.3975 11.0209 20.8697 11.9418C21.3419 12.8626 22.0591 13.6354 22.9422 14.175C23.8253 14.7145 24.8401 15 25.875 15ZM35.25 13.125C35.25 13.7431 35.0667 14.3473 34.7233 14.8612C34.38 15.3751 33.8919 15.7756 33.3209 16.0121C32.7499 16.2486 32.1215 16.3105 31.5153 16.19C30.9092 16.0694 30.3523 15.7718 29.9153 15.3347C29.4783 14.8977 29.1806 14.3409 29.06 13.7347C28.9395 13.1285 29.0014 12.5001 29.2379 11.9291C29.4744 11.3581 29.8749 10.87 30.3888 10.5267C30.9027 10.1833 31.5069 10 32.125 10C32.9538 10 33.7487 10.3292 34.3347 10.9153C34.9208 11.5013 35.25 12.2962 35.25 13.125ZM25.875 6.25C26.5567 6.25034 27.2196 6.47361 27.7627 6.88575C28.3057 7.29789 28.6991 7.87631 28.8828 8.53281C28.2426 8.98328 27.7035 9.5624 27.2999 10.2332C26.8963 10.9039 26.6372 11.6515 26.5391 12.4281C26.3208 12.4753 26.0983 12.4993 25.875 12.5C25.0462 12.5 24.2513 12.1708 23.6653 11.5847C23.0792 10.9987 22.75 10.2038 22.75 9.375C22.75 8.5462 23.0792 7.75134 23.6653 7.16529C24.2513 6.57924 25.0462 6.25 25.875 6.25Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2455_57725">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
