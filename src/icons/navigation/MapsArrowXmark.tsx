import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MapsArrowXmark = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 17.2778L12.1812 16.5705C12.0647 16.5251 11.9353 16.5251 11.8188 16.5705L4.30179 19.4937C3.86426 19.6639 3.45463 19.1918 3.68478 18.7826L11.5642 4.77473C11.7554 4.43491 12.2446 4.43491 12.4358 4.77473L18.5 15.5556" />
			<path d="M17.1213 22.364L19.2427 20.2427M19.2427 20.2427L21.364 18.1213M19.2427 20.2427L17.1213 18.1213M19.2427 20.2427L21.364 22.364" />
		</svg>
	);
});

MapsArrowXmark.displayName = "MapsArrowXmark";
export default MapsArrowXmark;
