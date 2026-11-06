import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Office = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 18h9v-12l-5 2v5l-4 2v-8l9 -4l7 2v13l-7 3l-9 -3" />
		</svg>
	);
});

Office.displayName = "Office";
export default Office;
