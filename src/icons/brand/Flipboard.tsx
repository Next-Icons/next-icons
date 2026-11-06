import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Flipboard = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3.973 3h16.054c.537 0 .973 .436 .973 .973v4.052a.973 .973 0 0 1 -.973 .973h-5.025v4.831c0 .648 -.525 1.173 -1.173 1.173h-4.829v5.025a.973 .973 0 0 1 -.974 .973h-4.053a.973 .973 0 0 1 -.973 -.973v-16.054c0 -.537 .436 -.973 .973 -.973" />
		</svg>
	);
});

Flipboard.displayName = "Flipboard";
export default Flipboard;
