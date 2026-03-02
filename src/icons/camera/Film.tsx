import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const Film = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
			<line x1="7" y1="2" x2="7" y2="22" />
			<line x1="17" y1="2" x2="17" y2="22" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<line x1="2" y1="7" x2="7" y2="7" />
			<line x1="2" y1="17" x2="7" y2="17" />
			<line x1="17" y1="17" x2="22" y2="17" />
			<line x1="17" y1="7" x2="22" y2="7" />
		</svg>
	);
});

Film.displayName = "Film";
export default Film;
