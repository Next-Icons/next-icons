import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Supabase = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 14h8v7l8 -11h-8v-7l-8 11" />
		</svg>
	);
});

Supabase.displayName = "Supabase";
export default Supabase;
