import React, { useState } from "react";
import { Box, TextField, Table, Typography, Button } from "@mui/material";
import CastVote from "./CastVote";
import {useAccount} from "wagmi"
import {solidityKeccak256,solidityPack} from "ethers/lib/utils"

function Vote() {
  const [pollID, setpollID] = useState("");
  const [party, setparty] = useState("");
  const [isClicked,setisClicked]=useState(false);

  return (
    <>
      {isClicked ? (
        <CastVote pollID={pollID} party={party}></CastVote>
      ) : (
        <Box display="flex" justifyContent="center" mt="10%">
          <form>
            <Table>
              <tr>
                <td>
                  <TextField
                    label="Poll Id"
                    placeholder="Enter the poll's ID"
                    onChange={(e) => {
                      setpollID(parseInt(e.target.value));
                    }}
                  ></TextField>
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    label="Party"
                    placeholder="Enter the party name"
                    onChange={(e) => {
                      setparty(e.target.value);
                    }}
                  ></TextField>
                </td>
              </tr>
            </Table>
            <Typography display="flex" justifyContent="center">
              <Button onClick={()=>{setisClicked(true)}}>Proceed</Button>
            </Typography>
          </form>
        </Box>
      )}
    </>
  );
}
export default Vote;
