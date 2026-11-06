import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MessageSquareReply = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
				<path d="m10 8-3 3 3 3" />
				<path d="M17 14v-1a2 2 0 0 0-2-2H7" />
			</svg>
		);
	}
);

MessageSquareReply.displayName = "MessageSquareReply";
export default MessageSquareReply;
