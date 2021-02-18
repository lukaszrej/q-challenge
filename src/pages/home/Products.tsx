import { Product } from '../../types/product';
import { ProductList } from '../../styles';
import { Category } from '../../types/category';

interface IProps {
	filteredProducts: Product[];
    categories: Category[];
}

export const Products = (props: IProps) => {
	const { filteredProducts, categories } = props;

	return (
        <>
            <ProductList>
                {filteredProducts.map(product => <li key={product.typeId}>{product.name}</li>)}
            </ProductList>
        </>
	);
};
