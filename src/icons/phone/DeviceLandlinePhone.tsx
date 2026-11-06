import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceLandlinePhone = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2" />
				<path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" />
				<path d="M12 8h-6v3h6l0 -3" />
				<path d="M12 14v.01" />
				<path d="M9 14v.01" />
				<path d="M6 14v.01" />
				<path d="M12 17v.01" />
				<path d="M9 17v.01" />
				<path d="M6 17v.01" />
			</svg>
		);
	}
);

DeviceLandlinePhone.displayName = "DeviceLandlinePhone";
export default DeviceLandlinePhone;
