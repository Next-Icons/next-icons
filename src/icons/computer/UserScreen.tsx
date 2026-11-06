import { forwardRef } from "react";
import type { IconProps } from "../../types";
const UserScreen = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" />
			<path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
			<path d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
		</svg>
	);
});

UserScreen.displayName = "UserScreen";
export default UserScreen;
