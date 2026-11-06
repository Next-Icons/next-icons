import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Airtable = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 10v8l7 -3v-2.6l-7 -2.4" />
			<path d="M3 6l9 3l9 -3l-9 -3l-9 3" />
			<path d="M14 12.3v8.7l7 -3v-8l-7 2.3" />
		</svg>
	);
});

Airtable.displayName = "Airtable";
export default Airtable;
