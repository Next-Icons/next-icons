import React, { forwardRef, SVGAttributes } from "react";

/******************************************************************************
Copyright (c) Alexandr Virgovič.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
}

const AirPlane = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			<path d="M4.42238 13.1785L3 14.6006L7.26716 16.7337L9.40076 21L10.8231 19.5779L10.4675 16.3782L13.3123 13.534L17.2239 19.5779L18.5405 18.2616C19.0464 17.7558 19.2455 17.0194 19.0634 16.3277L17.5795 10.6898L19.4074 9.14342C21.0317 7.76935 21.4911 5.35695 20.4243 3.57933C18.6463 2.51276 15.8192 2.91468 14.4579 4.81999L13.3123 6.42352L7.67331 4.93988C6.98142 4.75784 6.24488 4.95692 5.73899 5.46271L4.42238 6.77905L10.4675 10.6898L7.62276 13.534L4.42238 13.1785Z" />
		</svg>
	);
});

AirPlane.displayName = "AirPlane";
export default AirPlane;
