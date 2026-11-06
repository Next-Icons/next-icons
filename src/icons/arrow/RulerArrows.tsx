import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RulerArrows = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15.4 22H8.6C8.26863 22 8 21.7314 8 21.4V2.6C8 2.26863 8.26863 2 8.6 2H15.4C15.7314 2 16 2.26863 16 2.6V21.4C16 21.7314 15.7314 22 15.4 22Z" />
			<path d="M16 17H13" />
			<path d="M16 7H13" />
			<path d="M13 12H23M23 12L21 14M23 12L21 10" />
			<path d="M1 12L3 10M1 12L3 14M1 12H8" />
		</svg>
	);
});

RulerArrows.displayName = "RulerArrows";
export default RulerArrows;
