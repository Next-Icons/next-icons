import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ComedyCentral = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5.343 17.657a8 8 0 1 0 0 -11.314" />
			<path d="M13.828 9.172a4 4 0 1 0 0 5.656" />
		</svg>
	);
});

ComedyCentral.displayName = "ComedyCentral";
export default ComedyCentral;
