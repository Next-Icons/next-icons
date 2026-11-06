import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Couchdb = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 12h12v-2a2 2 0 0 1 2 -2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a2 2 0 0 1 2 2v2" />
			<path d="M6 15h12" />
			<path d="M6 18h12" />
			<path d="M21 11v7" />
			<path d="M3 11v7" />
		</svg>
	);
});

Couchdb.displayName = "Couchdb";
export default Couchdb;
