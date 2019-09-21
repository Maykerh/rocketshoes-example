import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import CartItem from '../../components/CartItem';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';
// import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

function Cart({ cart, removeFromCart }) {
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
						<CartItem
							img={product.image}
							title={product.title}
							price={product.price}
							amount={product.amount}
							id={product.id}
							removeFromCart={removeFromCart}
						/>
					))}
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar pedido</button>

				<Total>
					<span>TOTAL</span>
					{/* <strong>{total}</strong> */}
				</Total>
			</footer>
		</Container>
	);
}

Cart.protoTypes = {
	cart: PropTypes.array,
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(CartActions, dispatch);

const mapStateToProps = state => ({
	cart: state.cart,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
