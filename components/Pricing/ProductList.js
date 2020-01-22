function ProductList({ products }) {
    function mapProductsToItems(products){
      return products.map(product=>({
        header: product.name,
        description: product.description,
        price: `$${product.price}`,
        childKey: product._id,
        href: `/product?_id=${product._id}`
      }))
    }
  
    return (
        <div>
            {mapProductsToItems(products)}
        </div>
    )
  }
  
  export default ProductList;
  