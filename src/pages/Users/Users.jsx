import "./User.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UserTable from "./UserTable";

const Users = () => {
  return (
    <>
      {/* Container */}
      <div className="user-container">
        {/* Layout */}
        <div className="user-layout">
          <div className="top-section">
            <p>Users</p>
          </div>
          <div className="user-section">
            <div className="user-search">
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
          <UserTable />
        </div>
      </div>
    </>
  );
};

export default Users;
