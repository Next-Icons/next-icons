import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TimelineEventMinus = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M10 20h-6" />
				<path d="M14 20h6" />
				<path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2" />
				<path d="M10 8h4" />
			</svg>
		);
	}
);

TimelineEventMinus.displayName = "TimelineEventMinus";
export default TimelineEventMinus;
