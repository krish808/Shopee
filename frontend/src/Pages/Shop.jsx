import Hero from "../Compontents/Hero/Hero";
import NewCollections from "../Compontents/NewCollections/NewCollections";
import NewsLetter from "../Compontents/NewsLetter/NewsLetter";
import Offers from "../Compontents/Offers/Offers";
import Popular from "../Compontents/Popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
