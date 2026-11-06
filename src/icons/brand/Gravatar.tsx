import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Gravatar = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5.64 5.632a9 9 0 1 0 6.36 -2.632v7.714" />
		</svg>
	);
});

Gravatar.displayName = "Gravatar";
export default Gravatar;
