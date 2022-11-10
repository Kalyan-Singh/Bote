import React, { useState } from "react";
import { useContractRead } from "wagmi";
import { Bote, abi_Bote } from "../new_deployments";
import { useAccount } from "wagmi";
import GetCard from "./GetCard";
import {
  Backdrop,
  CircularProgress,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";

function MyPoll() {
  const { address } = useAccount();
  const [Polls, setPolls] = useState();
  const { data, isError, isLoading } = useContractRead({
    address: Bote,
    abi: abi_Bote,
    functionName: "myPolls",
    overrides: { from: address },
    onSuccess: (data) => {
      console.log(data);
      const polls = data.map((poll) => {
        const i = {
          pollId: parseInt(poll.PollID)-1,
          state: poll.c_state,
          creator: poll.creator,
          duration: parseInt(poll.duration),
          parties: poll.parties,
          votes: poll.votes,
        };
        console.log(i)
        return i;
      });
      console.log(polls);
      setPolls(polls)
    },
  });
  if (isLoading) {
    return (
      <Backdrop
        open={true}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit"></CircularProgress>
      </Backdrop>
    ); 
  }
  return (
    <Stack direction='row' spacing="15px">
      {
        Polls ? (
          Polls.map((poll)=>{
          return (
            <GetCard pollId={poll.pollId} state={poll.state}>
            </GetCard>
          )
        })
        ) :(
          <></>
        )
        
      }
    </Stack>
  );
}

export default MyPoll;
