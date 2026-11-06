import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Kotlin = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 20h-16v-16h16" />
			<path d="M4 20l16 -16" />
			<path d="M4 12l8 -8" />
			<path d="M12 12l8 8" />
		</svg>
	);
});

Kotlin.displayName = "Kotlin";
export default Kotlin;
