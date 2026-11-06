import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Snowflake = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 21v-5.5l4.5 2.5" />
			<path d="M10 21v-5.5l-4.5 2.5" />
			<path d="M3.5 14.5l4.5 -2.5l-4.5 -2.5" />
			<path d="M20.5 9.5l-4.5 2.5l4.5 2.5" />
			<path d="M10 3v5.5l-4.5 -2.5" />
			<path d="M14 3v5.5l4.5 -2.5" />
			<path d="M12 11l1 1l-1 1l-1 -1l1 -1" />
		</svg>
	);
});

Snowflake.displayName = "Snowflake";
export default Snowflake;
