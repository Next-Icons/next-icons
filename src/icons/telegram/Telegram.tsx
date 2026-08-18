import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const Telegram = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21.5 3.2 2.9 10.5c-.8.3-.8 1.1 0 1.4l4.6 1.6 1.8 5.4c.2.7.9.8 1.4.3l2.5-2.7 4.7 3.4c.7.5 1.6.1 1.8-.8l2.8-14.8c.2-.8-.3-1.3-1-1.1Z" />
		</svg>
	);
});

Telegram.displayName = "Telegram";
export default Telegram;
