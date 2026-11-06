import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Codesandbox = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25l4 2.25" />
			<path d="M12 12l4 -2.25l4 -2.25" />
			<path d="M12 12l0 9" />
			<path d="M12 12l-4 -2.25l-4 -2.25" />
			<path d="M20 12l-4 2v4.75" />
			<path d="M4 12l4 2l0 4.75" />
			<path d="M8 5.25l4 2.25l4 -2.25" />
		</svg>
	);
});

Codesandbox.displayName = "Codesandbox";
export default Codesandbox;
