import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Deezer = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 16.5h2v.5h-2l0 -.5" />
			<path d="M8 16.5h2.5v.5h-2.5l0 -.5" />
			<path d="M16 17h-2.5v-.5h2.5l0 .5" />
			<path d="M21.5 17h-2.5v-.5h2.5l0 .5" />
			<path d="M21.5 13h-2.5v.5h2.5l0 -.5" />
			<path d="M21.5 9.5h-2.5v.5h2.5l0 -.5" />
			<path d="M21.5 6h-2.5v.5h2.5l0 -.5" />
			<path d="M16 13h-2.5v.5h2.5l0 -.5" />
			<path d="M8 13.5h2.5v-.5h-2.5l0 .5" />
			<path d="M8 9.5h2.5v.5h-2.5l0 -.5" />
		</svg>
	);
});

Deezer.displayName = "Deezer";
export default Deezer;
