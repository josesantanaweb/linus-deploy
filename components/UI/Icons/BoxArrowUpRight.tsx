const BoxArrowUpRight = ({
  width,
  height,
  props,
}: {
  width?: number;
  height?: number;
  [x: string]: any;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "1em"}
      height={height || "1em"}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M6.66927 4.99967C6.22724 4.99967 5.80332 5.17527 5.49076 5.48783C5.1782 5.80039 5.0026 6.22431 5.0026 6.66634V13.333C5.0026 13.775 5.1782 14.199 5.49076 14.5115C5.80332 14.8241 6.22724 14.9997 6.66927 14.9997H13.3359C13.778 14.9997 14.2019 14.8241 14.5144 14.5115C14.827 14.199 15.0026 13.775 15.0026 13.333V11.6663C15.0026 11.4453 15.0904 11.2334 15.2467 11.0771C15.403 10.9208 15.6149 10.833 15.8359 10.833C16.057 10.833 16.2689 10.9208 16.4252 11.0771C16.5815 11.2334 16.6693 11.4453 16.6693 11.6663V13.333C16.6693 14.2171 16.3181 15.0649 15.693 15.69C15.0678 16.3152 14.22 16.6663 13.3359 16.6663H6.66927C5.78522 16.6663 4.93737 16.3152 4.31225 15.69C3.68713 15.0649 3.33594 14.2171 3.33594 13.333V6.66634C3.33594 5.78229 3.68713 4.93444 4.31225 4.30932C4.93737 3.6842 5.78522 3.33301 6.66927 3.33301H8.33594C8.55695 3.33301 8.76891 3.42081 8.92519 3.57709C9.08147 3.73337 9.16927 3.94533 9.16927 4.16634C9.16927 4.38735 9.08147 4.59932 8.92519 4.7556C8.76891 4.91188 8.55695 4.99967 8.33594 4.99967H6.66927ZM11.6693 4.99967C11.4483 4.99967 11.2363 4.91188 11.08 4.7556C10.9237 4.59932 10.8359 4.38735 10.8359 4.16634C10.8359 3.94533 10.9237 3.73337 11.08 3.57709C11.2363 3.42081 11.4483 3.33301 11.6693 3.33301H15.8359C16.057 3.33301 16.2689 3.42081 16.4252 3.57709C16.5815 3.73337 16.6693 3.94533 16.6693 4.16634V8.33301C16.6693 8.55402 16.5815 8.76598 16.4252 8.92226C16.2689 9.07854 16.057 9.16634 15.8359 9.16634C15.6149 9.16634 15.403 9.07854 15.2467 8.92226C15.0904 8.76598 15.0026 8.55402 15.0026 8.33301V6.17801L12.2593 8.92301C12.1818 9.00049 12.0898 9.06195 11.9886 9.10388C11.8873 9.14581 11.7788 9.16739 11.6693 9.16739C11.5597 9.16739 11.4512 9.14581 11.35 9.10388C11.2487 9.06195 11.1568 9.00049 11.0793 8.92301C11.0018 8.84553 10.9403 8.75355 10.8984 8.65231C10.8565 8.55108 10.8349 8.44258 10.8349 8.33301C10.8349 8.22343 10.8565 8.11493 10.8984 8.0137C10.9403 7.91247 11.0018 7.82049 11.0793 7.74301L13.8243 4.99967H11.6693Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BoxArrowUpRight;
