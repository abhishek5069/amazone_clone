import React from "react";
import "./Checkout.css";
import CheckoutProd from "./CheckoutProd";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
	const [{ basket, user }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_ads"
					src="https://image.shutterstock.com/image-vector/templates-banner-design-ads-social-600w-1511239976.jpg"
					alt=""
				/>
				<div>
					<h3>Hello, {user?.email}</h3>
					<h2 className="checkout_title">
						{" "}
						Your Shopping Basket
					</h2>
					{basket?.map((e, i) => {
						return (
							<CheckoutProd
								key={i}
								id={e.id}
								title={e.title}
								image={e.image}
								price={e.price}
								rating={e.rating}
							/>
						);
					})}
				</div>
			</div>
			<div className="checkout_right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
