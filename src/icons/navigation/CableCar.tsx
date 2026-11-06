import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CableCar = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 3h.01" />
			<path d="M14 2h.01" />
			<path d="m2 9 20-5" />
			<path d="M12 12V6.5" />
			<rect height="10" rx="3" width="16" x="4" y="12" />
			<path d="M9 12v5" />
			<path d="M15 12v5" />
			<path d="M4 17h16" />
		</svg>
	);
});

CableCar.displayName = "CableCar";
export default CableCar;
