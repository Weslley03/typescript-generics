import { ProductRepository } from "./repositories/ProductRepository";
import { UserRepository } from "./repositories/UserRepository";

const userRepository = new UserRepository();
const productRepository = new ProductRepository();

const user1 = userRepository.create({ name: 'weslley', email: 'weslley@hotmail.com' });
const product1 = productRepository.create({ name: 'notbook gamer', price: 8000 });
const product2 = productRepository.create({ name: 'mouse gamer', price: 1000 });
const product3 = productRepository.create({ name: 'monitor gamer', price: 4000 });

console.log(`all products: `, productRepository.findAll());
console.log(`findUserById: `,userRepository.finOne(user1.id));

userRepository.update(user1.id, { name: 'weslleyDEV', email: 'contato@weslleydev.com' });
console.log(`all users: `, userRepository.findAll());

productRepository.delete(product2.id);
productRepository.delete(product3.id);
productRepository.update(product1.id, { price: 2000 });
console.log(`all products: `, productRepository.findAll());

