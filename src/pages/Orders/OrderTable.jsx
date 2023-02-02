import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircleIcon from "@mui/icons-material/Circle";

function createData(name, price, payment, status) {
  return { name, price, payment, status };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "$60",
    "Credit Card",
    <CircleIcon color="success" />
  ),
  createData(
    "Ice cream",
    "$150",
    "Credit Card",
    <CircleIcon color="success" />
  ),
  createData("Eclair", "$2000", "Credit Card", <CircleIcon color="success" />),
  createData("Cupcake", "$250", "Credit Card", <CircleIcon color="success" />),
  createData(
    "Gingerbread",
    "$120",
    "Credit Card",
    <CircleIcon color="success" />
  ),
];

const OrderTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Payment</TableCell>
              <TableCell align="center">Status</TableCell>
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
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.payment}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OrderTable;
