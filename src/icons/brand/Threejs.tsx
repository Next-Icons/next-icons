import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Threejs = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 22l-5 -19l19 5.5l-14 13.5" />
			<path d="M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" />
			<path d="M12.573 17.58l-1.573 -6.58l6.13 2.179" />
			<path d="M9.527 4.893l1.473 6.107l-6.31 -1.564l4.837 -4.543" />
		</svg>
	);
});

Threejs.displayName = "Threejs";
export default Threejs;
