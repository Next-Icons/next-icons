import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Codepen = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 15l9 6l9 -6l-9 -6l-9 6" />
			<path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
			<path d="M3 9l0 6" />
			<path d="M21 9l0 6" />
			<path d="M12 3l0 6" />
			<path d="M12 15l0 6" />
		</svg>
	);
});

Codepen.displayName = "Codepen";
export default Codepen;
