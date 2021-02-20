import { useState, ChangeEvent } from 'react';
import { Products } from './Products';
import { Category } from '../../types/category';
import { useInputFocus } from '../../hooks/useInputFocus';
import { useDebounce } from '../../hooks/useDebounce';
import { Input, Categories } from '../../styles';
import { MACHINE_NAME, CATEGORY } from '../../constants/constants';

interface IProps {
    categories: Category[];
}

export const ModalContent = (props: IProps) => {
    const { categories } = props;
    const [userInput, setUserInput] = useState('');
    const [display, setDisplay] = useState(false);
    const [inputRef] = useInputFocus();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value);

        e.currentTarget.value
            ? setDisplay(true)
            : setDisplay(false);
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

            {display &&
                <Categories>
                    {categories.map(category => {
                        const filteredProducts = category.products.filter(product =>
                            product.name.toLowerCase().indexOf(debouncedUserInput.toLowerCase()) > -1);

                        return (
                            <section key={category.id}>
                                <header>{CATEGORY}: {category.name}</header>
                                <Products filteredProducts={filteredProducts} />
                            </section>
                        )
                    })}
                </Categories>
            }
        </>
    )
}
