import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AirplaneModeOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<path d="M9 9L3.99226 11.9212C3.37782 12.2796 3 12.9374 3 13.6487V15.5L10 14V18L7.5 20V22L12 20.5L16.5 22V20L14 18V14M9 5C9.50809 3.53791 10.617 2.34574 12 2C14 2.5 15.3734 4.51935 15.1977 6.62748L15 9L20.0077 11.9212C20.6222 12.2796 21 12.9374 21 13.6487V15.5L19 15" />
			<path d="M2 2L21.9999 22" />
		</svg>
	);
});

AirplaneModeOff.displayName = "AirplaneModeOff";
export default AirplaneModeOff;
