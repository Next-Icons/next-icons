import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SocketIo = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M11 11h1l3 -4l-4 4" />
			<path d="M12 13h1l-4 4l3 -4" />
		</svg>
	);
});

SocketIo.displayName = "SocketIo";
export default SocketIo;
