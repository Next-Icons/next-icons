import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Dcos = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 18l18 -12h-18l9 14l9 -14v10l-18 -10l0 12" />
		</svg>
	);
});

Dcos.displayName = "Dcos";
export default Dcos;
