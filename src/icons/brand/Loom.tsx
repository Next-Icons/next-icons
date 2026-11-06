import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Loom = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17.464 6.518a6 6 0 1 0 -3.023 7.965" />
			<path d="M17.482 17.464a6 6 0 1 0 -7.965 -3.023" />
			<path d="M6.54 17.482a6 6 0 1 0 3.024 -7.965" />
			<path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
		</svg>
	);
});

Loom.displayName = "Loom";
export default Loom;
