import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MailOpened = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
			<path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
			<path d="M3 19l6 -6" />
			<path d="M15 13l6 6" />
		</svg>
	);
});

MailOpened.displayName = "MailOpened";
export default MailOpened;
