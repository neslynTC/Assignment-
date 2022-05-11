export class Product {
    id: number;
    img: string;
    title: string;
    description: string;
    weight: string;
    price: number;
    count: number;
    shortDescription: string
    constructor(id: number,
        img: string,
        title: string,
        description: string,
        weight: string,
        price: number,
        count: number,
        shortDescription: string) {
            this.id = id;
            this.img = img;
            this.title = title;
            this.description = description;
            this.weight = weight;
            this.price = price;
            this.count = count;
            this.shortDescription = shortDescription
    }
}