import React, { useState } from "react";
import { Box, Table, TextField, Button, Typography } from "@mui/material";
import ShowResult from "./ShowResult";

function Announce() {
  const[pollID,setpollID]=useState("");
  const [results, setresults] = useState("");
  const [isClicked, setisClicked] = useState("");
  return (
    <>
      {isClicked ? (
        <ShowResult pollID={pollID}></ShowResult>
      ) : (
        <Box display="flex" justifyContent="center" mt="15%">
          <form
            onSubmit={() => {
              setisClicked(true);
            }}
          >
            <Table>
              <tr>
                <td>
                  <TextField
                    label="Poll Id"
                    placeholder="Enter the poll ID"
                    onChange={(e)=>{
                      setpollID(parseInt(e.target.value))
                    }}
                  ></TextField>
                </td>
              </tr>
            </Table>
            <Typography display="flex" justifyContent="center">
              <Button type="Submit">Show</Button>
            </Typography>
          </form>
        </Box>
      )}
    </>
  );
}

export default Announce;
