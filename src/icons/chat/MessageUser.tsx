import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MessageUser = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 18l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
			<path d="M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2" />
		</svg>
	);
});

MessageUser.displayName = "MessageUser";
export default MessageUser;
