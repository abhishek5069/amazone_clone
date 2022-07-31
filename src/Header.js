import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
	const [state, dispatch] = useStateValue(); //or either at place of state, {basket} direct basket
	const handleAuth = () => {
		if (state.user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header_logo"
					src="https://i.pinimg.com/originals/fc/c8/3a/fcc83acc903087e02f6c65e3a5a377a4.jpg"
				/>
			</Link>
			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<Link
					style={{ textDecoration: "none", color: "white" }}
					to={!state.user && "/login"}
				>
					<div
						onClick={handleAuth}
						className="header_option"
					>
						<span className="header_optionLineOne">
							{state.user ? (
								<>Hello, {state.user.email}</>
							) : (
								"Hello Guest"
							)}
						</span>
						<span className="header_optionLineTwo">
							{state.user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
			</div>

			<Link
				style={{ textDecoration: "none", color: "white" }}
				to="/checkout"
			>
				<div className="header_basket">
					<ShoppingBasketIcon />
					<span className="header_basketCount">
						{state.basket?.length}
					</span>
				</div>
			</Link>
		</div>
	);
}

export default Header;
