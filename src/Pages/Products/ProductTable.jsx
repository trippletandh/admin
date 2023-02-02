import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";

const ProductCard = ({ imgUrl, name, category, price }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3 gap-3">
            <div className="mask mask-squircle w-12 h-12">
              <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
            </div>
            <div className="text-[16px]">{name}</div>
          </div>
        </td>
        <td className="text-[16px]">{category}</td>
        <td className="text-[16px]">${price}</td>
        <td>
          <div className="flex items-center justify-center gap-5">
            <button>
              <MdOutlineModeEditOutline />
            </button>
            <button>
              <MdDeleteOutline />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

const ProductData = [
  {
    id: 1,
    imgUrl:
      "https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa2f051a7/30143Alt1x.jpg?sw=600&sh=600&sm=fit&q=70",
    name: "Name",
    category: "Kit",
    price: "120",
  },
  {
    id: 2,
    imgUrl:
      "https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa2f051a7/30143Alt1x.jpg?sw=600&sh=600&sm=fit&q=70",
    name: "Name",
    category: "Kit",
    price: "120",
  },
  {
    id: 3,
    imgUrl:
      "https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa2f051a7/30143Alt1x.jpg?sw=600&sh=600&sm=fit&q=70",
    name: "Name",
    category: "Kit",
    price: "120",
  },
  {
    id: 4,
    imgUrl:
      "https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa2f051a7/30143Alt1x.jpg?sw=600&sh=600&sm=fit&q=70",
    name: "Name",
    category: "Kit",
    price: "120",
  },
  {
    id: 5,
    imgUrl:
      "https://www.buildabear.co.uk/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dwa2f051a7/30143Alt1x.jpg?sw=600&sh=600&sm=fit&q=70",
    name: "Name",
    category: "Kit",
    price: "120",
  },
];

const ProductTable = () => {
  return (
    <>
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full text-center">
          <thead className="text-[#9FA2B4]">
            <tr>
              <th className="text-left font-normal text-lg">Name</th>
              <th className="font-normal text-lg">Category</th>
              <th className="font-normal text-lg ">Price</th>
              <th className="font-normal text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {ProductData.map((item) => (
              <ProductCard
                key={item.id}
                imgUrl={item.imgUrl}
                name={item.name}
                category={item.category}
                price={item.price}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
