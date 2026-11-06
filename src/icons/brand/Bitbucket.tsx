import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Bitbucket = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3.648 4a.64 .64 0 0 0 -.64 .744l3.14 14.528c.07 .417 .43 .724 .852 .728h10a.644 .644 0 0 0 .642 -.539l3.35 -14.71a.641 .641 0 0 0 -.64 -.744l-16.704 -.007" />
			<path d="M14 15h-4l-1 -6h6l-1 6" />
		</svg>
	);
});

Bitbucket.displayName = "Bitbucket";
export default Bitbucket;
