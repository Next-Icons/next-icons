import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Vechain = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 4l-8 16l-8 -16h2.028a4 4 0 0 1 3.578 2.211l2.894 5.789" />
		</svg>
	);
});

Vechain.displayName = "Vechain";
export default Vechain;
