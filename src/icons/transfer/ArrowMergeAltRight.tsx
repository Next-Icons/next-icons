import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowMergeAltRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M16 7l-4 -4l-4 4" />
				<path d="M6 21v.01" />
				<path d="M6 18.01v.01" />
				<path d="M7 15.02v.01" />
				<path d="M10 13.03v.01" />
				<path d="M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394" />
			</svg>
		);
	}
);

ArrowMergeAltRight.displayName = "ArrowMergeAltRight";
export default ArrowMergeAltRight;
