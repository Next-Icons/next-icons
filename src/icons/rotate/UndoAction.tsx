import { forwardRef } from "react";
import type { IconProps } from "../../types";
const UndoAction = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 5V8V11" />
			<path d="M8.50005 8C12.5001 8 11.0001 8 15.0001 8C15.0001 8 15.0001 8 15.0001 8C15.0001 8 20.0001 8 20.0001 12.7059C20.0001 18 15.0001 18 15.0001 18C11.5715 18 9.71434 18 6.28577 18" />
			<path d="M11.5 11.5C10.1332 10.1332 9.36683 9.36683 8 8C9.36683 6.63317 10.1332 5.86683 11.5 4.5" />
		</svg>
	);
});

UndoAction.displayName = "UndoAction";
export default UndoAction;
