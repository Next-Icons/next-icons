import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerTopRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20.01 16.01L20 15.9989" />
			<path d="M20.01 20.01L20 19.9989" />
			<path d="M16.01 20.01L16 19.9989" />
			<path d="M12.01 20.01L12 19.9989" />
			<path d="M8.00999 20.01L7.99999 19.9989" />
			<path d="M4.00999 20.01L3.99999 19.9989" />
			<path d="M4.00999 16.01L3.99999 15.9989" />
			<path d="M4.00999 12.01L3.99999 11.9989" />
			<path d="M4.00999 8.01L3.99999 7.99889" />
			<path d="M4.00999 4.01L3.99999 3.99889" />
			<path d="M8.00999 4.01L7.99999 3.99889" />
			<path d="M20.01 12V4H12.01V12H20.01Z" />
		</svg>
	);
});

CornerTopRight.displayName = "CornerTopRight";
export default CornerTopRight;
