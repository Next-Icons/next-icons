import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MessageCircleSearch = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M11.303 19.955a9.818 9.818 0 0 1 -3.603 -.955l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.73 1.476 2.665 3.435 2.76 5.433" />
				<path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M20.2 20.2l1.8 1.8" />
			</svg>
		);
	}
);

MessageCircleSearch.displayName = "MessageCircleSearch";
export default MessageCircleSearch;
