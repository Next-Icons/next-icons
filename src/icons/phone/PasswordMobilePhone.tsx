import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PasswordMobilePhone = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 17v4" />
				<path d="M10 20l4 -2" />
				<path d="M10 18l4 2" />
				<path d="M5 17v4" />
				<path d="M3 20l4 -2" />
				<path d="M3 18l4 2" />
				<path d="M19 17v4" />
				<path d="M17 20l4 -2" />
				<path d="M17 18l4 2" />
				<path d="M7 14v-8a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8" />
				<path d="M11 5h2" />
				<path d="M12 17v.01" />
			</svg>
		);
	}
);

PasswordMobilePhone.displayName = "PasswordMobilePhone";
export default PasswordMobilePhone;
