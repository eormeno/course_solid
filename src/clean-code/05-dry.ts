
type Size = '' | 'S' | 'L' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) { }

    toString() {
        if (this.name.length == 0) throw Error('name is empty')
        if (this.price <= 0) throw Error('price invalid')
        if (this.size.length <= 0) throw Error('size is empty')

        return `${this.name} $${this.price} ${this.size}`
    }
}

(() => {
    const bluPants = new Product('Pantalón azul', 10.3, 'XL');
    console.log(bluPants.toString())
})()
