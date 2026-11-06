import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MapsTurnBack = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4.36463 19.787L11.6678 13.2953C11.8573 13.1269 12.1427 13.1269 12.3322 13.2953L19.6354 19.787C20.0155 20.1249 19.707 20.7486 19.2078 20.6515L12.0954 19.2686C12.0324 19.2563 11.9676 19.2563 11.9046 19.2686L4.79225 20.6515C4.29295 20.7486 3.98446 20.1249 4.36463 19.787Z" />
			<path d="M5.5 11C5.5 7.5 5.5 6 5.5 6V6C5.5 6 5.5 2.5 8.5 2.5C12 2.5 12 6 12 6V10.5" />
			<path d="M9 7.5C7.63317 8.86683 6.86683 9.63317 5.5 11C4.13317 9.63317 3.36683 8.86683 2 7.5" />
		</svg>
	);
});

MapsTurnBack.displayName = "MapsTurnBack";
export default MapsTurnBack;
