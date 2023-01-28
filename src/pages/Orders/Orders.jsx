import "./Orders.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OrderTable from "./OrderTable";

const Orders = () => {
  return (
    <>
      {/* Container */}
      <div className="order-container">
        {/* Layout */}
        <div className="order-layout">
          <div className="top-section">
            <p>Orders</p>
          </div>
          <div className="order-section">
            <div className="product-search">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                />
              </Box>
            </div>
            <div className="btn-add">
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success">
                  Add New
                </Button>
              </Stack>
            </div>
          </div>
          {/* Table */}
          <OrderTable />
        </div>
      </div>
    </>
  );
};

export default Orders;
