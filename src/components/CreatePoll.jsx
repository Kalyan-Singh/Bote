import { Table, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
  Backdrop,
  CircularProgress,
  Typography,
  Button,
  Box,
} from "@mui/material";
import ConfirmPoll from "./ConfirmPoll";

function CreatePoll() {
  const [parties, setparties] = useState();
  const [duration, setduration] = useState();
  const [isClicked, setisClicked] = useState(false);

  function handleParty(e) {
    let Parties = e.target.value.split(" ");
    console.log(Parties);
    setparties(Parties);
  }
  if (isClicked) {
    return <ConfirmPoll duration={duration} parties={parties}></ConfirmPoll>;
  }

  return (
    <Box display="flex" justifyContent="center" mt="15%">
      <form>
        <Table>
          <tr>
            <td>
              <TextField
                label="Duration"
                placeholder="Enter duration in Minutes"
                onChange={(e) => {
                  setduration(parseInt(e.target.value));
                }}
              ></TextField>
            </td>
          </tr>
          <tr>
            <td>
              <TextField
                label="Parties"
                placeholder="Space Seprated"
                onChange={handleParty}
              ></TextField>
            </td>
          </tr>
        </Table>
        <Typography display="flex" justifyContent="center">
          <Button
            onClick={() => {
              setisClicked(true);
            }}
          >
            Create
          </Button>
        </Typography>
      </form>
    </Box>
  );
}

export default CreatePoll;
