import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Cpu = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 20v2" />
			<path d="M12 2v2" />
			<path d="M17 20v2" />
			<path d="M17 2v2" />
			<path d="M2 12h2" />
			<path d="M2 17h2" />
			<path d="M2 7h2" />
			<path d="M20 12h2" />
			<path d="M20 17h2" />
			<path d="M20 7h2" />
			<path d="M7 20v2" />
			<path d="M7 2v2" />
			<rect height="16" rx="2" width="16" x="4" y="4" />
			<rect height="8" rx="1" width="8" x="8" y="8" />
		</svg>
	);
});

Cpu.displayName = "Cpu";
export default Cpu;
