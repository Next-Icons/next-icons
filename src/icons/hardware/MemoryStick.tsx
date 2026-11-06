import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MemoryStick = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 12v-2" />
			<path d="M12 18v-2" />
			<path d="M16 12v-2" />
			<path d="M16 18v-2" />
			<path d="M2 11h1.5" />
			<path d="M20 18v-2" />
			<path d="M20.5 11H22" />
			<path d="M4 18v-2" />
			<path d="M8 12v-2" />
			<path d="M8 18v-2" />
			<rect height="10" rx="2" width="20" x="2" y="6" />
		</svg>
	);
});

MemoryStick.displayName = "MemoryStick";
export default MemoryStick;
