// export const Bote = "0x21C4691742621D7bA4aa184F94e5ddc9A51Fdb48";
export const Bote= "0xF2486FAdda60375766EeAD3A40925aAa1D928d7d";
export const abi_Bote = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
      {
        indexed: true,
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "PollCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "id", type: "uint256" },
    ],
    name: "PollStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256[]",
        name: "result",
        type: "uint256[]",
      },
    ],
    name: "ResultAnnounced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "confirmation",
        type: "string",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [{ internalType: "uint256", name: "_pollID", type: "uint256" }],
    name: "Announce",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_duration", type: "uint256" },
      { internalType: "string[]", name: "_parties", type: "string[]" },
    ],
    name: "addPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "pollID", type: "uint256" }],
    name: "getParties",
    outputs: [{ internalType: "string[]", name: "", type: "string[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_pollID", type: "uint256" }],
    name: "getState",
    outputs: [{ internalType: "enum Bote.State", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "pollID", type: "uint256" }],
    name: "getVotes",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "myPolls",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "PollID", type: "uint256" },
          { internalType: "address", name: "creator", type: "address" },
          { internalType: "string[]", name: "parties", type: "string[]" },
          { internalType: "uint256[]", name: "votes", type: "uint256[]" },
          { internalType: "enum Bote.State", name: "c_state", type: "uint8" },
          { internalType: "uint256", name: "duration", type: "uint256" },
        ],
        internalType: "struct Bote.Poll[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "polls",
    outputs: [
      { internalType: "uint256", name: "PollID", type: "uint256" },
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "enum Bote.State", name: "c_state", type: "uint8" },
      { internalType: "uint256", name: "duration", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_pollID", type: "uint256" }],
    name: "startPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_pollID", type: "uint256" },
      { internalType: "string", name: "_partyName", type: "string" },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "votedPolls",
    outputs: [
      { internalType: "uint256", name: "PollID", type: "uint256" },
      { internalType: "address", name: "creator", type: "address" },
      { internalType: "enum Bote.State", name: "c_state", type: "uint8" },
      { internalType: "uint256", name: "duration", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
