import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AddressBookOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12" />
			<path d="M10 16h6" />
			<path d="M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
			<path d="M4 8h3" />
			<path d="M4 12h3" />
			<path d="M4 16h3" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

AddressBookOff.displayName = "AddressBookOff";
export default AddressBookOff;
