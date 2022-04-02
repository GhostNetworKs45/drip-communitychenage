export const reservoirAddress = "0xcbb0a40219380E5a409e84BBa3FCAACA991e9191";
export const reservoirAbi = [
  {
    constant: true,
    inputs: [
      {
        name: "_customerAddress",
        type: "address",
      },
    ],
    name: "dividendsOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lockedTokenBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_customerAddress",
        type: "address",
      },
    ],
    name: "statsOf",
    outputs: [
      {
        name: "",
        type: "uint256[15]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "myDividends",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dividendBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "sweep",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdraw",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalTokenBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalClaims",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateTaxedBnbToTokenLiquidity",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateTaxedLiquidityToBnb",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "collateralAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalWithdrawn",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalTxs",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "calculateLiquidityToBnb",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_customerAddress",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "distributionInterval",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalDeposits",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "swapAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "myTokens",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_customerAddress",
        type: "address",
      },
    ],
    name: "dailyEstimateBnb",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "buy",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lastPayout",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "collateralBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_customerAddress",
        type: "address",
      },
    ],
    name: "bnbBalance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "players",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_amountOfTokens",
        type: "uint256",
      },
    ],
    name: "sell",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_customerAddress",
        type: "address",
      },
    ],
    name: "dailyEstimate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "balanceInterval",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "reinvest",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "_swapAddress",
        type: "address",
      },
      {
        name: "_collateralAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "customerAddress",
        type: "address",
      },
      {
        indexed: false,
        name: "invested",
        type: "uint256",
      },
      {
        indexed: false,
        name: "tokens",
        type: "uint256",
      },
      {
        indexed: false,
        name: "soldTokens",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "onLeaderBoard",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "customerAddress",
        type: "address",
      },
      {
        indexed: false,
        name: "incomingeth",
        type: "uint256",
      },
      {
        indexed: false,
        name: "tokensMinted",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "onTokenPurchase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "customerAddress",
        type: "address",
      },
      {
        indexed: false,
        name: "tokensBurned",
        type: "uint256",
      },
      {
        indexed: false,
        name: "ethEarned",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "onTokenSell",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "customerAddress",
        type: "address",
      },
      {
        indexed: false,
        name: "ethReinvested",
        type: "uint256",
      },
      {
        indexed: false,
        name: "tokensMinted",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "onReinvestment",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "customerAddress",
        type: "address",
      },
      {
        indexed: false,
        name: "ethWithdrawn",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "onWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "customerAddress",
        type: "address",
      },
      {
        indexed: false,
        name: "tokens",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "onClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "tokens",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "onTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "bnbBalance",
        type: "uint256",
      },
      {
        indexed: false,
        name: "tokenBalance",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "onBalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "onLiquiditySweep",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "onLiquidityProviderReward",
    type: "event",
  },
];
