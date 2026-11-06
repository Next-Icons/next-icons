import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Volkswagen = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" />
			<path d="M5 7l4.5 11l1.5 -5h2l1.5 5l4.5 -11" />
			<path d="M9 4l2 6h2l2 -6" />
		</svg>
	);
});

Volkswagen.displayName = "Volkswagen";
export default Volkswagen;
