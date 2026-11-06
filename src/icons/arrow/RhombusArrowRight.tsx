import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RhombusArrowRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<g clipPath="url(#clip0_4039_354)">
				<path d="M16 11H10C9 11 8 12 8 13V14M16 11L14 9M16 11L14 13" />
				<path d="M1.42426 11.5757L11.5757 1.42426C11.8101 1.18995 12.1899 1.18995 12.4243 1.42426L22.5757 11.5757C22.8101 11.8101 22.81 12.1899 22.5757 12.4243L12.4243 22.5757C12.1899 22.8101 11.8101 22.81 11.5757 22.5757L1.42426 12.4243C1.18995 12.1899 1.18995 11.8101 1.42426 11.5757Z" />
			</g>
			<defs>
				<clipPath id="clip0_4039_354">
					<rect fill="white" height="24" width="24" />
				</clipPath>
			</defs>
		</svg>
	);
});

RhombusArrowRight.displayName = "RhombusArrowRight";
export default RhombusArrowRight;
