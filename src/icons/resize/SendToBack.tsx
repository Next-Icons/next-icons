import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SendToBack = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="8" rx="2" width="8" x="14" y="14" />
			<rect height="8" rx="2" width="8" x="2" y="2" />
			<path d="M7 14v1a2 2 0 0 0 2 2h1" />
			<path d="M14 7h1a2 2 0 0 1 2 2v1" />
		</svg>
	);
});

SendToBack.displayName = "SendToBack";
export default SendToBack;
