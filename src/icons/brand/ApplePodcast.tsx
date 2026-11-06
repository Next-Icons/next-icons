import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ApplePodcast = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18.364 18.364a9 9 0 1 0 -12.728 0" />
			<path d="M11.766 22h.468a2 2 0 0 0 1.985 -1.752l.5 -4a2 2 0 0 0 -1.985 -2.248h-1.468a2 2 0 0 0 -1.985 2.248l.5 4a2 2 0 0 0 1.985 1.752" />
			<path d="M10 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
		</svg>
	);
});

ApplePodcast.displayName = "ApplePodcast";
export default ApplePodcast;
