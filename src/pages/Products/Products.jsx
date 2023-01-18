import "./Products.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Products = () => {
  return (
    <>
      {/* Container */}
      <div className="product-container">
        {/* Layout */}
        <div className="product-layout">
          <div className="top-section">
            <p>Products</p>
          </div>
          <div className="product-section">
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
        </div>
      </div>
    </>
  );
};

export default Products;
