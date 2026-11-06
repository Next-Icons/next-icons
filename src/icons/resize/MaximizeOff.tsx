import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MaximizeOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 8v-2c0 -.551 .223 -1.05 .584 -1.412" />
			<path d="M4 16v2a2 2 0 0 0 2 2h2" />
			<path d="M16 4h2a2 2 0 0 1 2 2v2" />
			<path d="M16 20h2c.545 0 1.04 -.218 1.4 -.572" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

MaximizeOff.displayName = "MaximizeOff";
export default MaximizeOff;
