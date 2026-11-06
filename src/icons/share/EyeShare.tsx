import { forwardRef } from "react";
import type { IconProps } from "../../types";
const EyeShare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
			<path d="M12.597 17.981a9.467 9.467 0 0 1 -.597 .019c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.205 .342 -.415 .67 -.63 .983" />
			<path d="M16 22l5 -5" />
			<path d="M21 21.5v-4.5h-4.5" />
		</svg>
	);
});

EyeShare.displayName = "EyeShare";
export default EyeShare;
