import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircleIcon from "@mui/icons-material/Circle";

function createData(name, phone, email, action) {
  return { name, phone, email, action };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "09999999",
    "nguyenvanA@gmail.com",
    <CircleIcon color="success" />
  ),
  createData(
    "Ice cream ",
    "09999999",
    "nguyenvanA@gmail.com",
    <CircleIcon color="success" />
  ),
  createData(
    "Eclair",
    "09999999",
    "nguyenvanA@gmail.com",
    <CircleIcon color="success" />
  ),
  createData(
    "Cupcake",
    "09999999",
    "nguyenvanA@gmail.com",
    <CircleIcon color="success" />
  ),
  createData(
    "Gingerbread",
    "09999999",
    "nguyenvanA@gmail.com",
    <CircleIcon color="success" />
  ),
];

const UserTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserTable;
