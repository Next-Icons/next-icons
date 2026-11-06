import { forwardRef } from "react";
import type { IconProps } from "../../types";
const UTurnArrowRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 14V8.00005C16 5.23862 13.7614 3 11 3C8.23858 3 6 5.23862 6 8.00005V21" />
			<path d="M12 11C13.5621 12.5621 14.4379 13.4379 16 15C17.5621 13.4379 18.4379 12.5621 20 11" />
		</svg>
	);
});

UTurnArrowRight.displayName = "UTurnArrowRight";
export default UTurnArrowRight;
