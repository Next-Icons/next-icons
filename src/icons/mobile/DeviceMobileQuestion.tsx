import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceMobileQuestion = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M15 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6" />
				<path d="M19 22v.01" />
				<path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
				<path d="M11 4h2" />
				<path d="M12 17v.01" />
			</svg>
		);
	}
);

DeviceMobileQuestion.displayName = "DeviceMobileQuestion";
export default DeviceMobileQuestion;
