class ProductManager {
    constructor(products) {
        this.products = []
        this.addProducts()
        this.getProducts()
    }

    getProducts = () => this.products
    addProducts = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (this.products.length === 0) {
            product.id = 1
        } else {
            product.id = this.products[this.products.length - 1].id + 1
        }

        if (this.products.length === 0) {
            console.log("No se encuentran productos")
        }

        this.products.push(product)
        console.log(this.products)
    }
    findPro
}

const productManager = new ProductManager()
ProductManager.addProducts('Test product', 'Este es un producto de prueba', 1500, 'Sin imagen', 'abc001', 25)
ProductManager.addProducts('Test product 2', 'Este es un producto de prueba nuevamente', 2000, 'Sin imagen', 'abc002', 10)
