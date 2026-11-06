import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Git = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M11 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 15v-6" />
			<path d="M15 11l-2 -2" />
			<path d="M11 7l-1.9 -1.9" />
			<path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0" />
		</svg>
	);
});

Git.displayName = "Git";
export default Git;
