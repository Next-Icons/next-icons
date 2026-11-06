import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RedoAction = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19 5V8V11" />
			<path d="M15.4999 8C11.4999 8 12.9999 8 8.99995 8C8.99995 8 8.99995 8 8.99995 8C8.99995 8 3.99995 8 3.99995 12.7059C3.99995 18 8.99995 18 8.99995 18C12.4285 18 14.2857 18 17.7142 18" />
			<path d="M12.5 11.5C13.8668 10.1332 14.6332 9.36683 16 8C14.6332 6.63317 13.8668 5.86683 12.5 4.5" />
		</svg>
	);
});

RedoAction.displayName = "RedoAction";
export default RedoAction;
