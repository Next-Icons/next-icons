import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Scale = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 3v18" />
			<path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
			<path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
			<path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
			<path d="M7 21h10" />
		</svg>
	);
});

Scale.displayName = "Scale";
export default Scale;
