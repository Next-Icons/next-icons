import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RadixUi = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
			<path d="M6 3h5v5h-5l0 -5" />
			<path d="M11 11v10a5 5 0 0 1 -.217 -9.995l.217 -.005" />
		</svg>
	);
});

RadixUi.displayName = "RadixUi";
export default RadixUi;
