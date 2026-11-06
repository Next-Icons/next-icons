import { forwardRef } from "react";
import type { IconProps } from "../../types";
const GooglePodcasts = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 3v2" />
			<path d="M12 19v2" />
			<path d="M12 8v8" />
			<path d="M8 17v2" />
			<path d="M4 11v2" />
			<path d="M20 11v2" />
			<path d="M8 5v8" />
			<path d="M16 7v-2" />
			<path d="M16 19v-8" />
		</svg>
	);
});

GooglePodcasts.displayName = "GooglePodcasts";
export default GooglePodcasts;
