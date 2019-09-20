import React from 'react';

import { ProductList } from './styles';
import { MdShoppingCart } from 'react-icons/md';

export default function Home() {
	return (
		<ProductList>
			<li>
				<img src='' alt='tenis' />
			</li>
			<strong>Tênis bacana</strong>
			<span>R$129,90</span>

			<button>
				<div>
					<MdShoppingCart size={16} color='FFF' />
				</div>

				<span>Adicionar ao carrinho</span>
			</button>
		</ProductList>
	);
}
