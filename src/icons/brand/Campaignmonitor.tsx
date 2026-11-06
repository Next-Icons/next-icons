import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Campaignmonitor = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 18l9 -6.462l-9 -5.538v12h18v-12l-9 5.538" />
		</svg>
	);
});

Campaignmonitor.displayName = "Campaignmonitor";
export default Campaignmonitor;
