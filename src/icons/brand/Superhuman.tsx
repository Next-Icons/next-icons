import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Superhuman = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 12l4 3l-8 7l-8 -7l4 -3" />
			<path d="M12 3l-8 6l8 6l8 -6l-8 -6" />
			<path d="M12 15h8" />
		</svg>
	);
});

Superhuman.displayName = "Superhuman";
export default Superhuman;
