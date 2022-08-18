import * as React from "react"
import { SVGProps } from "react"

export const SvgDropdownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.138.529c.26.26.26.682 0 .942L6.471 6.138a.667.667 0 0 1-.942 0L.862 1.471A.667.667 0 0 1 1.805.53L6 4.724 10.195.529c.26-.26.683-.26.943 0Z"
        fill="#424551"
      />
  </svg>
)





