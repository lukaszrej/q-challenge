import { Dispatch, SetStateAction } from 'react';
import { CategoryDTO, Category } from '../types/category';

export const fetchData = async (url: string, action: Dispatch<SetStateAction<Category[]>>) => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then(resp => resp.json())
        .then(json => dtoToObj(json));

    action(response);
};

const dtoToObj = (DTO: CategoryDTO[]) => {
    return DTO.map(category => {
        const products = category.products.map(product => {
            return {
                id: product.typeId,
                name: product.name,
                categoryId: product.groupId
            };
        });

        return {
            id: category.groupId,
            name: category.name,
            products
        };
    });
}
