import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MailClock = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 14v2.2l1.6 1" />
			<path d="m22 7-.759.484" />
			<path d="M6.835 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v2" />
			<path d="M7.605 10.567 2 7" />
			<circle cx="16" cy="16" r="6" />
		</svg>
	);
});

MailClock.displayName = "MailClock";
export default MailClock;
