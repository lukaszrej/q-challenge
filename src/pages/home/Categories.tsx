import { Category } from '../../types/category';
import { CategoryList, ProductList } from '../../styles';
import { CATEGORY } from '../../constants/constants';

interface IProps { 
    categories: Category[];
}

export const Categories = (props: IProps) => {
    const { categories } = props;
    
    return (
        <>
            <CategoryList>
                {categories.map(category => (
                    <li key={category.groupId}>
                        {CATEGORY} {category.name} #{category.groupId}

                        <ProductList>
                            {category.products.map(product => (
                                <li key={product.typeId}>
                                    {product.name}
                                </li>
                            ))}
                        </ProductList>
                    </li>
                ))}
            </CategoryList>
        </>
    )
}
