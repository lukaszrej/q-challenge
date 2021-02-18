import { Dispatch, SetStateAction } from 'react';
import { Category } from '../types/category';

export const fetchData = async (url: string, action: Dispatch<SetStateAction<Category[]>>) => {
    await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => action(json));
};
