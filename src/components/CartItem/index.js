import React, { Component } from 'react';

import { Container } from './styles';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

export default class CartItem extends Component {
	render() {
		const { image, title, priceFormatted, amount, subtotal } = this.props;

		return (
			<Container>
				<tr>
					<td>
						<img src={image} alt={title} />
					</td>
					<td>
						<strong>{title}</strong>
						<span>{priceFormatted}</span>
					</td>
					<td>
						<div>
							<button type='button' onClick={() => {}}>
								<MdRemoveCircleOutline size={20} color='#7159c1' />
							</button>
							<input type='number' readOnly value={amount} />
							<button type='button' onClick={() => {}}>
								<MdAddCircleOutline size={20} color='#7159c1' />
							</button>
						</div>
					</td>
					<td>
						<strong>{subtotal}</strong>
					</td>
					<td>
						<button
							type='button'
							// onClick={() => dispatch(CartActions.removeFromCart(product.id))}
						>
							<MdDelete size={20} color='#7159c1' />
						</button>
					</td>
				</tr>
			</Container>
		);
	}
}
