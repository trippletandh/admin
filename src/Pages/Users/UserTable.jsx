import { MdDeleteOutline } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";

const UsersCard = ({ name, phone, email }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3 gap-3">
            <div className="text-[16px]">{name}</div>
          </div>
        </td>
        <td className="text-[16px]">{phone}</td>
        <td className="text-[16px]">{email}</td>
        <td>
          <div className="flex items-center justify-center gap-5">
            <button>
              <BsFillCircleFill className="text-green-400" />
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

const UsersData = [
  {
    id: 1,
    name: "Name",
    phone: "09999999",
    email: "nguyenvanA@gmail.com",
  },
  {
    id: 2,
    name: "Name",
    phone: "09999999",
    email: "nguyenvanA@gmail.com",
  },
  {
    id: 3,
    name: "Name",
    phone: "09999999",
    email: "nguyenvanA@gmail.com",
  },
  {
    id: 4,
    name: "Name",
    phone: "09999999",
    email: "nguyenvanA@gmail.com",
  },
  {
    id: 5,
    name: "Name",
    phone: "09999999",
    email: "nguyenvanA@gmail.com",
  },
];

const UserTable = () => {
  return (
    <>
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full text-center">
          <thead className="text-[#9FA2B4]">
            <tr>
              <th className="text-left font-normal text-lg">Name</th>
              <th className="font-normal text-lg">Phone</th>
              <th className="font-normal text-lg ">Email</th>
              <th className="font-normal text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {UsersData.map((item) => (
              <UsersCard
                key={item.id}
                name={item.name}
                phone={item.phone}
                email={item.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserTable;
