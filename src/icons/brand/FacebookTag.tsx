import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FacebookTag = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path
				d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M11 21C11 18 11 15 11 12C11 9.8125 11.5 8 15 8" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M9 13H11H15" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
});

FacebookTag.displayName = "FacebookTag";
export default FacebookTag;
