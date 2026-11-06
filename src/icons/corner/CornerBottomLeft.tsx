import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerBottomLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4.00047 8.00001L4.01047 8.01112" />
			<path d="M4.00047 4.00001L4.01047 4.01112" />
			<path d="M8.00047 4.00001L8.01047 4.01112" />
			<path d="M12.0005 4.00001L12.0105 4.01112" />
			<path d="M16.0005 4.00001L16.0105 4.01112" />
			<path d="M20.0005 4.00001L20.0105 4.01112" />
			<path d="M20.0005 8.00001L20.0105 8.01112" />
			<path d="M20.0005 12L20.0105 12.0111" />
			<path d="M20.0005 16L20.0105 16.0111" />
			<path d="M20.0005 20L20.0105 20.0111" />
			<path d="M16.0005 20L16.0105 20.0111" />
			<path d="M4.00047 12.01V20.01H12.0005V12.01H4.00047Z" />
		</svg>
	);
});

CornerBottomLeft.displayName = "CornerBottomLeft";
export default CornerBottomLeft;
