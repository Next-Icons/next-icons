import { forwardRef } from "react";
import type { IconProps } from "../../types";
const KanbanSquareDashed = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M8 7v7" />
				<path d="M12 7v4" />
				<path d="M16 7v9" />
				<path d="M5 3a2 2 0 0 0-2 2" />
				<path d="M9 3h1" />
				<path d="M14 3h1" />
				<path d="M19 3a2 2 0 0 1 2 2" />
				<path d="M21 9v1" />
				<path d="M21 14v1" />
				<path d="M21 19a2 2 0 0 1-2 2" />
				<path d="M14 21h1" />
				<path d="M9 21h1" />
				<path d="M5 21a2 2 0 0 1-2-2" />
				<path d="M3 14v1" />
				<path d="M3 9v1" />
			</svg>
		);
	}
);

KanbanSquareDashed.displayName = "KanbanSquareDashed";
export default KanbanSquareDashed;
