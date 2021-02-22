import { Category } from '../types/category';

export const filterByQuery = (categoryList: Category[], query: string) => {
	return categoryList.map((category) => {
		const products = category.products.filter(product => {
			if (product.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
				return {
					id: product.id,
					name: product.name
				};
			}

			return null;
		});

		return {
			id: category.id,
			name: category.name,
			products
		};
	});
};
