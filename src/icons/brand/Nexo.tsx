import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Nexo = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 3l5 3v12l-5 3l-10 -6v-6l10 6v-6l-5 -3l5 -3" />
			<path d="M12 6l-5 -3l-5 3v12l5 3l4.7 -3.13" />
		</svg>
	);
});

Nexo.displayName = "Nexo";
export default Nexo;
