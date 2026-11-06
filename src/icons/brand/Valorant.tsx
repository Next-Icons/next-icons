import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Valorant = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14.5 14h4.5l2 -2v-6l-6.5 8" />
			<path d="M9 19h5l-11 -13v6l6 7" />
		</svg>
	);
});

Valorant.displayName = "Valorant";
export default Valorant;
