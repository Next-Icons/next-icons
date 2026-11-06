import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MailboxOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18m0 -4v-2a4 4 0 0 0 -4 -4h-2m-4 0h-4.5" />
			<path d="M12 8v-5h4l2 2l-2 2h-4" />
			<path d="M6 15h1" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

MailboxOff.displayName = "MailboxOff";
export default MailboxOff;
