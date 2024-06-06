import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const TesShareLink = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.625 2.375H3.375C2.82272 2.375 2.375 2.82272 2.375 3.375V8.625C2.375 9.17728 2.82272 9.625 3.375 9.625H8.625C9.17728 9.625 9.625 9.17728 9.625 8.625V7.375M9.625 4.625V2.375H7.375M9.5 2.5L5.875 6.125"
        stroke="#64748B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
TesShareLink.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default TesShareLink;
