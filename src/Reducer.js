export const initialState = {
	basket: [],
	user: null,
};
//selector
export const getBasketTotal = (basket) => {
	return basket?.reduce((amount, item) => item.price + amount, 0);
};

const Reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			const indx = state.basket.findIndex(
				(e) => e.id === action.id
			);
			let nwbasket = [...state.basket];
			if (indx >= 0) {
				nwbasket.splice(indx, 1);
			}
			return {
				...state,
				basket: nwbasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default Reducer;
