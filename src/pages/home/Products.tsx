import { Product, ProductDTO } from '../../types/product';
import { Products as StyledProducts } from '../../styles';

interface IProps {
    products: any;
}

export const Products = (props: IProps) => {
    const { products } = props;

    return (
        <StyledProducts>
            {products?.map((item: ProductDTO) => <li key={item?.typeId}>{item?.name}</li>)}
        </StyledProducts>
    );
};
