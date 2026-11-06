import { forwardRef } from "react";
import type { IconProps } from "../../types";
const GitGraph = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="5" cy="6" r="3" />
			<path d="M5 9v6" />
			<circle cx="5" cy="18" r="3" />
			<path d="M12 3v18" />
			<circle cx="19" cy="6" r="3" />
			<path d="M16 15.7A9 9 0 0 0 19 9" />
		</svg>
	);
});

GitGraph.displayName = "GitGraph";
export default GitGraph;
