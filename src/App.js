import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="pdp-price-info">
        <h1 className="pdp-title"> HRX by Hrithik Roshan</h1>
        <h1 className="pdp-name" style={{ fontWeight: "0.3", color: "grey" }}>
          Men Teal Blue Printed T-shirt
        </h1>
      </div>
      <div className="index-overallRatingContainer">
        <div className="index-overallRating ">
          <div className="rating-number">4.3</div>
          <span class="myntraweb-sprite index-starIcon index-productRatingsExcellentIcon sprites-productRatingsExcellentIcon"></span>
          <div class="index-separator">|</div>
          <div class="index-ratingsCount">29.6k Ratings</div>
        </div>
      </div>
      <div class="price-box">
        <div className="price"> Rs. 699</div>
        <div className="tax-tag"> inclusive of all taxes </div>
      </div>
    </div>
  );
}
