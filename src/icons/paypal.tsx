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

const PayPal = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, ...rest }, ref) => {
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
			<path d="M8.00063 19.9611L9.52233 12.9317H12.8557C13.5061 12.9317 14.1605 12.842 14.7535 12.5762C17.8877 11.1712 18.7246 8.68085 19.0497 7.34411M8.00063 19.9611H3.00385L7.02404 1.94629L14.2533 2.07997C14.8454 2.09092 15.4419 2.14075 15.9993 2.34006C17.9458 3.03611 19.4671 4.63451 19.0497 7.34411M8.00063 19.9611L7.5009 21.9502H11.5665L13.0479 15.9555C21.9478 17.0191 22.4617 9.20548 19.0497 7.34411" />
		</svg>
	);
});

PayPal.displayName = "PayPal";
export default PayPal;
