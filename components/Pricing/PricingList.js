function PricingList({ pricing }) {
    function mapPricingToItems(pricing){
      return pricing.map(pricing=>({
        header: pricing.name,
        description: pricing.description,
        price: `$${pricing.price}`,
        childKey: pricing._id,
        href: `/pricing?_id=${pricing._id}`
      }))
    }
  
    return (
        <div>
            {JSON.stiringy(mapPricingToItems(pricing))}
        </div>
    )
  }
  
  export default PricingList;
  