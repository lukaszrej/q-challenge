import { useState, ChangeEvent } from 'react';
import { Category } from '../../types/category';
import { Input, CategoryList } from '../../styles';
import { CATEGORY, MACHINE_NAME } from '../../constants/constants';
import { Products } from './Products';

interface IProps { 
    categories: Category[];
}

export const Categories = (props: IProps) => {
    const { categories } = props;
    const [userInput, setUserInput] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value);
    };

    return (
        <>
            <Input 
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder={MACHINE_NAME}
            />

            <CategoryList>
                {categories.map(category => {
                    const filteredProducts = category.products.filter(product => 
                        product.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

                    return (
                        <li key={category.groupId}>
                            {category.products.length > 0 && `${CATEGORY} ${category.name} #${category.groupId}`}

                            <Products filteredProducts={filteredProducts} />
                        </li>
                    )
                } )}
            </CategoryList>
        </>
    )
}
