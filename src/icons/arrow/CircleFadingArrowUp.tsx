import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleFadingArrowUp = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 2a10 10 0 0 1 7.38 16.75" />
				<path d="m16 12-4-4-4 4" />
				<path d="M12 16V8" />
				<path d="M2.5 8.875a10 10 0 0 0-.5 3" />
				<path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
				<path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
				<path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
			</svg>
		);
	}
);

CircleFadingArrowUp.displayName = "CircleFadingArrowUp";
export default CircleFadingArrowUp;
