import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SchemaOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M6 2h4v4m-4 0h-1v-1" />
			<path d="M15 11v-1h5v4h-2" />
			<path d="M5 18h5v4h-5l0 -4" />
			<path d="M5 10h5v4h-5l0 -4" />
			<path d="M10 12h2" />
			<path d="M7.5 7.5v2.5" />
			<path d="M7.5 14v4" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

SchemaOff.displayName = "SchemaOff";
export default SchemaOff;
