import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MoveVertical = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 2v20" />
			<path d="m8 18 4 4 4-4" />
			<path d="m8 6 4-4 4 4" />
		</svg>
	);
});

MoveVertical.displayName = "MoveVertical";
export default MoveVertical;
