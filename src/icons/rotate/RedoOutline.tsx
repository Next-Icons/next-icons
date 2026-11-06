import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RedoOutline = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 9v5h-5M4 16c.497-4.5 3.367-8 8-8 2.73 0 5.929 2.268 7.294 5.5" />
		</svg>
	);
});

RedoOutline.displayName = "RedoOutline";
export default RedoOutline;
