import { SvgProps } from "../../../../shared/types";

function Placeholder({
  fill = "aaa",
  height = "18",
  width = "18",
  className = "",
}: SvgProps) {
  return (
    <figure className={className}>
      <svg
        id="_placeholder"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        height={height}
        width={width}
      >
        <path
          fill={fill}
          d="M13.4,16.2c-.3,0-.6-.2-.6-.6V5.2h-7.7v10.5c0,.3-.2.6-.6.6s-.6-.2-.6-.6V5.2h-1.6c-.3,0-.6-.2-.6-.6s.2-.6.6-.6h1.6v-1.6c0-.3.2-.6.6-.6s.6.2.6.6v1.6h7.7v-1.6c0-.3.2-.6.6-.6s.6.2.6.6v1.6h1.6c.3,0,.6.2.6.6s-.2.6-.6.6h-1.6v10.5c0,.3-.2.6-.6.6h0Z"
        />
        <rect
          fill={fill}
          x="6.8"
          y="6.8"
          width="4.4"
          height="4.4"
          rx=".4"
          ry=".4"
        />
        <path
          fill={fill}
          d="M15.6,14H2.4c-.3,0-.6-.2-.6-.6s.2-.6.6-.6h13.2c.3,0,.6.2.6.6s-.2.6-.6.6Z"
        />
      </svg>
    </figure>
  );
}

export default Placeholder;
