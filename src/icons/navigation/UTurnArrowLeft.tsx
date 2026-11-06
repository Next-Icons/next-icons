import { forwardRef } from "react";
import type { IconProps } from "../../types";
const UTurnArrowLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 14V8.00005C8 5.23862 10.2386 3 13 3C15.7614 3 18 5.23862 18 8.00005V21" />
			<path d="M12 11C10.4379 12.5621 9.5621 13.4379 8 15C6.4379 13.4379 5.5621 12.5621 4 11" />
		</svg>
	);
});

UTurnArrowLeft.displayName = "UTurnArrowLeft";
export default UTurnArrowLeft;
