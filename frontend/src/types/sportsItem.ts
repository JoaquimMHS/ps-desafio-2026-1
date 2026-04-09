import { categoryType } from "./category";
export type sportingGoodsType = {
    id: string
    name: string
    brand: string
    price: number | string
    year: number | string
    image_url: string
    amount: number
    category: categoryType
}