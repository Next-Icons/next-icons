import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PercentRotateOut = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21.1679 8C19.6248 4.46819 16.1006 2 12 2C6.81465 2 2.5511 5.94668 2.04938 11" />
			<path d="M18 8H21.4C21.7314 8 22 7.73137 22 7.4V4" />
			<path d="M2.88146 16C4.42458 19.5318 7.94874 22 12.0494 22C17.2347 22 21.4983 18.0533 22 13" />
			<path d="M6.04932 16H2.64932C2.31795 16 2.04932 16.2686 2.04932 16.6V20" />
			<path
				d="M14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15Z"
				fill={color}
			/>
			<path
				d="M9.5 10C9.77614 10 10 9.77614 10 9.5C10 9.22386 9.77614 9 9.5 9C9.22386 9 9 9.22386 9 9.5C9 9.77614 9.22386 10 9.5 10Z"
				fill={color}
			/>
			<path d="M15 9L9 15" />
		</svg>
	);
});

PercentRotateOut.displayName = "PercentRotateOut";
export default PercentRotateOut;
