import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MonitorPlay = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
			<path d="M12 17v4" />
			<path d="M8 21h8" />
			<rect height="14" rx="2" width="20" x="2" y="3" />
		</svg>
	);
});

MonitorPlay.displayName = "MonitorPlay";
export default MonitorPlay;
