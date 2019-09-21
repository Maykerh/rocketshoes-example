const initialState = [];

export default function cart(state = initialState, action) {
	const newState = state;

	switch (action.type) {
		case 'ADD_TO_CART':
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
		case 'REMOVE_FROM_CART':
			return state.filter(product => product.id !== action.id);
		default:
			return state;
	}
}
