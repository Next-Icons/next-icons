import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLongDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
		</svg>
	);
});

ArrowLongDown.displayName = "ArrowLongDown";
export default ArrowLongDown;
