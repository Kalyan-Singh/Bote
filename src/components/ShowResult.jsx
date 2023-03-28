import React, { useEffect, useState } from "react";
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
  const [final,setFinal]= useState([]);
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

  useEffect(() => {
    if (vts && prs) {
      let i_vts = vts.map((vt) => {
        return parseInt(vt);
      });
      let final2=[];
      for (let i = 0; i < i_vts.length; i++) {
        final2.push(`${prs[i]} -> ${i_vts[i]}`);
      }
      setFinal(final2);
      console.log("Final-",final2);
    }
  }, [vts, prs]);

  if (final.length >0) {
    return (
      <Box mt="15%">
        {final.map((j) => {
          return (
            <Typography display="flex" justifyContent="center">
              {j}
            </Typography>
          );
        })}
      </Box>
    );
  }
  else{
    return <div>Nothing yet</div>;
  }
}

export default ShowResult;
