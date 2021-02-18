import { Product } from '../../types/product';
import { ProductList } from '../../styles';

interface IProps {
	filteredProducts: Product[];
}

export const Products = (props: IProps) => {
	const { filteredProducts } = props;

	return (
        <ProductList>
            {filteredProducts.map(product => <li key={product.typeId}>{product.name}</li>)}
        </ProductList>
	);
};
