import { useState, ChangeEvent } from 'react';
import { Products } from './Products';
import { Category } from '../../types/category';
import { useInputFocus } from '../../hooks/useInputFocus';
import { useDebounce } from '../../hooks/useDebounce';
import { Input, CategoryList } from '../../styles';
import { CATEGORY, MACHINE_NAME } from '../../constants/constants';

interface IProps { 
    categories: Category[];
}

export const Categories = (props: IProps) => {
    const { categories } = props;
    const [userInput, setUserInput] = useState('');
    const [inputRef] = useInputFocus();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value);
    };

    const debouncedUserInput = useDebounce(userInput, 300);

    return (
        <>
            <Input 
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder={MACHINE_NAME}
                ref={inputRef}
            />

            <CategoryList>
                {categories.map(category => {
                    const filteredProducts = category.products.filter(product => 
                        product.name.toLowerCase().indexOf(debouncedUserInput.toLowerCase()) > -1);

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
