import { Sequelize } from "sequelize-typescript";
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository";
import CreateProductUseCase from "./create.product.usecase";


const input = {
    type: "a",
    name: "Celular",
    price: 1500
};

const inputType = {
    type: "c",
    name: "Celular",
    price: 1500
};

describe("Test create product use case", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });

        await sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it ("should create a product", async () => {
        const productRepository = new ProductRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);
    
        const output = await productCreateUseCase.execute(input);
        expect(output).toEqual({
          id: expect.any(String),
          name: input.name,
          price: input.price
        });
      });
    
      it("should throw an error when type of product is not supported", async () => {
        const productRepository = new ProductRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);
    
        await expect(productCreateUseCase.execute(inputType)).rejects.toThrow(
          "Product type not supported"
        );
      });
});