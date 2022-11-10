import React, { useState } from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { Backdrop, CircularProgress, Typography, Button, Box } from "@mui/material";
import { Bote, abi_Bote } from "../new_deployments";
import { defaultAbiCoder as abi } from "ethers/lib/utils";

function CastVote({ pollID, party }) {

  const [loading, setloading] = useState(false);
  const { address } = useAccount();
  const { config } = usePrepareContractWrite({
    address: Bote,
    abi: abi_Bote,
    functionName: 'vote',
    args:[pollID,party]
  });
  const {writeAsync,isLoading,isSuccess}=useContractWrite(config);
  if(isLoading){
    <Backdrop
          open={true}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit"></CircularProgress>
        </Backdrop>
  }
  if(isSuccess){
    <Typography variant='h5' justifyContent="center" display="flex" mt="15%">
    Your Vote has been casted
    </Typography>
  }
  return (
    <>
      {loading ? (
        <Backdrop
          open={true}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit"></CircularProgress>
        </Backdrop>
      ) : (
        <Box>
        <Typography display="flex" justifyContent="center" mt="15%">
        You are casting a vote for {party} in poll {pollID}
        </Typography>
        <Typography display="flex" justifyContent="center" mt="40px">
          <Button onClick={writeAsync}>Cast</Button>
        </Typography>
        </Box>
      )}
    </>
  );
}

export default CastVote;
