import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Drops = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17.637 7.416a7.907 7.907 0 0 1 1.76 8.666a8 8 0 0 1 -7.397 4.918a8 8 0 0 1 -7.396 -4.918a7.907 7.907 0 0 1 1.759 -8.666l5.637 -5.416l5.637 5.416" />
			<path d="M14.466 10.923a3.595 3.595 0 0 1 .77 3.877a3.5 3.5 0 0 1 -3.236 2.2a3.5 3.5 0 0 1 -3.236 -2.2a3.595 3.595 0 0 1 .77 -3.877l2.466 -2.423l2.466 2.423" />
		</svg>
	);
});

Drops.displayName = "Drops";
export default Drops;
