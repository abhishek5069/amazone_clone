import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home_container">
				<img
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					className="home_image"
				/>
				<div className="home_row">
					<Product
						id={123454}
						title="Apple iPhone 13 (128GB) - Starlight"
						price={72990.0}
						image="https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg"
						rating={4}
					/>

					<Product
						id={123454}
						title="TRACER Men's Scoosh-2703 Running Shoes"
						price={1499.0}
						image="https://m.media-amazon.com/images/I/61XmsQvsEiL._UL1200_.jpg"
						rating={3}
					/>
					<Product
						id={123454}
						title="
						ASUS VivoBook 15 (2021), 15.6-inch (39.62 cm) HD"
						price={58000.0}
						image="https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg"
						rating={4}
					/>
				</div>
				<div className="home_row">
					
					<Product
						id={123455}
						title="Noise ColorFit Pulse Grand Smart Watch"
						price={1799.0}
						image="https://m.media-amazon.com/images/I/61RYmov6UML._SL1500_.jpg"
						rating={4}
					/>
					<Product
						id={123456}
						title="Half Moon 35 L Casual Waterproof Laptop Bag"
						price={2500.0}
						image="https://m.media-amazon.com/images/I/81oUvlsYcnL._SL1500_.jpg"
						rating={4}
					/>
					<Product
						id={123457}
						title="Apple iPhone 13 (128GB) - Starlight"
						price={72990.0}
						image="https://m.media-amazon.com/images/I/41d+anTy4RL._UY395_.jpg"
						rating={4}
					/>
				</div>
				<div className="home_row">
					<Product
						id={123458}
						title="Cello H2O Unbreakable Plastic Bottle"
						price={199.0}
						image="https://m.media-amazon.com/images/I/61cPhDzLvUL._SL1500_.jpg"
						rating={5}
					/>
					<Product
						id={123459}
						title="Apple iPhone 13 (128GB) - Starlight"
						price={72990.0}
						image="https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UY327_FMwebp_QL65_.jpg"
						rating={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
