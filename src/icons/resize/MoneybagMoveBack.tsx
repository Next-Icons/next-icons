import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MoneybagMoveBack = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5a3.5 3.5 0 0 1 -3.5 3.5h-1a3.5 3.5 0 0 1 -3.5 -3.5a1.5 1.5 0 0 1 1.5 -1.5" />
			<path d="M12.5 21h-4.5a4 4 0 0 1 -4 -4v-1a8 8 0 0 1 14.953 -3.959" />
			<path d="M16 19h6" />
			<path d="M19 16l-3 3l3 3" />
		</svg>
	);
});

MoneybagMoveBack.displayName = "MoneybagMoveBack";
export default MoneybagMoveBack;
