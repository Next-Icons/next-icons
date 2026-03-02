import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const ArchiveRestore = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<rect width="20" height="5" x="2" y="3" rx="1" />
			<path d="M4 8v11a2 2 0 0 0 2 2h2" />
			<path d="M20 8v11a2 2 0 0 1-2 2h-2" />
			<path d="m9 15 3-3 3 3" />
			<path d="M12 12v9" />
		</svg>
	);
});

ArchiveRestore.displayName = "ArchiveRestore";
export default ArchiveRestore;
