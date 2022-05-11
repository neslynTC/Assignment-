import { Product } from '../shared/product.model';
import { CartService } from './cart.service';
describe("cart service", () =>{
    let product = new Product(1, "https://assets.tendercuts.in/product/C/H/0b2422c9-12d1-4c13-bd96-9948ad114c97.webp", "Chicken Curry Cut", "18 - 20 Pieces", "480 - 500 Gms", 229, 1)
    let cartservice = new CartService()
    it("onAddItem", ()=>{
        cartservice.addItemToCart(product)
        let result = (cartservice.cartItems[product.id]) ? true : false
        expect(result).toBe(true)
    })
    it("onRemoveItem", () => {
        cartservice.removeItemFromCart(product)
        let result = (cartservice.cartItems[product.id]) ? true : false
        expect(result).toBe(true)
    })
    it("onRemoveItem", () => {
        let product = new Product(1, "https://assets.tendercuts.in/product/C/H/0b2422c9-12d1-4c13-bd96-9948ad114c97.webp", "Chicken Curry Cut", "18 - 20 Pieces", "480 - 500 Gms", 229, 0)
        cartservice.removeItemFromCart(product)
        let result = (cartservice.cartItems[product.id]) ? true : false
        expect(result).toBe(false)
    })
})