import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MouseOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 6v.343" />
			<path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
			<path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
			<path d="M22 22 2 2" />
		</svg>
	);
});

MouseOff.displayName = "MouseOff";
export default MouseOff;
