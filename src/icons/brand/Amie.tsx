import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Amie = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 8.5c0 1.33 .472 2.55 1.257 3.5a5.5 5.5 0 0 0 7.743 7.743a5.5 5.5 0 0 0 7.743 -7.743a5.5 5.5 0 0 0 -7.743 -7.743a5.5 5.5 0 0 0 -9 4.243" />
			<path d="M10 9.5c0 -.828 .895 -1.5 2 -1.5s2 .672 2 1.5v5c0 .828 -.895 1.5 -2 1.5s-2 -.672 -2 -1.5l0 -5" />
		</svg>
	);
});

Amie.displayName = "Amie";
export default Amie;
