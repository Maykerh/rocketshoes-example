import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from 'react-icons/md';
import { Container } from './styles';

class CartItem extends Component {
	changeAmount(id, amount) {
		const { updateAmountRequest } = this.props;

		updateAmountRequest(id, amount);
	}

	render() {
		const {
			img,
			title,
			price,
			amount,
			subtotal,
			id,
			removeFromCart,
		} = this.props;

		return (
			<Container>
				<td>
					<img src={img} alt={title} />
				</td>
				<td>
					<strong>{title}</strong>
					<span>{price}</span>
				</td>
				<td>
					<div>
						<button
							type="button"
							onClick={() => this.changeAmount(id, amount - 1)}
						>
							<MdRemoveCircleOutline size={20} color="#7159c1" />
						</button>
						<input type="number" readOnly value={amount} />
						<button
							type="button"
							onClick={() => this.changeAmount(id, amount + 1)}
						>
							<MdAddCircleOutline size={20} color="#7159c1" />
						</button>
					</div>
				</td>
				<td>
					<strong>{subtotal}</strong>
				</td>
				<td>
					<button type="button" onClick={() => removeFromCart(id)}>
						<MdDelete size={20} color="#7159c1" />
					</button>
				</td>
			</Container>
		);
	}
}

CartItem.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	price: PropTypes.string,
	amount: PropTypes.number,
	subtotal: PropTypes.string,
	id: PropTypes.number,
	removeFromCart: PropTypes.func,
	updateAmountRequest: PropTypes.func,
};

export default CartItem;
