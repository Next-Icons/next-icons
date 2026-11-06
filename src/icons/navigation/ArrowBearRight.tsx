import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBearRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 3h5v5" />
			<path d="M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
		</svg>
	);
});

ArrowBearRight.displayName = "ArrowBearRight";
export default ArrowBearRight;
