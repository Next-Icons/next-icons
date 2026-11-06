import { forwardRef } from "react";
import type { IconProps } from "../../types";
const GitPullRequestCreateArrow = forwardRef<SVGSVGElement, IconProps>(
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
				<circle cx="5" cy="6" r="3" />
				<path d="M5 9v12" />
				<path d="m15 9-3-3 3-3" />
				<path d="M12 6h5a2 2 0 0 1 2 2v3" />
				<path d="M19 15v6" />
				<path d="M22 18h-6" />
			</svg>
		);
	}
);

GitPullRequestCreateArrow.displayName = "GitPullRequestCreateArrow";
export default GitPullRequestCreateArrow;
