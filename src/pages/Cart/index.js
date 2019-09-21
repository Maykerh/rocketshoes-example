import React from 'react';

import CartItem from '../../components/CartItem';

import { Container, ProductTable, Total } from './styles';
// import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

const cart = [
	{
		image: '',
		title: 'tenis massa',
		priceFormatted: '57',
		amount: 1,
		subtotal: 10
	}
];
export default function Cart() {
	return (
		<Container>
			<ProductTable>
				<thead>
					<tr>
						<th />
						<th>PRODUTO</th>
						<th>QTD</th>
						<th>SUBTOTAL</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{cart.map(product => (
						<CartItem {...product} />
					))}
				</tbody>
			</ProductTable>

			<footer>
				<button type='button'>Finalizar pedido</button>

				<Total>
					<span>TOTAL</span>
					{/* <strong>{total}</strong> */}
				</Total>
			</footer>
		</Container>
	);
}
