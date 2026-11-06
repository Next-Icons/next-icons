import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Openvpn = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15.618 20.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603" />
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
		</svg>
	);
});

Openvpn.displayName = "Openvpn";
export default Openvpn;
