import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FileReport = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M13 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M17 13v4h4" />
			<path d="M12 3v4a1 1 0 0 0 1 1h4" />
			<path d="M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4" />
		</svg>
	);
});

FileReport.displayName = "FileReport";
export default FileReport;
