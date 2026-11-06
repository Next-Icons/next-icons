import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MessageCircleMore = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
			<path d="M8 12h.01" />
			<path d="M12 12h.01" />
			<path d="M16 12h.01" />
		</svg>
	);
});

MessageCircleMore.displayName = "MessageCircleMore";
export default MessageCircleMore;
