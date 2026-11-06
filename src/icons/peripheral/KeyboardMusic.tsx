import { forwardRef } from "react";
import type { IconProps } from "../../types";
const KeyboardMusic = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<path d="M6 8h4" />
			<path d="M14 8h.01" />
			<path d="M18 8h.01" />
			<path d="M2 12h20" />
			<path d="M6 12v4" />
			<path d="M10 12v4" />
			<path d="M14 12v4" />
			<path d="M18 12v4" />
		</svg>
	);
});

KeyboardMusic.displayName = "KeyboardMusic";
export default KeyboardMusic;
