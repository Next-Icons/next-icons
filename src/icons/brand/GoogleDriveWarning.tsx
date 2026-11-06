import { forwardRef } from "react";
import type { IconProps } from "../../types";
const GoogleDriveWarning = forwardRef<SVGSVGElement, IconProps>(
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
				<path
					d="M9.14286 3.00375L14.8571 3M9.14286 3.00375L2 15.0038M9.14286 3.00375L14.0446 12.5M14.8571 3L5.575 21M14.8571 3L21.5 14M5.575 21L2 15.0038M5.575 21H12.0036M2 15.0038H12.5"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M18 16L18 18" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
				<path d="M18 22.01L18.01 21.9989" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	}
);

GoogleDriveWarning.displayName = "GoogleDriveWarning";
export default GoogleDriveWarning;
