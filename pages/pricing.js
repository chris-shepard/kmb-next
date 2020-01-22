import Bar from "../components/Shared/Bar";
import ProductList from "../components/Pricing/ProductList";
import baseUrl from "../utils/baseUrl";
import axios from "axios";

function Pricing() {
  return (
    <div className="page">
      <h3>KMB proudly offers a price match guarantee on all of our offered services.</h3>
      <div><button>Request a Free Quote</button></div>
      <Bar></Bar>
      <h2>Specials!</h2>
    </div>
  );
}

/*
Pricing.getInitialProps = async () => {
  //fetch data on server
  //return response data as object
  const url = `${baseUrl}/api/products`;
  const response = await axios.get(url);
  return {products: response.data};
  // note: this object will be merged with existing props
}
*/
export default Pricing;