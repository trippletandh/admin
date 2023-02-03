import { MdDeleteOutline } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";

const UserTable = ({ users }) => {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          <thead className="text-[#9FA2B4]">
            <tr>
              <th className="text-left font-normal text-lg">Name</th>
              <th className="font-normal text-lg">UserName</th>
              <th className="font-normal text-lg ">Email</th>
              <th className="font-normal text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="flex items-center space-x-3 gap-3">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                    <div className="text-[16px]">{item.name}</div>
                  </div>
                </td>
                <td className="text-[16px]">{item.username}</td>
                <td className="text-[16px]">{item.email}</td>
                <td>
                  <div className="flex items-center justify-center gap-5">
                    <p>
                      <BsFillCircleFill className="text-green-400 " />
                    </p>
                    <button>
                      <MdDeleteOutline />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
