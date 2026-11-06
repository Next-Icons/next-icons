import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerBottomRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20.01 8.00001L20 8.01112" />
			<path d="M20.01 4.00001L20 4.01112" />
			<path d="M16.01 4.00001L16 4.01112" />
			<path d="M12.01 4.00001L12 4.01112" />
			<path d="M8.00999 4.00001L7.99999 4.01112" />
			<path d="M4.00999 4.00001L3.99999 4.01112" />
			<path d="M4.00999 8.00001L3.99999 8.01112" />
			<path d="M4.00999 12L3.99999 12.0111" />
			<path d="M4.00999 16L3.99999 16.0111" />
			<path d="M4.00999 20L3.99999 20.0111" />
			<path d="M8.00999 20L7.99999 20.0111" />
			<path d="M20.01 12.01V20.01H12.01V12.01H20.01Z" />
		</svg>
	);
});

CornerBottomRight.displayName = "CornerBottomRight";
export default CornerBottomRight;
