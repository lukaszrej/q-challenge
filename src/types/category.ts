import { Product } from './product';

export interface Category {
	groupId: number;
	familyId: number;
	name: string;
	products: Product[]
}
