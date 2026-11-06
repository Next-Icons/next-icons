import { forwardRef } from "react";
import type { IconProps } from "../../types";
const WorldShare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" />
			<path d="M3.6 9h16.8" />
			<path d="M3.6 15h9.4" />
			<path d="M11.5 3a17 17 0 0 0 0 18" />
			<path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" />
			<path d="M16 22l5 -5" />
			<path d="M21 21.5v-4.5h-4.5" />
		</svg>
	);
});

WorldShare.displayName = "WorldShare";
export default WorldShare;
