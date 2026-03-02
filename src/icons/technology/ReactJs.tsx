import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const ReactJs = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<path d="M8 12C8 6.47715 9.79086 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79086 22 8 17.5228 8 12Z" />
			<path d="M9.97529 8.58334C14.8173 5.85973 19.649 5.1815 20.7673 7.06847C21.8855 8.95544 18.8667 12.6931 14.0247 15.4167C9.18269 18.1403 4.35097 18.8185 3.23275 16.9315C2.11454 15.0446 5.13327 11.3069 9.97529 8.58334Z" />
			<path d="M14.0247 8.58334C18.8667 11.3069 21.8855 15.0446 20.7672 16.9315C19.649 18.8185 14.8173 18.1403 9.97529 15.4167C5.13327 12.6931 2.11454 8.95544 3.23275 7.06847C4.35097 5.18151 9.18269 5.85973 14.0247 8.58334Z" />
			<path d="M12 12V12.01" />
		</svg>
	);
});

ReactJs.displayName = "ReactJs";
export default ReactJs;
