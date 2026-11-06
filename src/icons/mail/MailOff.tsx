import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MailOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
			<path d="M3 7l9 6l.565 -.377m2.435 -1.623l6 -4" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

MailOff.displayName = "MailOff";
export default MailOff;
