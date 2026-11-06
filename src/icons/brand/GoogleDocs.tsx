import { forwardRef } from "react";
import type { IconProps } from "../../types";
const GoogleDocs = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path
				d="M19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M7 7L17 7" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M7 12L17 12" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M7 17L13 17" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
});

GoogleDocs.displayName = "GoogleDocs";
export default GoogleDocs;
