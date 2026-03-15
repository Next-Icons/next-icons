import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const ImagePlay = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
			<path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
			<path d="m6 21 5-5" />
			<circle cx="9" cy="9" r="2" />
		</svg>
	);
});

ImagePlay.displayName = "ImagePlay";
export default ImagePlay;
