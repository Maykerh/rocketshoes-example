const initialState = [];

export default function cart(state = initialState, action) {
	switch (action.type) {
		case '@cart/ADD_SUCCESS':
			return [...state, action.product];
		case '@cart/REMOVE':
			return state.filter(product => product.id !== action.id);
		case '@cart/UPDATE_AMOUNT_SUCCESS':
			state.map(product => {
				if (product.id === action.payload.id) {
					product.amount = action.payload.amount;
				}

				return product;
			});

			return [...state];
		default:
			return state;
	}
}
