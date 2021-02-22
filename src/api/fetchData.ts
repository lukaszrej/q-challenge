import { Dispatch, SetStateAction } from 'react';
import { filterByQuery } from './filterByQuery';
import { CategoryDTO, Category } from '../types/category';

export const fetchData = async (url: string, query: string, action: Dispatch<SetStateAction<Category[]>>) => {
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
		.then(resp => resp.json())
		.then(dto => dtoToObject(dto))
        .then(obj => filterByQuery(obj, query));

	action(response);
};

const dtoToObject = (DTO: CategoryDTO[]) => {
	return DTO.map(category => {
        const products =  category.products.map(product => {
            return {
                id: product.typeId,
                name: product.name,
                categoryId: product.groupId,
                categoryName: category.name
            }
        });

		return {
			id: category.groupId,
			name: category.name,
			products
		};
	});
};
