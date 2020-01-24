function Home() {
  return (<><div className="flex-col">
  <div className="head1">
    <div className="content">
      <div className="flex-col ">
        <h1 className="animated fadeIn">KMB Property Solutions</h1>
        <span className="animated fadeIn">Turning great properties into dream properties since '08.</span>
        <div>
          <button className="warn">Get a free quote.</button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container animated slideInRight">
  <div className="flex ">
    <div className="">
      <img src="../static/assets/shea2.jpg" alt="Owner, Shea, and Family." className="img"/>
    </div>
    <div className="content order-0">

      <h2>Our Roots</h2>

      <p>Since our inception in 2018, KMB set out to help Upstate New York (Rochester and surrounding areas) enhance
        local real estate conditions. Based on our client's needs and interest, we have found success in fulfilling our
        client's vision for their exterior property improvements, with landscaping and hardscaping surfaces.
      </p>
      <img src="../static/assets/kmb-logo.PNG" className="img-logo-small" alt="KMB's logo"/>
      <p>
        Owner, Shea DeLola, founded the company based on the concept of turning our client's current properties into
        their dream properties, and helping them turn their landscape dreams into a reality.
      </p>

      <h5>WHY KMB?</h5>
      <p>
        KMB are the corresponding initials to each of founder's family members. Owner, Shea DeLola, believes treating
        every property as his own will lead to a lifetime full of satisfied customers. At KMB, each client's experience
        is extremely important and instrumental to our role in this community.
      </p>
    </div>
  </div>
</div>
<div className="container">
  <div className="flex-col ">

    <div className="content order-0">

      <h2>How it all began...</h2>

      <p>At age 15, what started as a handyman service helping all the neighbors with weeding, edging, mulching, and
        general upkeep of their properties then launched to extended services of deck staining, gutter cleaning,
        interior painting, and stable cleaning (Yes, that's not a joke).</p>
      <p> Fast forward 10 years and KMB now services properties from Rochester all the way to Keuka Lake. </p>
    </div>
    <div>
      <div className="foot">
        <span>&copy; 2020 KMB Property Solutions </span>
      </div>
    </div>
  </div>
</div>
  </>);
}

export default Home;
