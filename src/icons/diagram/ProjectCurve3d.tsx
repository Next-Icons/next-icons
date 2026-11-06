import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ProjectCurve3d = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path
				d="M12 21C7.02944 21 3 19.2091 3 17C3 14.7909 7.02944 13 12 13C16.9706 13 21 14.7909 21 17C21 19.2091 16.9706 21 12 21Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 2C13.6569 2 15 3.34315 15 5V6H9V5C9 3.34315 10.3431 2 12 2Z"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path d="M3.5 15.5L7.5 8.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M20.5 15.5L16.5 8.5" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
});

ProjectCurve3d.displayName = "ProjectCurve3d";
export default ProjectCurve3d;
