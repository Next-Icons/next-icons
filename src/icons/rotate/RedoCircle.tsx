import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RedoCircle = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 10.625H9.8C9.8 10.625 9.8 10.625 9.8 10.625C9.8 10.625 7 10.625 7 13.625C7 17 9.8 17 9.8 17H10.6" />
			<path d="M13.5 14L17 10.625L13.5 7" />
			<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
		</svg>
	);
});

RedoCircle.displayName = "RedoCircle";
export default RedoCircle;
