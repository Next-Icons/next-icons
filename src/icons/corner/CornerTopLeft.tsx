import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerTopLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 16.01L4.01 15.9989" />
			<path d="M4 20.01L4.01 19.9989" />
			<path d="M8 20.01L8.01 19.9989" />
			<path d="M12 20.01L12.01 19.9989" />
			<path d="M16 20.01L16.01 19.9989" />
			<path d="M20 20.01L20.01 19.9989" />
			<path d="M20 16.01L20.01 15.9989" />
			<path d="M20 12.01L20.01 11.9989" />
			<path d="M20 8.01L20.01 7.99889" />
			<path d="M20 4.01L20.01 3.99889" />
			<path d="M16 4.01L16.01 3.99889" />
			<path d="M4 12V4H12V12H4Z" />
		</svg>
	);
});

CornerTopLeft.displayName = "CornerTopLeft";
export default CornerTopLeft;
