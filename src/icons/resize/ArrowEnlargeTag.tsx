import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowEnlargeTag = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8.5 9.5L6 12L8.5 14.5" />
			<path d="M15.5 9.5L18 12L15.5 14.5" />
			<path d="M2 15V9C2 6.79086 3.79086 5 6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15Z" />
		</svg>
	);
});

ArrowEnlargeTag.displayName = "ArrowEnlargeTag";
export default ArrowEnlargeTag;
