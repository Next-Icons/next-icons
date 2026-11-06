import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MessageCancel = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 9h8" />
			<path d="M8 13h6" />
			<path d="M11.995 18.603l-3.995 2.397v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
			<path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M17 21l4 -4" />
		</svg>
	);
});

MessageCancel.displayName = "MessageCancel";
export default MessageCancel;
