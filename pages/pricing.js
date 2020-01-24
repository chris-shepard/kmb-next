import Bar from "../components/Shared/Bar";
import React from 'react';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import PricingList from "../components/Pricing/PricingList";


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

Pricing.getInitialProps = async () => {
  //fetch data on server
  //return response data as object
  const url = `${baseUrl}/api/pricing`;
  const response = await axios.get(url);
  console.log(repsonse.data)
  return {pricing: response.data};
  
  // note: this object will be merged with existing props
}
export default Pricing;