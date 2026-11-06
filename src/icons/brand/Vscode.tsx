import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Vscode = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 3v18l4 -2.5v-13l-4 -2.5" />
			<path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
			<path d="M16 16.5l-11 -10l-2 1l13 13.5" />
		</svg>
	);
});

Vscode.displayName = "Vscode";
export default Vscode;
