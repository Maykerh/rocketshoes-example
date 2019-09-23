const initialState = [];

export default function cart(state = initialState, action) {
	switch (action.type) {
		case '@cart/ADD_SUCCESS':
			const newState = [...state];
			const productIndex = Object.keys(newState).filter(
				key => state[key].id === action.product.id
			);

			if (productIndex.length > 0) {
				newState[productIndex].amount += 1;
			} else {
				newState.push({
					...action.product,
					amount: 1,
				});
			}

			return newState;
		case '@cart/REMOVE':
			return state.filter(product => product.id !== action.id);
		case '@cart/UPDATE_AMOUNT':
			if (action.payload.amount <= 0) {
				return state;
			}

			return state.map(product => {
				if (product.id === action.payload.id) {
					product.amount = action.payload.amount;
				}

				return product;
			});
		default:
			return state;
	}
}
