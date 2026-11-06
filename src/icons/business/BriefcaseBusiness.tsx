import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BriefcaseBusiness = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 12h.01" />
			<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
			<path d="M22 13a18.15 18.15 0 0 1-20 0" />
			<rect height="14" rx="2" width="20" x="2" y="6" />
		</svg>
	);
});

BriefcaseBusiness.displayName = "BriefcaseBusiness";
export default BriefcaseBusiness;
