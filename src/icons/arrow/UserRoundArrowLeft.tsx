import { forwardRef } from "react";
import type { IconProps } from "../../types";
const UserRoundArrowLeft = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="m19 16-3 3" />
				<path d="M2 21a8 8 0 0 1 12.664-6.5" />
				<path d="M22 19h-6l3 3" />
				<circle cx="10" cy="8" r="5" />
			</svg>
		);
	}
);

UserRoundArrowLeft.displayName = "UserRoundArrowLeft";
export default UserRoundArrowLeft;
