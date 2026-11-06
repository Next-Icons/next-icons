import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FileSignal = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
			<path d="M14 2v5a1 1 0 0 0 1 1h5" />
			<path d="M8 15h.01" />
			<path d="M11.5 13.5a2.5 2.5 0 0 1 0 3" />
			<path d="M15 12a5 5 0 0 1 0 6" />
		</svg>
	);
});

FileSignal.displayName = "FileSignal";
export default FileSignal;
