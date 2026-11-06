import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Filezilla = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 15.824a4.062 4.062 0 0 1 -2.25 .033c-.738 -.201 -2.018 -.08 -2.75 .143l4.583 -5h-6.583" />
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M8 15l2 -8h5" />
		</svg>
	);
});

Filezilla.displayName = "Filezilla";
export default Filezilla;
