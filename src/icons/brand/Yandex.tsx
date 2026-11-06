import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Yandex = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 20v-16h-2a4 4 0 0 0 -4 4v1a4 4 0 0 0 4 4h2" />
			<path d="M9 20l3 -7" />
		</svg>
	);
});

Yandex.displayName = "Yandex";
export default Yandex;
