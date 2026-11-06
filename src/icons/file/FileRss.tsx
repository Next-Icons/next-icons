import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FileRss = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 3v4a1 1 0 0 0 1 1h4" />
			<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
			<path d="M12 17a3 3 0 0 0 -3 -3" />
			<path d="M15 17a6 6 0 0 0 -6 -6" />
			<path d="M9 17h.01" />
		</svg>
	);
});

FileRss.displayName = "FileRss";
export default FileRss;
