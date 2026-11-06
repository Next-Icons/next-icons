import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Voicemail = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="6" cy="12" r="4" />
			<circle cx="18" cy="12" r="4" />
			<line x1="6" x2="18" y1="16" y2="16" />
		</svg>
	);
});

Voicemail.displayName = "Voicemail";
export default Voicemail;
