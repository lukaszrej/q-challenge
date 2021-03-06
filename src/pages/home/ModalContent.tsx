import { useState, useEffect, ChangeEvent } from 'react';
import { Products } from './Products';
import { Category } from '../../types/category';
import { useInputFocus } from '../../hooks/useInputFocus';
import { useDebounce } from '../../hooks/useDebounce';
import { Categories } from '../../styles/pages/home/categories';
import { Input } from '../../components/Input';
import { MACHINE_NAME } from '../../constants/constants';
import { fetchData } from '../../api/fetchData';

export const ModalContent = () => {
    const [userInput, setUserInput] = useState('');
    const [display, setDisplay] = useState(false);
    const [inputRef] = useInputFocus();
	const [categories, setCategories] = useState<Category[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value);

        e.currentTarget.value
            ? setDisplay(true)
            : setDisplay(false);
    };

    const debouncedUserInput = useDebounce(userInput, 600);

	useEffect(() => {
        fetchData('data.json', debouncedUserInput, setCategories);
	}, [debouncedUserInput]);

    return (
        <>
            <Input
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder={MACHINE_NAME}
                ref={inputRef}
            />

            {display &&
                <Categories>
                    {categories.map(category => {
                        return (
                            <section key={category.id}>
                                {category.products.length > 0 && 
                                    <header>{category.name}</header>
                                }
                                <Products products={category.products} />
                            </section>
                        )
                    })}                 
                </Categories>
            }
        </>
    )
}
