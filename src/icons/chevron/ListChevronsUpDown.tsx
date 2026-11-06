import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ListChevronsUpDown = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
		return (
			<svg
				ref={ref}
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="0 0 24 24"
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
			>
				<path d="M3 5h8" />
				<path d="M3 12h8" />
				<path d="M3 19h8" />
				<path d="m15 8 3-3 3 3" />
				<path d="m15 16 3 3 3-3" />
			</svg>
		);
	}
);

ListChevronsUpDown.displayName = "ListChevronsUpDown";
export default ListChevronsUpDown;
