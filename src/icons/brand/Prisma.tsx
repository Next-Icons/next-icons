import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Prisma = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4.186 16.202l3.615 5.313c.265 .39 .754 .57 1.215 .447l10.166 -2.718a1.086 1.086 0 0 0 .713 -1.511l-7.505 -15.483a.448 .448 0 0 0 -.787 -.033l-7.453 12.838a1.07 1.07 0 0 0 .037 1.147l-.001 0" />
			<path d="M8.5 22l3.5 -20" />
		</svg>
	);
});

Prisma.displayName = "Prisma";
export default Prisma;
