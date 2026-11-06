import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Jira = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 4h-9v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-9" />
			<path d="M15 8h-8v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-8a1 1 0 0 0 -1 -1" />
			<path d="M11 12h-8v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5h1.5v-8a1 1 0 0 0 -1 -1" />
		</svg>
	);
});

Jira.displayName = "Jira";
export default Jira;
