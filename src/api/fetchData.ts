import { Dispatch, SetStateAction } from 'react';
import { CategoryDTO, Category } from '../types/category';

export const fetchData = async (
	url: string,
	action: Dispatch<SetStateAction<any[]>>,
	query: string
) => {
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
		.then((resp) => resp.json())
		.then((json) => dtoToObj(json, query));

	action(response);
};

const dtoToObj = (DTO: CategoryDTO[], query: string) => {
	return DTO.map(category => {
        const products = category.products.filter((product) => {
            if (product.name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                return {
                    id: product.typeId,
                    name: product.name,
                }
            }
		});

		return {
			id: category.groupId,
			name: category.name,
			products
		};
	});
};
