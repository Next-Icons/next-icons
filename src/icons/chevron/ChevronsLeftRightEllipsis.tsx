import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChevronsLeftRightEllipsis = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 12h.01" />
				<path d="M16 12h.01" />
				<path d="m17 7 5 5-5 5" />
				<path d="m7 7-5 5 5 5" />
				<path d="M8 12h.01" />
			</svg>
		);
	}
);

ChevronsLeftRightEllipsis.displayName = "ChevronsLeftRightEllipsis";
export default ChevronsLeftRightEllipsis;
