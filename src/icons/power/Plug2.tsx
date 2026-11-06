import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Plug2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 2v6" />
			<path d="M15 2v6" />
			<path d="M12 17v5" />
			<path d="M5 8h14" />
			<path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
		</svg>
	);
});

Plug2.displayName = "Plug2";
export default Plug2;
