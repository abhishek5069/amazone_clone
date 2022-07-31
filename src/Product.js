import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
	const [state, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product_info">
				<h5>{title}</h5>
				<p className="product_price">
					<small>₨ </small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{[...Array(rating)].map((e, i) => (
						<p key={i}>⭐</p>
					))}
				</div>
			</div>
			<img src={image} alt="" />

			<button className="product_btn" onClick={addToBasket}>
				Add to Cart
			</button>
		</div>
	);
}

export default Product;
