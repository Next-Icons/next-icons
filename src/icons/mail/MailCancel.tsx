import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MailCancel = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" />
			<path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M17 21l4 -4" />
			<path d="M3 7l9 6l9 -6" />
		</svg>
	);
});

MailCancel.displayName = "MailCancel";
export default MailCancel;
