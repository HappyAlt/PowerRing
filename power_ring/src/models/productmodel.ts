export interface ProductProps {
    name: string;
    image: string;
    price: number;
    ID:number;
}

export interface ProductsComProps {
    product:ProductProps,
    click: (e:number) => void,
}