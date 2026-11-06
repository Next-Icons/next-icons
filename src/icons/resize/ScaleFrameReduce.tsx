import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ScaleFrameReduce = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 15V13.6C11 13.2686 10.7314 13 10.4 13H9" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M6 13H3" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M11 18V21" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path
				d="M20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V20.4C3 20.7314 3.26863 21 3.6 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="1.5"
				strokeWidth={strokeWidth}
			/>
			<path d="M16 11H13V8" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
});

ScaleFrameReduce.displayName = "ScaleFrameReduce";
export default ScaleFrameReduce;
