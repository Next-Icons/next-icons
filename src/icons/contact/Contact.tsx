import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Contact = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 2v2" />
			<path d="M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2" />
			<path d="M8 2v2" />
			<circle cx="12" cy="10" r="3" />
			<rect height="18" rx="2" width="18" x="3" y="3" />
		</svg>
	);
});

Contact.displayName = "Contact";
export default Contact;
