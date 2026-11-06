import { forwardRef } from "react";
import type { IconProps } from "../../types";
const KeyboardShow = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2l0 -8" />
			<path d="M6 7l0 .01" />
			<path d="M10 7l0 .01" />
			<path d="M14 7l0 .01" />
			<path d="M18 7l0 .01" />
			<path d="M6 11l0 .01" />
			<path d="M18 11l0 .01" />
			<path d="M10 11l4 0" />
			<path d="M10 19l2 2l2 -2" />
		</svg>
	);
});

KeyboardShow.displayName = "KeyboardShow";
export default KeyboardShow;
