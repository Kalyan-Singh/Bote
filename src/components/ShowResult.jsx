import React, { useState } from "react";
import { Bote, abi_Bote } from "../new_deployments";
import {
  Backdrop,
  CircularProgress,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { useContractRead } from "wagmi";

function ShowResult({ pollID }) {
  const [parties, setparties] = useState("");
  const [votes, setvotes] = useState("");
  const {
    data: prs,
    isError,
    isLoading,
  } = useContractRead({
    address: Bote,
    abi: abi_Bote,
    functionName: "getParties",
    args: [pollID],
    onSuccess: (data) => {
      console.log(data);
      setparties(data);
    },
  });
  const { data: vts } = useContractRead({
    address: Bote,
    abi: abi_Bote,
    functionName: "getVotes",
    args: [pollID],
    onSuccess: (data) => {
      console.log(data);
      setvotes(data); 
    },
  });
  let i_vts = vts.map((vt) => {
    return parseInt(vt);
  });
  let final = [];
  for (let i = 0; i < i_vts.length; i++) {
    final.push(`${prs[i]} -> ${i_vts[i]}`);
  }
  if(final){
    return (
      <Box mt="15%">
      {final.map((j) => {
          return (
            
            <Typography display='flex' justifyContent='center'> 
            {j}
            </Typography>
          );
        })}
        </Box>
    );
  }
  return (
    <div>
    </div>
  );
}

export default ShowResult;
