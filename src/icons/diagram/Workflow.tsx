import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Workflow = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="8" rx="2" width="8" x="3" y="3" />
			<path d="M7 11v4a2 2 0 0 0 2 2h4" />
			<rect height="8" rx="2" width="8" x="13" y="13" />
		</svg>
	);
});

Workflow.displayName = "Workflow";
export default Workflow;
