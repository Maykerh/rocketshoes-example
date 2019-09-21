import React from 'react';
import { Container, Cart } from './styles';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo.svg';

import { MdShoppingBasket } from 'react-icons/md';

function Header({ cartSize }) {
	return (
		<Container>
			<Link to='/'>
				<img src={logo} alt='Rocketshoes' />
			</Link>

			<Cart to='/cart'>
				<div>
					<strong>Meu carrinho</strong>
					<span>{cartSize + ' itens'}</span>
				</div>
				<MdShoppingBasket size={36} color='FFF' />
			</Cart>
		</Container>
	);
}

const mapStateToProps = state => ({
	cartSize: state.cart.length
});

export default connect(mapStateToProps)(Header);
