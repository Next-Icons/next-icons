import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SafeArrowLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 19V5C3 3.89543 3.89543 3 5 3H12C13.1046 3 14 3.89543 14 5V19C14 20.1046 13.1046 21 12 21H5C3.89543 21 3 20.1046 3 19Z" />
			<path d="M12 3H19C20.1046 3 21 3.89543 21 5V5.5M12 21H19C20.1046 21 21 20.1046 21 19V18.5" />
			<path d="M8.5 15C7.67157 15 7 13.6569 7 12C7 10.3431 7.67157 9 8.5 9C9.32843 9 10 10.3431 10 12C10 13.6569 9.32843 15 8.5 15Z" />
			<path d="M9.5 9.5L10.5 8.5" />
			<path d="M7.5 9.5L6.5 8.5" />
			<path d="M6.5 15.5L7.5 14.5" />
			<path d="M10.5 15.5L9.5 14.5" />
			<path d="M2 8L3 8" />
			<path d="M2 6L3 6" />
			<path d="M3 16H2" />
			<path d="M3 18H2" />
			<path d="M22 12H15M15 12L18.5 8.5M15 12L18.5 15.5" />
		</svg>
	);
});

SafeArrowLeft.displayName = "SafeArrowLeft";
export default SafeArrowLeft;
