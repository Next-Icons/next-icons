import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FramerMotion = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
			<path d="M20 12l-8 8l-4 -4" />
		</svg>
	);
});

FramerMotion.displayName = "FramerMotion";
export default FramerMotion;
