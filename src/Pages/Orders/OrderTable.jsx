const OrderTable = ({ orders }) => {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          <thead className="text-[#9FA2B4]">
            <tr>
              <th className="text-left font-normal text-lg">OrderId</th>
              <th className="font-normal text-lg">Amount</th>
              <th className="font-normal text-lg ">UserId</th>
              <th className="font-normal text-lg">Status</th>
              <th className="font-normal text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center space-x-3 gap-3">
                    <div className="text-[16px]">{item.transaction_id}</div>
                  </div>
                </td>
                <td className="text-[16px]">${item.amount}</td>
                <td className="text-[16px]">{item.userId}</td>
                <td>
                  <select className="select select-bordered max-w-xs">
                    <option disabled selected>
                      Not processed
                    </option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs text-[16px]">
                    details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
