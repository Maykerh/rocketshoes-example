import React, { Component } from 'react';

import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from 'react-icons/md';
import { Container } from './styles';

export default class CartItem extends Component {
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
						<button type="button" onClick={() => {}}>
							<MdRemoveCircleOutline size={20} color="#7159c1" />
						</button>
						<input type="number" readOnly value={amount} />
						<button type="button" onClick={() => {}}>
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
