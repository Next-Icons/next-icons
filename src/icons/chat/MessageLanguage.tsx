import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MessageLanguage = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
			<path d="M10 14v-4a2 2 0 1 1 4 0v4" />
			<path d="M14 12h-4" />
		</svg>
	);
});

MessageLanguage.displayName = "MessageLanguage";
export default MessageLanguage;
