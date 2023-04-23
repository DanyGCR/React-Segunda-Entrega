const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img:'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description:'Descripcion del Iphone 12'
    },
    {id: '2', name: 'Samsung S21', price: 800, category: 'celular', img:'https://samsungar.vtexassets.com/arquivos/ids/184303-800-auto?width=800&height=auto&aspect=true'},
    {id: '3', name: 'Ipad 8va Generacion', price: 1800, category: 'tablet', img:'https://http2.mlstatic.com/D_NQ_NP_639352-MLA46244880639_062021-O.webp'},
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === categoryId))
        }, 500)
    })
}





