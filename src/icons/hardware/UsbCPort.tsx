import { forwardRef } from "react";
import type { IconProps } from "../../types";
const UsbCPort = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 12h12" />
			<rect height="8" rx="4" width="20" x="2" y="8" />
		</svg>
	);
});

UsbCPort.displayName = "UsbCPort";
export default UsbCPort;
