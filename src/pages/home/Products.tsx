import { Product } from '../../types/product';
import { Products as StyledProducts } from '../../styles';

interface IProps {
    products: Product[];
}

export const Products = (props: IProps) => {
    const { products } = props;

    return (
        <StyledProducts>
            {products.map(product => <li key={product.id}>{product.name}</li>)}
        </StyledProducts>
    );
};
