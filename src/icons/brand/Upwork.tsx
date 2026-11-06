import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Upwork = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 5.25v5.5c0 1.873 1.628 3.25 3.5 3.25s3.5 -1.377 3.5 -3.25v-5.75c1.146 2.865 2.85 9 7 9c2.184 0 4 -1.816 4 -4s-1.816 -4 -4 -4c-2.323 0 -3.687 2.031 -4 3.75c-.278 1.524 -1 9.25 -1 9.25" />
		</svg>
	);
});

Upwork.displayName = "Upwork";
export default Upwork;
