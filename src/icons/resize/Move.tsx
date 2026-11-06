import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Move = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m15 19-3 3-3-3" />
			<path d="m19 9 3 3-3 3" />
			<path d="M2 12h20" />
			<path d="m5 9-3 3 3 3" />
			<path d="m9 5 3-3 3 3" />
		</svg>
	);
});

Move.displayName = "Move";
export default Move;
