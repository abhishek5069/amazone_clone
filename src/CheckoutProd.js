import React from "react";
import "./CheckoutProd.css";
import { useStateValue } from "./StateProvider";

function CheckoutProd({ id, image, title, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const removeProd = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct_image" src={image} />

			<div className="checkoutProduct_info">
				<p className="checkoutProduct_title">{title}</p>
				<p className="checkoutProduct_price">
					<small>₨</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct_rating">
					{[...Array(rating)].map((e, i) => {
						return <p key={i}>⭐</p>;
					})}
				</div>
				<button onClick={removeProd}>
					{" "}
					Remove from Basket
				</button>
			</div>
		</div>
	);
}

export default CheckoutProd;
