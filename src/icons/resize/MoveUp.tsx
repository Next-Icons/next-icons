import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MoveUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 6L12 2L16 6" />
			<path d="M12 2V22" />
		</svg>
	);
});

MoveUp.displayName = "MoveUp";
export default MoveUp;
