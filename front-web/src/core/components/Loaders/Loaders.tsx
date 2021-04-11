import ProductDescriptionLoader from "./ProductDescriptionLoader";
import ProductInfoLoader from "./ProductInfoLoader";

const Loaders = () => (
  <div className="loader">
    <ProductInfoLoader />
    <ProductDescriptionLoader />
  </div>
);

export default Loaders;