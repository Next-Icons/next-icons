import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowNarrowDownDashed = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 5v.5m0 3v1.5m0 3v6" />
				<path d="M16 15l-4 4" />
				<path d="M8 15l4 4" />
			</svg>
		);
	}
);

ArrowNarrowDownDashed.displayName = "ArrowNarrowDownDashed";
export default ArrowNarrowDownDashed;
