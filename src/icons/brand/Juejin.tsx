import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Juejin = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 12l10 7.422l10 -7.422" />
			<path d="M7 9l5 4l5 -4" />
			<path d="M11 6l1 .8l1 -.8l-1 -.8l-1 .8" />
		</svg>
	);
});

Juejin.displayName = "Juejin";
export default Juejin;
