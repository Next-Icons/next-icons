import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Parsinta = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 3a9 9 0 1 0 9 9" />
			<path d="M21 12a9 9 0 0 0 -9 -9" opacity=".5" />
			<path d="M10 9v6l5 -3l-5 -3" />
		</svg>
	);
});

Parsinta.displayName = "Parsinta";
export default Parsinta;
