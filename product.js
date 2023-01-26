class ProductManager {
    constructor(products) {
        this.products = []
        this.addProducts()
        this.getProducts()
        // this.deleteProducts()
        // this.getProductbyId()
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
    deleteProducts = () => {

        if (this.products.length > 0) {
            delete (this.products[0, 1, 2, 3, 4])
            console.log("Producto eliminado exitosamente!")
            console.log(this.products)
        } else {
            console.log("No existen elementos para eliminar")
        }
    }
    getProductbyId = (product) => {
        return product.find(element => product.id === 1) ?? -1;
    }
}

const productManager = new ProductManager()

productManager.addProducts('Test product', 'Este es un producto de prueba', 1500, 'Sin imagen', 'abc001', 25)

productManager.addProducts('Test product 2', 'Este es un producto de prueba nuevamente', 2000, 'Sin imagen', 'abc002', 10)

// productManager.deleteProducts()



