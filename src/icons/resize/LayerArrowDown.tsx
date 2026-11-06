import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LayerArrowDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 10v10" />
			<path d="M22 10a1 1 0 01-.59.92l-5.077 2.308" />
			<path d="M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316" />
			<path d="m9 17 3 3 3-3" />
		</svg>
	);
});

LayerArrowDown.displayName = "LayerArrowDown";
export default LayerArrowDown;
