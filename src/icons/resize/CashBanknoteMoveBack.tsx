import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CashBanknoteMoveBack = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
				<path d="M12 18h-7a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4.5" />
				<path d="M18 12h.01" />
				<path d="M6 12h.01" />
				<path d="M16 19h6" />
				<path d="M19 16l-3 3l3 3" />
			</svg>
		);
	}
);

CashBanknoteMoveBack.displayName = "CashBanknoteMoveBack";
export default CashBanknoteMoveBack;
