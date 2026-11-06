import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BriefcaseMedical = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 11v4" />
			<path d="M14 13h-4" />
			<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
			<path d="M18 6v14" />
			<path d="M6 6v14" />
			<rect height="14" rx="2" width="20" x="2" y="6" />
		</svg>
	);
});

BriefcaseMedical.displayName = "BriefcaseMedical";
export default BriefcaseMedical;
