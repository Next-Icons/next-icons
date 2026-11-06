import { forwardRef } from "react";
import type { IconProps } from "../../types";
const HardDriveDownload = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 2v8" />
			<path d="m16 6-4 4-4-4" />
			<rect height="8" rx="2" width="20" x="2" y="14" />
			<path d="M6 18h.01" />
			<path d="M10 18h.01" />
		</svg>
	);
});

HardDriveDownload.displayName = "HardDriveDownload";
export default HardDriveDownload;
