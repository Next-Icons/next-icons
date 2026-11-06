import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MessageCircleCancel = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12.015 19.98a9.87 9.87 0 0 1 -4.315 -.98l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.927 1.644 2.867 3.887 2.761 6.114" />
				<path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M17 21l4 -4" />
			</svg>
		);
	}
);

MessageCircleCancel.displayName = "MessageCircleCancel";
export default MessageCircleCancel;
