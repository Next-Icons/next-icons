import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Zapier = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12h6" />
			<path d="M21 12h-6" />
			<path d="M12 3v6" />
			<path d="M12 15v6" />
			<path d="M5.636 5.636l4.243 4.243" />
			<path d="M18.364 18.364l-4.243 -4.243" />
			<path d="M18.364 5.636l-4.243 4.243" />
			<path d="M9.879 14.121l-4.243 4.243" />
		</svg>
	);
});

Zapier.displayName = "Zapier";
export default Zapier;
