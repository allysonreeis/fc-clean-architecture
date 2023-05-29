import Product from "../../../domain/product/entity/product";
import ProductFactory from "../../../domain/product/factory/product.factory";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputCreateProductDto, OutputCreateProductDto } from "./create.product.dto";
import { v4 as uuid } from "uuid";

export default class CreateProductUseCase {
    private productRepository: ProductRepositoryInterface;

    constructor (productRepository: ProductRepositoryInterface) {
        this.productRepository =productRepository;
    }

    async execute(input: InputCreateProductDto) : Promise<OutputCreateProductDto> {
        const productI = ProductFactory.create(
            "a",
            input.name,
            input.price
        );

        const product = new Product(productI.id, productI.name, productI.price);

        await this.productRepository.create(product);

        return {
            id: product.id,
            name: product.name,
            price: product.price
        };
    }
}