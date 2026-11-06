import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ScaleFrameEnlarge = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				d="M11 13.6V21H3.6C3.26863 21 3 20.7314 3 20.4V13H10.4C10.7314 13 11 13.2686 11 13.6Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M11 21H14" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M3 13V10" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M6 3H3.6C3.26863 3 3 3.26863 3 3.6V6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M14 3H10" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M21 10V14" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M18 3H20.4C20.7314 3 21 3.26863 21 3.6V6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M18 21H20.4C20.7314 21 21 20.7314 21 20.4V18" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M11 10H14V13" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
});

ScaleFrameEnlarge.displayName = "ScaleFrameEnlarge";
export default ScaleFrameEnlarge;
