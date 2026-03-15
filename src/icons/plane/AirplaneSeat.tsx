import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AirplaneSeat = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8.61298 18H17.9722C19.0921 18 20 17.1077 20 16.0071C20 14.5 17.9722 14.0141 17.9722 14.0141C17.9722 14.0141 14.2844 12.5964 10 14C10 14 9.86099 8.87274 7.70985 3.17067C7.28543 2.04566 5.90119 1.66155 4.88539 2.3271C4.21507 2.7663 3.8807 3.55966 4.0387 4.33605L6.65836 16.4236C6.85774 17.3436 7.67165 18 8.61298 18Z" />
			<path d="M12.5 10.5H18" />
			<path d="M16 18.5L13 22M13 22H8M13 22H18" />
		</svg>
	);
});

AirplaneSeat.displayName = "AirplaneSeat";
export default AirplaneSeat;
