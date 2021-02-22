import { Product, ProductDTO } from './product';

export interface CategoryDTO {
	groupId: number;
	familyId: number;
	name: string;
	products: ProductDTO[];
}

export interface Category {
	id: number;
	name: string;
	products: Product[];
}
