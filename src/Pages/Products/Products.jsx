import TitlePage from "../../components/TitlePage";
import ProductTable from "./ProductTable";

const Products = () => {
  return (
    <>
      <div>
        <TitlePage title="Products" />
        <div className="flex justify-between items-center mt-5 my-2">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-white input input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn btn-outline btn-accent">Add New</button>
        </div>
        <ProductTable />
      </div>
    </>
  );
};

export default Products;
