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

// export interface ProductDTO {
//     groupId: number;
//     typeId: number;
//     name: string;
// }

// export interface Product {
//     id: number;
//     name: string;
//     categoryId: number;
//     categoryName: string;
// }
