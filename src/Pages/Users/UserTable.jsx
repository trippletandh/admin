import { MdDeleteOutline } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";

const UserData = [
  {
    id: 1,
    avatar:
      "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    username: "John Abc",
    email: "nguyenvanA@gmail.com",
  },
  {
    id: 2,
    avatar:
      "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg",
    username: "John Abc",
    email: "nguyenvanA@gmail.com",
  },
  {
    id: 3,
    avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
    username: "John Abc",
    email: "nguyenvanA@gmail.com",
  },
  {
    id: 4,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYBgyXHHUdB79OtY_ROuuTtjSaqTib4m5QFe48o6BwCUKltKBanwIQ0R96ZI5teTp7KxY&usqp=CAU",
    username: "John Abc",
    email: "nguyenvanA@gmail.com",
  },
  {
    id: 5,
    avatar:
      "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png",
    username: "John Abc",
    email: "nguyenvanA@gmail.com",
  },
];

const UserTable = ({ users }) => {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          <thead className="text-[#9FA2B4]">
            <tr>
              <th className="text-left font-normal text-lg">Avatar</th>
              <th className="font-normal text-lg">UserName</th>
              <th className="font-normal text-lg ">Email</th>
              <th className="font-normal text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="flex items-center space-x-3 gap-3">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.avatar}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
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
