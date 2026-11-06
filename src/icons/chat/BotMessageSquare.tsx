import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BotMessageSquare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 6V2H8" />
			<path d="M15 11v2" />
			<path d="M2 12h2" />
			<path d="M20 12h2" />
			<path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
			<path d="M9 11v2" />
		</svg>
	);
});

BotMessageSquare.displayName = "BotMessageSquare";
export default BotMessageSquare;
