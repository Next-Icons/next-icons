import { forwardRef } from "react";
import type { IconProps } from "../../types";
const InboxOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422a2 2 0 0 1 -1.407 .578h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" />
			<path d="M4 13h3l3 3h4l.987 -.987m2.013 -2.013h3" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

InboxOff.displayName = "InboxOff";
export default InboxOff;
