import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BriefcaseConveyorBelt = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M10 20v2" />
				<path d="M14 20v2" />
				<path d="M18 20v2" />
				<path d="M21 20H3" />
				<path d="M6 20v2" />
				<path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
				<rect height="10" rx="2" width="16" x="4" y="6" />
			</svg>
		);
	}
);

BriefcaseConveyorBelt.displayName = "BriefcaseConveyorBelt";
export default BriefcaseConveyorBelt;
