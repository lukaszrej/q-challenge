import { Product } from './product';

export interface CategoryDTO {
	groupId: number;
	familyId: number;
	name: string;
	products: Product[];
}

export interface Category {
	id: number;
	name: string;
	products: Product[];
}
