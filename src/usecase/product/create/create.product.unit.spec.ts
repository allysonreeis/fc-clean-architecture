import ProductFactory from "../../../domain/product/factory/product.factory";
import CreateProductUseCase  from "./create.product.usecase";
import { v4 as uuid } from "uuid";

const input = {
  id: "1",
  name: "Celular",
  price: 1500
};
  

const MockRepository = () => {
    return {
        find: jest.fn(),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    };
};

describe("Unit test create product use case", ()=>{
  it ("should create a product", async () => {
    const productRepository = MockRepository();
    const productCreateUseCase = new CreateProductUseCase(productRepository);

    const output = await productCreateUseCase.execute(input);
    expect(output).toEqual({
      id: expect.any(String),
      name: input.name,
      price: input.price
    });
  });
});