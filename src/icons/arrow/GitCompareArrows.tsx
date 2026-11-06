import { forwardRef } from "react";
import type { IconProps } from "../../types";
const GitCompareArrows = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 6h5a2 2 0 0 1 2 2v7" />
			<path d="m15 9-3-3 3-3" />
			<circle cx="19" cy="18" r="3" />
			<path d="M12 18H7a2 2 0 0 1-2-2V9" />
			<path d="m9 15 3 3-3 3" />
		</svg>
	);
});

GitCompareArrows.displayName = "GitCompareArrows";
export default GitCompareArrows;
