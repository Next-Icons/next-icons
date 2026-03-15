import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AirplaneTakeOffLeft = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M22 19L6 19" />
				<path d="M20 13.5L22 8L19.5 6.5L17.5 9L10.4588 5.34038C8.82647 4.48683 6.92061 4.17159 5.23975 4.92643C4.35106 5.32553 3.36889 5.87707 2.50248 6.62005C1.53092 7.45319 2.06313 8.87248 3.28811 9.25281L9 11L10 13.5L14.5 15L13.5 12L20 13.5Z" />
			</svg>
		);
	}
);

AirplaneTakeOffLeft.displayName = "AirplaneTakeOffLeft";
export default AirplaneTakeOffLeft;
