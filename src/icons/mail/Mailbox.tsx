import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Mailbox = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
			<polyline points="15,9 18,9 18,11" />
			<path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
			<line x1="6" x2="7" y1="10" y2="10" />
		</svg>
	);
});

Mailbox.displayName = "Mailbox";
export default Mailbox;
