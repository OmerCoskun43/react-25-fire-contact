import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { DeleteUser, useFetch } from "../../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = ({ EditUser }) => {
  console.log(useFetch());
  const { isLoading, contactList } = useFetch();
  // console.log(contactList);

  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : contactList?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No Result Found 😪
                </TableCell>
              </TableRow>
            ) : (
              contactList?.map((item, index) => (
                <TableRow>
                  <TableCell cursor align="center">
                    {item.username}
                  </TableCell>
                  <TableCell align="center">{item.phoneNumber}</TableCell>
                  <TableCell align="center">{item.gender}</TableCell>
                  <TableCell onClick={() => DeleteUser(item.id)} align="center">
                    <DeleteIcon />
                  </TableCell>
                  <TableCell align="center">
                    <EditIcon
                      onClick={() =>
                        EditUser(
                          item.id,
                          item.username,
                          item.phoneNumber,
                          item.gender
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
