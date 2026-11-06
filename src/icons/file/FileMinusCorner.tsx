import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FileMinusCorner = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
			<path d="M14 18h6" />
		</svg>
	);
});

FileMinusCorner.displayName = "FileMinusCorner";
export default FileMinusCorner;
