import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownDashed = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 5v.5m0 3v1.5m0 3v6" />
			<path d="M18 13l-6 6" />
			<path d="M6 13l6 6" />
		</svg>
	);
});

ArrowDownDashed.displayName = "ArrowDownDashed";
export default ArrowDownDashed;
