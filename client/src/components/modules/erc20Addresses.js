const erc20Addresses = [
  // {
//   "token": "Tether USD",
//   "code": "USDT",
//   "contract_address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
// }, {
//   "token": "BNB",
//   "code": "BNB",
//   "contract_address": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
// }, {
//   "token": "USD Coin",
//   "code": "USDC",
//   "contract_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
// }, {
//   "token": "HEX",
//   "code": "HEX",
//   "contract_address": "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
// }, {
//   "token": "Binance USD",
//   "code": "BUSD",
//   "contract_address": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
// }, {
//   "token": "SHIBA INU",
//   "code": "SHIB",
//   "contract_address": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
// }, {
//   "token": "Wrapped UST Token",
//   "code": "UST",
//   "contract_address": "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
// }, {
//   "token": "Matic Token",
//   "code": "MATIC",
//   "contract_address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
// }, {
//   "token": "Wrapped BTC",
//   "code": "WBTC",
//   "contract_address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
// }, {
//   "token": "Crypto.com Coin",
//   "code": "CRO",
//   "contract_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
// }, {
//   "token": "Dai Stablecoin",
//   "code": "DAI",
//   "contract_address": "0x6b175474e89094c44da98b954eedeac495271d0f",
// }, {
//   "token": "ChainLink Token",
//   "code": "LINK",
//   "contract_address": "0x514910771af9ca656af840dff83e8264ecf986ca",
// }, {
//   "token": "Fantom Token",
//   "code": "FTM",
//   "contract_address": "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
// }, {
//   "token": "OKB",
//   "code": "OKB",
//   "contract_address": "0x75231f58b43240c9718dd58b4967c5114342a86c",
// }, {
//   "token": "TRON",
//   "code": "TRX",
//   "contract_address": "0xe1be5d3f34e89de342ee97e6e90d405884da6c67",
// }, {
//   "token": "Theta Token",
//   "code": "THETA",
//   "contract_address": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
// }, {
//   "token": "Uniswap",
//   "code": "UNI",
//   "contract_address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
// }, {
//   "token": "Magic Internet Money",
//   "code": "MIM",
//   "contract_address": "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3",
// }, {
//   "token": "stETH",
//   "code": "stETH",
//   "contract_address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
// }, {
//   "token": "Wrapped liquid staked Ether 2.0",
//   "code": "wstETH",
//   "contract_address": "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
// }, {
//   "token": "Bitfinex LEO Token",
//   "code": "LEO",
//   "contract_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
// }, {
//   "token": "VeChain",
//   "code": "VEN",
//   "contract_address": "0xd850942ef8811f2a866692a623011bde52a462c1",
// }, {
//   "token": "Compound Ether",
//   "code": "cETH",
//   "contract_address": "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
// }, {
//   "token": "Compound Dai",
//   "code": "cDAI",
//   "contract_address": "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
// }, {
//   "token": "Wrapped Filecoin",
//   "code": "WFIL",
//   "contract_address": "0x6e1A19F235bE7ED8E3369eF73b196C07257494DE",
// }, {
//   "token": "SAND",
//   "code": "SAND",
//   "contract_address": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
// }, {
//   "token": "Frax",
//   "code": "FRAX",
//   "contract_address": "0x853d955acef822db058eb8505911ed77f175b99e",
// }, {
//   "token": "Decentraland",
//   "code": "MANA",
//   "contract_address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
// }, {
//   "token": "Wrapped Decentraland MANA",
//   "code": "wMANA",
//   "contract_address": "0xfd09cf7cfffa9932e33668311c4777cb9db3c9be",
// }, {
//   "token": "BitTorrent",
//   "code": "BTT",
//   "contract_address": "0xe83cccfabd4ed148903bf36d4283ee7c8b3494d1",
// }, {
//   "token": "Compound USD Coin",
//   "code": "cUSDC",
//   "contract_address": "0x39aa39c021dfbae8fac545936693ac917d5e7563",
// }, {
//   "token": "HarmonyOne",
//   "code": "ONE",
//   "contract_address": "0x799a4202c12ca952cb311598a024c80ed371a41e",
// }, {
//   "token": "Graph Token",
//   "code": "GRT",
//   "contract_address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
// }, {
//   "token": "Aave Token",
//   "code": "AAVE",
//   "contract_address": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
// }, {
//   "token": "Maker",
//   "code": "MKR",
//   "contract_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
// }, {
//   "token": "Huobi BTC",
//   "code": "HBTC",
//   "contract_address": "0x0316EB71485b0Ab14103307bf65a021042c6d380",
// }, {
//   "token": "TrueUSD",
//   "code": "TUSD",
//   "contract_address": "0x0000000000085d4780B73119b644AE5ecd22b376",
// }, {
//   "token": "HuobiToken",
//   "code": "HT",
//   "contract_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
// }, {
//   "token": "Gala",
//   "code": "GALA",
//   "contract_address": "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
// }, {
//   "token": "EnjinCoin",
//   "code": "ENJ",
//   "contract_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
// }, {
//   "token": "Quant",
//   "code": "QNT",
//   "contract_address": "0x4a220e6096b25eadb88358cb44068a3248254675",
// }, {
//   "token": "Amp",
//   "code": "AMP",
//   "contract_address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
// }, {
//   "token": "KuCoin Token",
//   "code": "KCS",
//   "contract_address": "0xf34960d9d60be18cc1d5afc1a6f012a723a28811",
// }, {
//   "token": "Wrapped Celo",
//   "code": "wCELO",
//   "contract_address": "0xe452e6ea2ddeb012e20db73bf5d3863a3ac8d77a",
// }, {
//   "token": "BAT",
//   "code": "BAT",
//   "contract_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
// }, {
//   "token": "Aave interest bearing CRV",
//   "code": "aCRV",
//   "contract_address": "0x8dae6cb04688c62d939ed9b68d32bc62e49970b1",
// }, {
//   "token": "Curve DAO Token",
//   "code": "CRV",
//   "contract_address": "0xD533a949740bb3306d119CC777fa900bA034cd52",
// }, {
//   "token": "LoopringCoin V2",
//   "code": "LRC",
//   "contract_address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
// }, {
//   "token": "Pax Dollar",
//   "code": "USDP",
//   "contract_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
// }, {
//   "token": "Nexo",
//   "code": "NEXO",
//   "contract_address": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
// }, {
//   "token": "Celsius",
//   "code": "CEL",
//   "contract_address": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
// }, {
//   "token": "chiliZ",
//   "code": "CHZ",
//   "contract_address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
// }, {
//   "token": "yearn.finance",
//   "code": "YFI",
//   "contract_address": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
// }, {
//   "token": "SushiToken",
//   "code": "SUSHI",
//   "contract_address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
// }, {
//   "token": "Synthetix Network Token",
//   "code": "SNX",
//   "contract_address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
// }, {
//   "token": "HoloToken",
//   "code": "HOT",
//   "contract_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
// }, {
//   "token": "Compound",
//   "code": "COMP",
//   "contract_address": "0xc00e94cb662c3520282e6f5717214004a7f26888",
// }, {
//   "token": "Compound USDT",
//   "code": "cUSDT",
//   "contract_address": "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
// }, {
//   "token": "XinFin XDCE",
//   "code": "XDCE",
//   "contract_address": "0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2",
// }, {
//   "token": "1INCH Token",
//   "code": "1INCH",
//   "contract_address": "0x111111111117dc0aa78b770fa6a738034120c302",
// }, {
//   "token": "IoTeX Network",
//   "code": "IOTX",
//   "contract_address": "0x6fb3e0a217407efff7ca062d46c26e5d60a14d69",
// }, {
//   "token": "renBTC",
//   "code": "renBTC",
//   "contract_address": "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
// }, {
//   "token": "Frax Share",
//   "code": "FXS",
//   "contract_address": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
// }, {
//   "token": "Spell Token",
//   "code": "SPELL",
//   "contract_address": "0x090185f2135308bad17527004364ebcc2d37e5f6",
// }, {
//   "token": "Olympus",
//   "code": "OHM",
//   "contract_address": "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
// }, {
//   "token": "Livepeer Token",
//   "code": "LPT",
//   "contract_address": "0x58b6a8a3302369daec383334672404ee733ab239",
// }, {
//   "token": "OMG Network",
//   "code": "OMG",
//   "contract_address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
// }, {
//   "token": "Bancor",
//   "code": "BNT",
//   "contract_address": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
// }, {
//   "token": "NXM",
//   "code": "NXM",
//   "contract_address": "0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b",
// }, {
//   "token": "Fei USD",
//   "code": "FEI",
//   "contract_address": "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
// }, {
//   "token": "Wootrade Network",
//   "code": "WOO",
//   "contract_address": "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
// }, {
//   "token": "WQtum",
//   "code": "WQTUM",
//   "contract_address": "0x3103df8f05c4d8af16fd22ae63e406b97fec6938",
// }, {
//   "token": "WAX Token",
//   "code": "WAX",
//   "contract_address": "0x39bb259f66e1c59d5abef88375979b4d20d98022",
// }, {
//   "token": "Zilliqa",
//   "code": "ZIL",
//   "contract_address": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27",
// }, {
//   "token": "SwissBorg",
//   "code": "CHSB",
//   "contract_address": "0xba9d4199fab4f26efe3551d490e3821486f135ba",
// }, {
//   "token": "Gnosis",
//   "code": "GNO",
//   "contract_address": "0x6810e776880c02933d47db1b9fc05908e5386b96",
// }, {
//   "token": "Rocket Pool",
//   "code": "RPL",
//   "contract_address": "0xd33526068d116ce69f19a9ee46f0bd304f21a51f",
// }, {
//   "token": "Rocket Pool",
//   "code": "RPL",
//   "contract_address": "0xb4efd85c19999d84251304bda99e90b92300bd93",
// }, {
//   "token": "ZRX",
//   "code": "ZRX",
//   "contract_address": "0xe41d2489571d322189246dafa5ebde1f4699f498",
// }, {
//   "token": "dYdX",
//   "code": "DYDX",
//   "contract_address": "0x92d6c1e31e14520e676a687f0a93788b716beff5",
// }, {
//   "token": "Tether Gold",
//   "code": "XAUt",
//   "contract_address": "0x68749665ff8d2d112fa859aa293f07a622782f38",
// }, {
//   "token": "Dogelon",
//   "code": "ELON",
//   "contract_address": "0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3",
// }, {
//   "token": "Keep3rV1",
//   "code": "KP3R",
//   "contract_address": "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
// }, {
//   "token": "Telcoin",
//   "code": "TEL",
//   "contract_address": "0x467Bccd9d29f223BcE8043b84E8C8B282827790F",
// }, {
//   "token": "IOSToken",
//   "code": "IOST",
//   "contract_address": "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab",
// }, {
//   "token": "UMA Voting Token v1",
//   "code": "UMA",
//   "contract_address": "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
// }, {
//   "token": "Synapse",
//   "code": "SYN",
//   "contract_address": "0x0f2d719407fdbeff09d87557abb7232601fd9f29",
// }, {
//   "token": "Anyswap",
//   "code": "ANY",
//   "contract_address": "0xf99d58e463a2e07e5692127302c20a191861b4d6",
// }, {
//   "token": "Smooth Love Potion",
//   "code": "SLP",
//   "contract_address": "0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25",
// }, {
//   "token": "Illuvium",
//   "code": "ILV",
//   "contract_address": "0x767fe9edc9e0df98e07454847909b5e959d7ca0e",
// }, {
//   "token": "Paxos Gold",
//   "code": "PAXG",
//   "contract_address": "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
// }, {
//   "token": "Tribe",
//   "code": "TRIBE",
//   "contract_address": "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
// }, {
//   "token": "Render Token",
//   "code": "RNDR",
//   "contract_address": "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
// }, {
//   "token": "Ethereum Name Service",
//   "code": "ENS",
//   "contract_address": "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72",
// }, {
//   "token": "HUSD",
//   "code": "HUSD",
//   "contract_address": "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
// }, {
//   "token": "Polymath",
//   "code": "POLY",
//   "contract_address": "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
// }, {
//   "token": "Golem Network Token",
//   "code": "GLM",
//   "contract_address": "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
// }, {
//   "token": "Chroma",
//   "code": "CHR",
//   "contract_address": "0x8A2279d4A90B6fe1C4B30fa660cC9f926797bAA2",
// }, {
//   "token": "CelerToken",
//   "code": "CELR",
//   "contract_address": "0x4f9254c83eb525f9fcf346490bbb3ed28a81c667",
// }, {
//   "token": "Serum",
//   "code": "SRM",
//   "contract_address": "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
// }, {
//   "token": "Swipe",
//   "code": "SXP",
//   "contract_address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
// }, {
//   "token": "Vader",
//   "code": "VADER",
//   "contract_address": "0x2602278ee1882889b946eb11dc0e810075650983",
// }, {
//   "token": "Reserve Rights",
//   "code": "RSR",
//   "contract_address": "0x320623b8e4ff03373931769a31fc52a4e78b5d70",
// }, {
//   "token": "Mask Network",
//   "code": "MASK",
//   "contract_address": "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
// }, {
//   "token": "DENT",
//   "code": "DENT",
//   "contract_address": "0x3597bfd533a99c9aa083587b074434e61eb0a258",
// }, {
//   "token": "Aurora",
//   "code": "AURORA",
//   "contract_address": "0xaaaaaa20d9e0e2461697782ef11675f668207961",
// }, {
//   "token": "PowerLedger",
//   "code": "POWR",
//   "contract_address": "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
// }, {
//   "token": "Fetch",
//   "code": "FET",
//   "contract_address": "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
// }, {
//   "token": "Dusk Network",
//   "code": "DUSK",
//   "contract_address": "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551",
// }, {
//   "token": "SpookyToken",
//   "code": "BOO",
//   "contract_address": "0x55af5865807b196bd0197e0902746f31fbccfa58",
// }, {
//   "token": "KEEP Token",
//   "code": "KEEP",
//   "contract_address": "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec",
// }, {
//   "token": "XSGD",
//   "code": "XSGD",
//   "contract_address": "0x70e8de73ce538da2beed35d14187f6959a8eca96",
// }, {
//   "token": "Function X",
//   "code": "FX",
//   "contract_address": "0x8c15ef5b4b21951d50e53e4fbda8298ffad25057",
// }, {
//   "token": "MEDX TOKEN",
//   "code": "MEDX",
//   "contract_address": "0xfd1e80508f243e64ce234ea88a5fd2827c71d4b7",
// }, {
//   "token": "Trace",
//   "code": "TRAC",
//   "contract_address": "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
// }, {
//   "token": "Veritaseum",
//   "code": "VERI",
//   "contract_address": "0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374",
// }, {
//   "token": "Aragon Network Token",
//   "code": "ANT",
//   "contract_address": "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
// }, {
//   "token": "CoinEx Token",
//   "code": "CET",
//   "contract_address": "0x081f67afa0ccf8c7b17540767bbe95df2ba8d97f",
// }, {
//   "token": "Pundi X Token",
//   "code": "PUNDIX",
//   "contract_address": "0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38",
// }, {
//   "token": "Injective Token",
//   "code": "INJ",
//   "contract_address": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
// }, {
//   "token": "Bifrost",
//   "code": "BFC",
//   "contract_address": "0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
// }, {
//   "token": "StatusNetwork",
//   "code": "SNT",
//   "contract_address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
// }, {
//   "token": "Request",
//   "code": "REQ",
//   "contract_address": "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
// }, {
//   "token": "Energy Web Token Bridged",
//   "code": "EWTB",
//   "contract_address": "0x178c820f862b14f316509ec36b13123da19a6054",
// }, {
//   "token": "AlphaToken",
//   "code": "ALPHA",
//   "contract_address": "0xa1faa113cbe53436df28ff0aee54275c13b40975",
// }, {
//   "token": "BitMax token",
//   "code": "BTMX",
//   "contract_address": "0xcca0c9c383076649604eE31b20248BC04FdF61cA",
// }, {
//   "token": "Orbs",
//   "code": "ORBS",
//   "contract_address": "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
// }, {
//   "token": "ELF",
//   "code": "ELF",
//   "contract_address": "0xbf2179859fc6d5bee9bf9158632dc51678a4100e",
// }, {
//   "token": "MXCToken",
//   "code": "MXC",
//   "contract_address": "0x5ca381bbfb58f0092df149bd3d243b08b9a8386e",
// }, {
//   "token": "Kyber Network Crystal v2",
//   "code": "KNC",
//   "contract_address": "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
// }, {
//   "token": "Propy",
//   "code": "PRO",
//   "contract_address": "0x226bb599a12c826476e3a771454697ea52e9e220",
// }, {
//   "token": "Token Prometeus Network",
//   "code": "PROM",
//   "contract_address": "0xfc82bb4ba86045af6f327323a46e80412b91b27d",
// }, {
//   "token": "Storj",
//   "code": "STORJ",
//   "contract_address": "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
// }, {
//   "token": "BTRFLY",
//   "code": "BTRFLY",
//   "contract_address": "0xc0d4ceb216b3ba9c3701b291766fdcba977cec3a",
// }, {
//   "token": "Divi Exchange Token",
//   "code": "DIVX",
//   "contract_address": "0x13f11c9905a08ca76e3e853be63d4f0944326c72",
// }, {
//   "token": "DeversiFi Token",
//   "code": "DVF",
//   "contract_address": "0xdddddd4301a082e62e84e43f474f044423921918",
// }, {
//   "token": "Gemini dollar",
//   "code": "GUSD",
//   "contract_address": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
// }, {
//   "token": "BandToken",
//   "code": "BAND",
//   "contract_address": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
// }, {
//   "token": "KyberNetwork",
//   "code": "KNC",
//   "contract_address": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
// }, {
//   "token": "Iron Bank EUR",
//   "code": "ibEUR",
//   "contract_address": "0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27",
// }, {
//   "token": "Reputation",
//   "code": "REPv2",
//   "contract_address": "0x221657776846890989a759ba2973e427dff5c9bb",
// }, {
//   "token": "Orchid",
//   "code": "OXT",
//   "contract_address": "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
// }, {
//   "token": "NKN",
//   "code": "NKN",
//   "contract_address": "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
// }, {
//   "token": "DODO bird",
//   "code": "DODO",
//   "contract_address": "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
// }, {
//   "token": "Lido DAO Token",
//   "code": "LDO",
//   "contract_address": "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
// }, {
//   "token": "UniBright",
//   "code": "UBT",
//   "contract_address": "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e",
// }, {
//   "token": "Balancer",
//   "code": "BAL",
//   "contract_address": "0xba100000625a3754423978a60c9317c58a424e3d",
// }, {
//   "token": "SingularityNET Token",
//   "code": "AGIX",
//   "contract_address": "0x5b7533812759b45c2b44c19e320ba2cd2681b542",
// }, {
//   "token": "Fuse Token",
//   "code": "FUSE",
//   "contract_address": "0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d",
// }, {
//   "token": "OriginToken",
//   "code": "OGN",
//   "contract_address": "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
// }, {
//   "token": "RLC",
//   "code": "RLC",
//   "contract_address": "0x607F4C5BB672230e8672085532f7e901544a7375",
// }, {
//   "token": "Numeraire",
//   "code": "NMR",
//   "contract_address": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
// }, {
//   "token": "StormX",
//   "code": "STMX",
//   "contract_address": "0xbe9375c6a420d2eeb258962efb95551a5b722803",
// }, {
//   "token": "Dawn",
//   "code": "DAWN",
//   "contract_address": "0x580c8520deda0a441522aeae0f9f7a5f29629afa",
// }, {
//   "token": "Ankr Eth2 Reward Bearing Certificate",
//   "code": "aETHc",
//   "contract_address": "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
// }, {
//   "token": "ALICE",
//   "code": "ALICE",
//   "contract_address": "0xac51066d7bec65dc4589368da368b212745d63e8",
// }, {
//   "token": "Decentral Games",
//   "code": "DG",
//   "contract_address": "0x4b520c812e8430659fc9f12f6d0c39026c83588d",
// }, {
//   "token": "STASIS EURS Token",
//   "code": "EURS",
//   "contract_address": "0xdb25f211ab05b1c97d595516f45794528a807ad8",
// }, {
//   "token": "FunFair",
//   "code": "FUN",
//   "contract_address": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
// }, {
//   "token": "Wrapped Celo USD",
//   "code": "wCUSD",
//   "contract_address": "0xad3e3fc59dff318beceaab7d00eb4f68b1ecf195",
// }, {
//   "token": "Crypto20",
//   "code": "C20",
//   "contract_address": "0x26e75307fc0c021472feb8f727839531f112f317",
// }, {
//   "token": "Covalent Query Token",
//   "code": "CQT",
//   "contract_address": "0xd417144312dbf50465b1c641d016962017ef6240",
// }, {
//   "token": "TrueFi",
//   "code": "TRU",
//   "contract_address": "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784",
// }, {
//   "token": "Synth sUSD",
//   "code": "sUSD",
//   "contract_address": "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
// }, {
//   "token": "IceToken",
//   "code": "ICE",
//   "contract_address": "0xf16e81dce15b08f326220742020379b855b87df9",
// }, {
//   "token": "Beta Token",
//   "code": "BETA",
//   "contract_address": "0xbe1a001fe942f96eea22ba08783140b9dcc09d28",
// }, {
//   "token": "Gitcoin",
//   "code": "GTC",
//   "contract_address": "0xde30da39c46104798bb5aa3fe8b9e0e1f348163f",
// }, {
//   "token": "Metal",
//   "code": "MTL",
//   "contract_address": "0xF433089366899D83a9f26A773D59ec7eCF30355e",
// }, {
//   "token": "Proton",
//   "code": "XPR",
//   "contract_address": "0xD7EFB00d12C2c13131FD319336Fdf952525dA2af",
// }, {
//   "token": "Presearch",
//   "code": "PRE",
//   "contract_address": "0xEC213F83defB583af3A000B1c0ada660b1902A0F",
// }, {
//   "token": "Uquid Coin",
//   "code": "UQC",
//   "contract_address": "0x8806926Ab68EB5a7b909DcAf6FdBe5d93271D6e2",
// }, {
//   "token": "Nectar",
//   "code": "NCT",
//   "contract_address": "0x9e46a38f5daabe8683e10793b06749eef7d733d1",
// }, {
//   "token": "STPT",
//   "code": "STPT",
//   "contract_address": "0xde7d85157d9714eadf595045cc12ca4a5f3e2adb",
// }, {
//   "token": "FEGtoken",
//   "code": "FEG",
//   "contract_address": "0x389999216860ab8e0175387a0c90e5c52522c945",
// }, {
//   "token": "QuarkChain Token",
//   "code": "QKC",
//   "contract_address": "0xea26c4ac16d4a5a106820bc8aee85fd0b7b2b664",
// }, {
//   "token": "Decentral Games Governance",
//   "code": "xDG",
//   "contract_address": "0x4f81c790581b240a5c948afd173620ecc8c71c8d",
// }, {
//   "token": "HooToken",
//   "code": "HOO",
//   "contract_address": "0xd241d7b5cb0ef9fc79d9e4eb9e21f5e209f52f7d",
// }, {
//   "token": "Ribbon",
//   "code": "RBN",
//   "contract_address": "0x6123b0049f904d730db3c36a31167d9d4121fa6b",
// }, {
//   "token": "Melon Token",
//   "code": "MLN",
//   "contract_address": "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
// }, {
//   "token": "bZx Protocol Token",
//   "code": "BZRX",
//   "contract_address": "0x56d811088235F11C8920698a204A5010a788f4b3",
// }, {
//   "token": "mStable USD",
//   "code": "mUSD",
//   "contract_address": "0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
// }, {
//   "token": "QANX Token",
//   "code": "QANX",
//   "contract_address": "0xaaa7a10a8ee237ea61e8ac46c50a8db8bcc1baaa",
// }, {
//   "token": "Automata",
//   "code": "ATA",
//   "contract_address": "0xa2120b9e674d3fc3875f415a7df52e382f141225",
// }, {
//   "token": "Sai Stablecoin v1.0",
//   "code": "SAI",
//   "contract_address": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
// }, {
//   "token": "Aurora DAO",
//   "code": "AURA",
//   "contract_address": "0xcdcfc0f66c522fd086a1b725ea3c0eeb9f9e8814",
// }, {
//   "token": "Shyft [ Wrapped ]",
//   "code": "SHFT",
//   "contract_address": "0xb17c88bda07d28b3838e0c1de6a30eafbcf52d85",
// }, {
//   "token": "BetProtocolToken",
//   "code": "BEPRO",
//   "contract_address": "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a",
// }, {
//   "token": "FOX",
//   "code": "FOX",
//   "contract_address": "0xc770eefad204b5180df6a14ee197d99d808ee52d",
// }, {
//   "token": "AIOZ Network",
//   "code": "AIOZ",
//   "contract_address": "0x626e8036deb333b408be468f951bdb42433cbf18",
// }, {
//   "token": "EthLend",
//   "code": "LEND",
//   "contract_address": "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
// }, {
//   "token": "EverRise",
//   "code": "RISE",
//   "contract_address": "0x0cD022ddE27169b20895e0e2B2B8A33B25e63579",
// }, {
//   "token": "Somnium Space Cubes",
//   "code": "CUBE",
//   "contract_address": "0xdf801468a808a32656d2ed2d2d80b72a129739f4",
// }, {
//   "token": "BioPassport Coin",
//   "code": "BIOT",
//   "contract_address": "0xc07A150ECAdF2cc352f5586396e344A6b17625EB",
// }, {
//   "token": "Wrapped NXM",
//   "code": "wNXM",
//   "contract_address": "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
// }, {
//   "token": "Quickswap",
//   "code": "QUICK",
//   "contract_address": "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
// }, {
//   "token": "BitMartToken",
//   "code": "BMC",
//   "contract_address": "0x986EE2B944c42D017F52Af21c4c69B84DBeA35d8",
// }, {
//   "token": "BarnBridge Governance Token",
//   "code": "BOND",
//   "contract_address": "0x0391D2021f89DC339F60Fff84546EA23E337750f",
// }, {
//   "token": "Aergo",
//   "code": "AERGO",
//   "contract_address": "0x91Af0fBB28ABA7E31403Cb457106Ce79397FD4E6",
// }, {
//   "token": "GRID",
//   "code": "GRID",
//   "contract_address": "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
// }, {
//   "token": "Adventure Gold",
//   "code": "AGLD",
//   "contract_address": "0x32353A6C91143bfd6C7d363B546e62a9A2489A20",
// }, {
//   "token": "Route",
//   "code": "ROUTE",
//   "contract_address": "0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4",
// }, {
//   "token": "Kin",
//   "code": "KIN",
//   "contract_address": "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
// }, {
//   "token": "Cortex Coin",
//   "code": "CTXC",
//   "contract_address": "0xea11755ae41d889ceec39a63e6ff75a02bc1c00d",
// }, {
//   "token": "LCX",
//   "code": "LCX",
//   "contract_address": "0x037a54aab062628c9bbae1fdb1583c195585fe41",
// }, {
//   "token": "CarryToken",
//   "code": "CRE",
//   "contract_address": "0x115ec79f1de567ec68b7ae7eda501b406626478e",
// }, {
//   "token": "QASH",
//   "code": "QASH",
//   "contract_address": "0x618e75ac90b12c6049ba3b27f5d5f8651b0037f6",
// }, {
//   "token": "OVR",
//   "code": "OVR",
//   "contract_address": "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697",
// }, {
//   "token": "DIAToken",
//   "code": "DIA",
//   "contract_address": "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
// }, {
//   "token": "Mainframe Token",
//   "code": "MFT",
//   "contract_address": "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
// }, {
//   "token": "Shiden",
//   "code": "SDN",
//   "contract_address": "0x00e856ee945a49bb73436e719d96910cd9d116a4",
// }, {
//   "token": "TORN Token",
//   "code": "TORN",
//   "contract_address": "0x77777feddddffc19ff86db637967013e6c6a116c",
// }, {
//   "token": "Rarible",
//   "code": "RARI",
//   "contract_address": "0xfca59cd816ab1ead66534d82bc21e7515ce441cf",
// }, {
//   "token": "PAID Network",
//   "code": "PAID",
//   "contract_address": "0x1614f18fc94f47967a3fbe5ffcd46d4e7da3d787",
// }, {
//   "token": "Litentry",
//   "code": "LIT",
//   "contract_address": "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
// }, {
//   "token": "NAGA Coin",
//   "code": "NGC",
//   "contract_address": "0x72dd4b6bd852a3aa172be4d6c5a6dbec588cf131",
// }, {
//   "token": "Parsiq Token",
//   "code": "PRQ",
//   "contract_address": "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
// }, {
//   "token": "CocosToken",
//   "code": "COCOS",
//   "contract_address": "0x0c6f5f7d555e7518f6841a79436bd2b1eef03381",
// }, {
//   "token": "RHOC",
//   "code": "RHOC",
//   "contract_address": "0x168296bb09e24a88805cb9c33356536b980d3fc5",
// }, {
//   "token": "Bytom",
//   "code": "BTM",
//   "contract_address": "0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750",
// }, {
//   "token": "Offshift",
//   "code": "XFT",
//   "contract_address": "0xabe580e7ee158da464b51ee1a83ac0289622e6be",
// }, {
//   "token": "Tellor Tributes",
//   "code": "TRB",
//   "contract_address": "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0",
// }, {
//   "token": "Adshares",
//   "code": "ADS",
//   "contract_address": "0xcfcecfe2bd2fed07a9145222e8a7ad9cf1ccd22a",
// }, {
//   "token": "USDK",
//   "code": "USDK",
//   "contract_address": "0x1c48f86ae57291f7686349f12601910bd8d470bb",
// }, {
//   "token": "Ampleforth Governance",
//   "code": "FORTH",
//   "contract_address": "0x77fba179c79de5b7653f68b5039af940ada60ce0",
// }, {
//   "token": "PlatonCoin",
//   "code": "PLTC",
//   "contract_address": "0x429D83Bb0DCB8cdd5311e34680ADC8B12070a07f",
// }, {
//   "token": "CoinDash Token",
//   "code": "CDT",
//   "contract_address": "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
// }, {
//   "token": "MATH Token",
//   "code": "MATH",
//   "contract_address": "0x08d967bb0134f2d07f7cfb6e246680c53927dd30",
// }, {
//   "token": "Refereum",
//   "code": "RFR",
//   "contract_address": "0xd0929d411954c47438dc1d871dd6081f5c5e149c",
// }, {
//   "token": "Bluzelle",
//   "code": "BLZ",
//   "contract_address": "0x5732046a883704404f284ce41ffadd5b007fd668",
// }, {
//   "token": "Eden",
//   "code": "EDEN",
//   "contract_address": "0x1559fa1b8f28238fd5d76d9f434ad86fd20d1559",
// }, {
//   "token": "Pinakion",
//   "code": "PNK",
//   "contract_address": "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
// }, {
//   "token": "Fusion",
//   "code": "FSN",
//   "contract_address": "0xd0352a019e9ab9d757776f532377aaebd36fd541",
// }, {
//   "token": "ParaSwap",
//   "code": "PSP",
//   "contract_address": "0xcafe001067cdef266afb7eb5a286dcfd277f3de5",
// }, {
//   "token": "Measurable Data Token",
//   "code": "MDT",
//   "contract_address": "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26",
// }, {
//   "token": "hoge.finance",
//   "code": "HOGE",
//   "contract_address": "0xfad45e47083e4607302aa43c65fb3106f1cd7607",
// }, {
//   "token": "Moss Coin",
//   "code": "MOC",
//   "contract_address": "0x865ec58b06bf6305b886793aa20a2da31d034e68",
// }, {
//   "token": "LockTrip",
//   "code": "LOC",
//   "contract_address": "0x5e3346444010135322268a4630d2ed5f8d09446c",
// }, {
//   "token": "Civilization",
//   "code": "CIV",
//   "contract_address": "0x37fe0f067fa808ffbdd12891c0858532cfe7361d",
// }, {
//   "token": "Metronome",
//   "code": "MET",
//   "contract_address": "0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e",
// }, {
//   "token": "BOSAGORA",
//   "code": "BOA",
//   "contract_address": "0x746dda2ea243400d5a63e0700f190ab79f06489e",
// }, {
//   "token": "MANTRA DAO",
//   "code": "OM",
//   "contract_address": "0x3593d125a4f7849a1b059e64f4517a86dd60c95d",
// }, {
//   "token": "ERC20",
//   "code": "ERC20",
//   "contract_address": "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
// }, {
//   "token": "Nuls",
//   "code": "NULS",
//   "contract_address": "0xa2791bdf2d5055cda4d46ec17f9f429568275047",
// }, {
//   "token": "Kryll",
//   "code": "KRL",
//   "contract_address": "0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0",
// }, {
//   "token": "Marlin POND",
//   "code": "POND",
//   "contract_address": "0x57b946008913b82e4df85f501cbaed910e58d26c",
// }, {
//   "token": "dForce",
//   "code": "DF",
//   "contract_address": "0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0",
// }, {
//   "token": "SENTINEL PROTOCOL",
//   "code": "UPP",
//   "contract_address": "0xc86d054809623432210c107af2e3f619dcfbf652",
// }, {
//   "token": "BTU Protocol",
//   "code": "BTU",
//   "contract_address": "0xb683d83a532e2cb7dfa5275eed3698436371cc9f",
// }, {
//   "token": "VesperToken",
//   "code": "VSP",
//   "contract_address": "0x1b40183efb4dd766f11bda7a7c3ad8982e998421",
// }, {
//   "token": "PolkaFoundry",
//   "code": "PKF",
//   "contract_address": "0x8b39b70e39aa811b69365398e0aace9bee238aeb",
// }, {
//   "token": "InsurAce",
//   "code": "INSUR",
//   "contract_address": "0x544c42fbb96b39b21df61cf322b5edc285ee7429",
// }, {
//   "token": "Dock",
//   "code": "DOCK",
//   "contract_address": "0xe5dada80aa6477e85d09747f2842f7993d0df71c",
// }, {
//   "token": "Reserve",
//   "code": "RSV",
//   "contract_address": "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
// }, {
//   "token": "Yuan Chain New",
//   "code": "YCC",
//   "contract_address": "0x37e1160184f7dd29f00b78c050bf13224780b0b0",
// }, {
//   "token": "Smart MFG",
//   "code": "MFG",
//   "contract_address": "0x6710c63432a2de02954fc0f851db07146a6c0312",
// }, {
//   "token": "AirSwap",
//   "code": "AST",
//   "contract_address": "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
// }, {
//   "token": "ZEON",
//   "code": "ZEON",
//   "contract_address": "0xe5b826ca2ca02f09c1725e9bd98d9a8874c30532",
// }, {
//   "token": "DEXTools",
//   "code": "DEXT",
//   "contract_address": "0xfb7b4564402e5500db5bb6d63ae671302777c75a",
// }, {
//   "token": "Hegic",
//   "code": "HEGIC",
//   "contract_address": "0x584bC13c7D411c00c01A62e8019472dE68768430",
// }, {
//   "token": "WaykiCoin",
//   "code": "WIC",
//   "contract_address": "0x4f878c0852722b0976a955d68b376e4cd4ae99e5",
// }, {
//   "token": "Dragon",
//   "code": "DRGN",
//   "contract_address": "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
// }, {
//   "token": "LON Token",
//   "code": "LON",
//   "contract_address": "0x0000000000095413afc295d19edeb1ad7b71c952",
// }, {
//   "token": "Frontier Token",
//   "code": "FRONT",
//   "contract_address": "0xf8C3527CC04340b208C854E985240c02F7B7793f",
// }, {
//   "token": "OCC",
//   "code": "OCC",
//   "contract_address": "0x2f109021afe75b949429fe30523ee7c0d5b27207",
// }, {
//   "token": "StackOS",
//   "code": "STACK",
//   "contract_address": "0x56a86d648c435dc707c8405b78e2ae8eb4e60ba4",
// }, {
//   "token": "Blockport",
//   "code": "BPT",
//   "contract_address": "0x327682779bab2bf4d1337e8974ab9de8275a7ca8",
// }, {
//   "token": "LikeCoin",
//   "code": "LIKE",
//   "contract_address": "0x02f61fd266da6e8b102d4121f5ce7b992640cf98",
// }, {
//   "token": "Stratos Token",
//   "code": "STOS",
//   "contract_address": "0x08c32b0726c5684024ea6e141c50ade9690bbdcc",
// }, {
//   "token": "pTokens BTC",
//   "code": "pBTC",
//   "contract_address": "0x5228a22e72ccc52d415ecfd199f99d0665e7733b",
// }, {
//   "token": "Guaranteed Entrance Token",
//   "code": "GET",
//   "contract_address": "0x8a854288a5976036a725879164ca3e91d30c6a1b",
// }, {
//   "token": "UniLend Finance Token",
//   "code": "UFT",
//   "contract_address": "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
// }, {
//   "token": "UNIC",
//   "code": "UNIC",
//   "contract_address": "0x94e0bab2f6ab1f19f4750e42d7349f2740513ad5",
// }, {
//   "token": "Switcheo Token",
//   "code": "SWTH",
//   "contract_address": "0xb4371da53140417cbb3362055374b10d97e420bb",
// }, {
//   "token": "HOPR Token",
//   "code": "HOPR",
//   "contract_address": "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da",
// }, {
//   "token": "CargoX",
//   "code": "CXO",
//   "contract_address": "0xb6ee9668771a79be7967ee29a63d4184f8097143",
// }, {
//   "token": "Student Coin",
//   "code": "STC",
//   "contract_address": "0x15b543e986b8c34074dfc9901136d9355a537e7e",
// }, {
//   "token": "Exeedme",
//   "code": "XED",
//   "contract_address": "0xee573a945b01b788b9287ce062a0cfc15be9fd86",
// }, {
//   "token": "veCRV-DAO yVault",
//   "code": "yveCRV-DAO",
//   "contract_address": "0xc5bddf9843308380375a611c18b50fb9341f502a",
// }, {
//   "token": "NimiqNetwork",
//   "code": "NET",
//   "contract_address": "0xcfb98637bcae43C13323EAa1731cED2B716962fD",
// }, {
//   "token": "AVT",
//   "code": "AVT",
//   "contract_address": "0x0d88ed6e74bbfd96b831231638b66c05571e824f",
// }, {
//   "token": "Internxt",
//   "code": "INXT",
//   "contract_address": "0x4a8f5f96d5436e43112c2fbc6a9f70da9e4e16d4",
// }, {
//   "token": "Blockchain Monster Coin",
//   "code": "BCMC",
//   "contract_address": "0x2BA8349123de45E931a8C8264c332E6e9CF593F9",
// }, {
//   "token": "Ultiledger",
//   "code": "ULT",
//   "contract_address": "0xe884cc2795b9c45beeac0607da9539fd571ccf85",
// }, {
//   "token": "DaTa eXchange Token",
//   "code": "DTX",
//   "contract_address": "0x765f0c16d1ddc279295c1a7c24b0883f62d33f75",
// }, {
//   "token": "ELYSIA",
//   "code": "EL",
//   "contract_address": "0x2781246fe707bb15cee3e5ea354e2154a2877b16",
// }, {
//   "token": "ICONOMI",
//   "code": "ICN",
//   "contract_address": "0x888666CA69E0f178DED6D75b5726Cee99A87D698",
// }, {
//   "token": "Pendle",
//   "code": "PENDLE",
//   "contract_address": "0x808507121b80c02388fad14726482e061b8da827",
// }, {
//   "token": "Bread",
//   "code": "BRD",
//   "contract_address": "0x558ec3152e2eb2174905cd19aea4e34a23de9ad6",
// }, {
//   "token": "BZ",
//   "code": "BZ",
//   "contract_address": "0x4375e7ad8a01b8ec3ed041399f62d9cd120e0063",
// }, {
//   "token": "pNetwork Token",
//   "code": "PNT",
//   "contract_address": "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
// }, {
//   "token": "Meta",
//   "code": "MTA",
//   "contract_address": "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
// }, {
//   "token": "Gifto",
//   "code": "GTO",
//   "contract_address": "0xc5bbae50781be1669306b9e001eff57a2957b09d",
// }, {
//   "token": "STAKE",
//   "code": "STAKE",
//   "contract_address": "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
// }, {
//   "token": "Symbiosis",
//   "code": "SIS",
//   "contract_address": "0xd38bb40815d2b0c2d2c866e0c72c5728ffc76dd9",
// }, {
//   "token": "SelfKey",
//   "code": "KEY",
//   "contract_address": "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
// }, {
//   "token": "ANGLE",
//   "code": "ANGLE",
//   "contract_address": "0x31429d1856ad1377a8a0079410b297e1a9e214c2",
// }, {
//   "token": "Deri",
//   "code": "DERI",
//   "contract_address": "0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9",
// }, {
//   "token": "Rubic",
//   "code": "RBC",
//   "contract_address": "0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3",
// }, {
//   "token": "Quantstamp",
//   "code": "QSP",
//   "contract_address": "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d",
// }, {
//   "token": "UniCrypt",
//   "code": "UNCX",
//   "contract_address": "0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
// }, {
//   "token": "BLOCKv",
//   "code": "VEE",
//   "contract_address": "0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
// }, {
//   "token": "ArcBlock",
//   "code": "ABT",
//   "contract_address": "0xb98d4c97425d9908e66e53a6fdf673acca0be986",
// }, {
//   "token": "PolkaBridge",
//   "code": "PBR",
//   "contract_address": "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695",
// }, {
//   "token": "DSLA",
//   "code": "DSLA",
//   "contract_address": "0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe",
// }, {
//   "token": "Launchpool token",
//   "code": "LPOOL",
//   "contract_address": "0x6149c26cd2f7b5ccdb32029af817123f6e37df5b",
// }, {
//   "token": "Curate",
//   "code": "XCUR",
//   "contract_address": "0xE1c7E30C42C24582888C758984f6e382096786bd",
// }, {
//   "token": "WPPToken",
//   "code": "WPP",
//   "contract_address": "0x1955d744F9435522Be508D1Ba60E3c12D0690B6A",
// }, {
//   "token": "DappRadar",
//   "code": "RADAR",
//   "contract_address": "0x44709a920fccf795fbc57baa433cc3dd53c44dbe",
// }, {
//   "token": "Sentivate",
//   "code": "SNTVT",
//   "contract_address": "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8",
// }, {
//   "token": "Cardstack",
//   "code": "CARD",
//   "contract_address": "0x954b890704693af242613edef1b603825afcd708",
// }, {
//   "token": "iQeon",
//   "code": "IQN",
//   "contract_address": "0x0db8d8b76bc361bacbb72e2c491e06085a97ab31",
// }, {
//   "token": "Walton",
//   "code": "WTC",
//   "contract_address": "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
// }, {
//   "token": "SAN",
//   "code": "SAN",
//   "contract_address": "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
// }, {
//   "token": "$Poolz Finance",
//   "code": "POOLZ",
//   "contract_address": "0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
// }, {
//   "token": "Antimatter.Finance Governance Token",
//   "code": "MATTER",
//   "contract_address": "0x9b99cca871be05119b2012fd4474731dd653febe",
// }, {
//   "token": "dHedge DAO Token",
//   "code": "DHT",
//   "contract_address": "0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84",
// }, {
//   "token": "Imported GBYTE",
//   "code": "GBYTE",
//   "contract_address": "0x31f69de127c8a0ff10819c0955490a4ae46fcc2a",
// }, {
//   "token": "Polkamon",
//   "code": "PMON",
//   "contract_address": "0x1796ae0b0fa4862485106a0de9b654efe301d0b2",
// }, {
//   "token": "AOG",
//   "code": "AOG",
//   "contract_address": "0x8578530205cecbe5db83f7f29ecfeec860c297c2",
// }, {
//   "token": "Orion Money Token",
//   "code": "ORION",
//   "contract_address": "0x727f064a78dc734d33eec18d5370aef32ffd46e4",
// }, {
//   "token": "0chain",
//   "code": "ZCN",
//   "contract_address": "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
// }, {
//   "token": "QRL",
//   "code": "QRL",
//   "contract_address": "0x697beac28b09e122c4332d163985e8a73121b97f",
// }, {
//   "token": "Pluton",
//   "code": "PLU",
//   "contract_address": "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
// }, {
//   "token": "ZBToken",
//   "code": "ZB",
//   "contract_address": "0xbd0793332e9fb844a52a205a233ef27a5b34b927",
// }, {
//   "token": "Spice",
//   "code": "SFI",
//   "contract_address": "0xb753428af26e81097e7fd17f40c88aaa3e04902c",
// }, {
//   "token": "Darwinia Network Native Token",
//   "code": "RING",
//   "contract_address": "0x9469d013805bffb7d3debe5e7839237e535ec483",
// }, {
//   "token": "FOAM Token",
//   "code": "FOAM",
//   "contract_address": "0x4946fcea7c692606e8908002e55a582af44ac121",
// }, {
//   "token": "0xBitcoin Token",
//   "code": "0xBTC",
//   "contract_address": "0xb6ed7644c69416d67b522e20bc294a9a9b405b31",
// }, {
//   "token": "UTN-P: Universa Token",
//   "code": "UTNP",
//   "contract_address": "0x9e3319636e2126e3c0bc9e3134aec5e1508a46c7",
// }, {
//   "token": "EligmaToken",
//   "code": "ELI",
//   "contract_address": "0xc7c03b8a3fc5719066e185ea616e87b88eba44a3",
// }, {
//   "token": "Klee Kai",
//   "code": "KLEE",
//   "contract_address": "0x382f0160c24f5c515a19f155bac14d479433a407",
// }, {
//   "token": "Cashaa",
//   "code": "CAS",
//   "contract_address": "0xe8780b48bdb05f928697a5e8155f672ed91462f7",
// }, {
//   "token": "Dentacoin",
//   "code": "Dentacoin",
//   "contract_address": "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
// }, {
//   "token": "O3 Swap Token",
//   "code": "O3",
//   "contract_address": "0xee9801669c6138e84bd50deb500827b776777d28",
// }, {
//   "token": "BAX",
//   "code": "BAX",
//   "contract_address": "0x9a0242b7a33dacbe40edb927834f96eb39f8fbcb",
// }, {
//   "token": "MCDEX Token",
//   "code": "MCB",
//   "contract_address": "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
// }, {
//   "token": "Fractal Protocol Token",
//   "code": "FCL",
//   "contract_address": "0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3",
// }, {
//   "token": "Cindicator",
//   "code": "CND",
//   "contract_address": "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
// }, {
//   "token": "Free Coin",
//   "code": "FREE",
//   "contract_address": "0x2f141ce366a2462f02cea3d12cf93e4dca49e4fd",
// }, {
//   "token": "TokenClub Token",
//   "code": "TCT",
//   "contract_address": "0x4824a7b64e3966b0133f4f4ffb1b9d6beb75fff7",
// }, {
//   "token": "VISOR",
//   "code": "VISR",
//   "contract_address": "0xf938424f7210f31df2aee3011291b658f872e91e",
// }, {
//   "token": "UnmarshalToken",
//   "code": "MARSH",
//   "contract_address": "0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37",
// }, {
//   "token": "Jarvis Reward Token",
//   "code": "JRT",
//   "contract_address": "0x8a9c67fee641579deba04928c4bc45f66e26343a",
// }, {
//   "token": "NUM Token",
//   "code": "NUM",
//   "contract_address": "0x3496b523e5c00a4b4150d6721320cddb234c3079",
// }, {
//   "token": "SwftCoin",
//   "code": "SWFTC",
//   "contract_address": "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e",
// }, {
//   "token": "Tidal Token",
//   "code": "TIDAL",
//   "contract_address": "0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7",
// }, {
//   "token": "Wirex Token",
//   "code": "WXT",
//   "contract_address": "0xa02120696c7b8fe16c09c749e4598819b2b0e915",
// }, {
//   "token": "KAN",
//   "code": "KAN",
//   "contract_address": "0x1410434b0346f5be678d0fb554e5c7ab620f8f4a",
// }, {
//   "token": "Lamden Tau",
//   "code": "TAU",
//   "contract_address": "0xc27a2f05fa577a83ba0fdb4c38443c0718356501",
// }, {
//   "token": "GoBlank Token",
//   "code": "BLANK",
//   "contract_address": "0x41a3dba3d677e573636ba691a70ff2d606c29666",
// }, {
//   "token": "Gro DAO Token",
//   "code": "GRO",
//   "contract_address": "0x3ec8798b81485a254928b70cda1cf0a2bb0b74d7",
// }, {
//   "token": "Nebulas",
//   "code": "NAS",
//   "contract_address": "0x5d65D971895Edc438f465c17DB6992698a52318D",
// }, {
//   "token": "TE-FOOD/TustChain",
//   "code": "TONE",
//   "contract_address": "0x2Ab6Bb8408ca3199B8Fa6C92d5b455F820Af03c4",
// }, {
//   "token": "CRPT",
//   "code": "CRPT",
//   "contract_address": "0x08389495d7456e1951ddf7c3a1314a4bfb646d8b",
// }, {
//   "token": "Oraichain Token",
//   "code": "ORAI",
//   "contract_address": "0x4c11249814f11b9346808179cf06e71ac328c1b5",
// }, {
//   "token": "Populous",
//   "code": "PPT",
//   "contract_address": "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
// }, {
//   "token": "AurusDeFi",
//   "code": "AWX",
//   "contract_address": "0xa51fc71422a30fa7ffa605b360c3b283501b5bf6",
// }, {
//   "token": "Shopping.io",
//   "code": "SPI",
//   "contract_address": "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7",
// }, {
//   "token": "Cerby Token",
//   "code": "CERBY",
//   "contract_address": "0xdef1fac7bf08f173d286bbbdcbeeade695129840",
// }, {
//   "token": "THORSwap Token",
//   "code": "THOR",
//   "contract_address": "0xa5f2211b9b8170f694421f2046281775e8468044",
// }, {
//   "token": "RAE Token",
//   "code": "RAE",
//   "contract_address": "0xe5a3229ccb22b6484594973a03a3851dcd948756",
// }, {
//   "token": "Knoxstertoken",
//   "code": "FKX",
//   "contract_address": "0x16484d73Ac08d2355F466d448D2b79D2039F6EBB",
// }, {
//   "token": "Covesting",
//   "code": "COV",
//   "contract_address": "0xADA86b1b313D1D5267E3FC0bB303f0A2b66D0Ea7",
// }, {
//   "token": "Tranche Finance",
//   "code": "SLICE",
//   "contract_address": "0x0aee8703d34dd9ae107386d3eff22ae75dd616d1",
// }, {
//   "token": "Amber",
//   "code": "AMB",
//   "contract_address": "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
// }, {
//   "token": "Rupiah Token",
//   "code": "IDRT",
//   "contract_address": "0x998FFE1E43fAcffb941dc337dD0468d52bA5b48A",
// }, {
//   "token": "Raiden",
//   "code": "RDN",
//   "contract_address": "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
// }, {
//   "token": "TrueFlip",
//   "code": "TFL",
//   "contract_address": "0xa7f976c360ebbed4465c2855684d1aae5271efa9",
// }, {
//   "token": "PIKA",
//   "code": "PIKA",
//   "contract_address": "0x60f5672a271c7e39e787427a18353ba59a4a3578",
// }, {
//   "token": "PoolTogether",
//   "code": "POOL",
//   "contract_address": "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e",
// }, {
//   "token": "Nerve Network",
//   "code": "NVT",
//   "contract_address": "0x7b6f71c8b123b38aa8099e0098bec7fbc35b8a13",
// }, {
//   "token": "Public Mint",
//   "code": "MINT",
//   "contract_address": "0x0cdf9acd87e940837ff21bb40c9fd55f68bba059",
// }, {
//   "token": "GOVI",
//   "code": "GOVI",
//   "contract_address": "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107",
// }, {
//   "token": "Gelato Network Token",
//   "code": "GEL",
//   "contract_address": "0x15b7c0c907e4c6b9adaaaabc300c08991d6cea05",
// }, {
//   "token": "Strips Token",
//   "code": "STRP",
//   "contract_address": "0x97872eafd79940c7b24f7bcc1eadb1457347adc9",
// }, {
//   "token": "Aurora",
//   "code": "AOA",
//   "contract_address": "0x9ab165d795019b6d8b3e971dda91071421305e5a",
// }, {
//   "token": "Digg",
//   "code": "DIGG",
//   "contract_address": "0x798d1be841a82a273720ce31c822c61a67a601c3",
// }, {
//   "token": "ZTCoin",
//   "code": "ZT",
//   "contract_address": "0xfe39e6a32acd2af7955cb3d406ba2b55c901f247",
// }, {
//   "token": "Moeda Loyalty Points",
//   "code": "MDA",
//   "contract_address": "0x51db5ad35c671a87207d88fc11d593ac0c8415bd",
// }, {
//   "token": "Jenny Metaverse DAO Token",
//   "code": "uJENNY",
//   "contract_address": "0xa499648fd0e80fd911972bbeb069e4c20e68bf22",
// }, {
//   "token": "EVAI.IO",
//   "code": "EVAI",
//   "contract_address": "0x50f09629d0afdf40398a3f317cc676ca9132055c",
// }, {
//   "token": "Pinknode Token",
//   "code": "PNODE",
//   "contract_address": "0xaf691508ba57d416f895e32a1616da1024e882d2",
// }, {
//   "token": "UnFederalReserveToken",
//   "code": "eRSDL",
//   "contract_address": "0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
// }, {
//   "token": "PCHAIN",
//   "code": "PAI",
//   "contract_address": "0xb9bb08ab7e9fa0a1356bd4a39ec0ca267e03b0b3",
// }, {
//   "token": "StakeWise",
//   "code": "SWISE",
//   "contract_address": "0x48c3399719b582dd63eb5aadf12a40b4c3f52fa2",
// }, {
//   "token": "Atomic Wallet Token",
//   "code": "AWC",
//   "contract_address": "0xad22f63404f7305e4713ccbd4f296f34770513f4",
// }, {
//   "token": "Signata",
//   "code": "SATA",
//   "contract_address": "0x3ebb4a4e91ad83be51f8d596533818b246f4bee1",
// }, {
//   "token": "WaBi",
//   "code": "WaBi",
//   "contract_address": "0x286BDA1413a2Df81731D4930ce2F862a35A609fE",
// }, {
//   "token": "Salt",
//   "code": "SALT",
//   "contract_address": "0x4156D3342D5c385a87D264F90653733592000581",
// }, {
//   "token": "BiFi",
//   "code": "BiFi",
//   "contract_address": "0x2791bfd60d232150bff86b39b7146c0eaaa2ba81",
// }, {
//   "token": "GHOST",
//   "code": "GHOST",
//   "contract_address": "0x4c327471C44B2dacD6E90525f9D629bd2e4f662C",
// }, {
//   "token": "Lambda",
//   "code": "LAMB",
//   "contract_address": "0x8971f9fd7196e5cee2c1032b50f656855af7dd26",
// }, {
//   "token": "Arcona Distribution Contract",
//   "code": "ARCONA",
//   "contract_address": "0x0f71b8de197a1c84d31de0f1fa7926c365f052b3",
// }, {
//   "token": "ProBit Token",
//   "code": "PROB",
//   "contract_address": "0xfb559ce67ff522ec0b9ba7f5dc9dc7ef6c139803",
// }, {
//   "token": "OpenANX",
//   "code": "OAX",
//   "contract_address": "0x701c244b988a513c945973defa05de933b23fe1d",
// }, {
//   "token": "BTC 2x Flexible Leverage Index",
//   "code": "BTC2x-FLI",
//   "contract_address": "0x0b498ff89709d3838a063f1dfa463091f9801c2b",
// }, {
//   "token": "YUKI",
//   "code": "YUKI",
//   "contract_address": "0x5ab793e36070f0fac928ea15826b0c1bc5365119",
// }, {
//   "token": "Furucombo",
//   "code": "COMBO",
//   "contract_address": "0xffffffff2ba8f66d4e51811c5190992176930278",
// }, {
//   "token": "NFTrade Token",
//   "code": "NFTD",
//   "contract_address": "0x8e0fe2947752be0d5acf73aae77362daf79cb379",
// }, {
//   "token": "Coinvest COIN V3 Token",
//   "code": "COIN",
//   "contract_address": "0xeb547ed1D8A3Ff1461aBAa7F0022FED4836E00A4",
// }, {
//   "token": "Morpheus Infrastructure Token",
//   "code": "MITx",
//   "contract_address": "0x4a527d8fc13c5203ab24ba0944f4cb14658d1db6",
// }, {
//   "token": "Unido",
//   "code": "UDO",
//   "contract_address": "0xea3983fc6d0fbbc41fb6f6091f68f3e08894dc06",
// }, {
//   "token": "Armor",
//   "code": "ARMOR",
//   "contract_address": "0x1337def16f9b486faed0293eb623dc8395dfe46a",
// }, {
//   "token": "LAtoken",
//   "code": "LA",
//   "contract_address": "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf",
// }, {
//   "token": "TOP Network",
//   "code": "TOP",
//   "contract_address": "0xdcd85914b8ae28c1e62f1c488e1d968d5aaffe2b",
// }, {
//   "token": "Genesis Pool",
//   "code": "GPOOL",
//   "contract_address": "0x797de1dc0b9faf5e25c1f7efe8df9599138fa09d",
// }, {
//   "token": "Standard",
//   "code": "STND",
//   "contract_address": "0x9040e237c3bf18347bb00957dc22167d0f2b999d",
// }, {
//   "token": "Monolith",
//   "code": "TKN",
//   "contract_address": "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
// }, {
//   "token": "Ethereans",
//   "code": "OS",
//   "contract_address": "0x6100dd79fcaa88420750dcee3f735d168abcb771",
// }, {
//   "token": "Monetha",
//   "code": "MTH",
//   "contract_address": "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
// }, {
//   "token": "Tokenomy",
//   "code": "TEN",
//   "contract_address": "0xdd16ec0f66e54d453e6756713e533355989040e4",
// }, {
//   "token": "TOKPIE",
//   "code": "TKP",
//   "contract_address": "0xd31695a1d35e489252ce57b129fd4b1b05e6acac",
// }, {
//   "token": "Leverj Gluon",
//   "code": "L2",
//   "contract_address": "0xbbff34e47e559ef680067a6b1c980639eeb64d24",
// }, {
//   "token": "Airbloc",
//   "code": "ABL",
//   "contract_address": "0xf8b358b3397a8ea5464f8cc753645d42e14b79ea",
// }, {
//   "token": "Jigstack",
//   "code": "STAK",
//   "contract_address": "0x1f8a626883d7724dbd59ef51cbd4bf1cf2016d13",
// }, {
//   "token": "DivergenceProtocol",
//   "code": "DIVER",
//   "contract_address": "0xfb782396c9b20e564a64896181c7ac8d8979d5f4",
// }, {
//   "token": "AnRKey X",
//   "code": "$ANRX",
//   "contract_address": "0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0",
// }, {
//   "token": "ODEM Token",
//   "code": "ODEM",
//   "contract_address": "0xbf52f2ab39e26e0951d2a02b49b7702abe30406a",
// }, {
//   "token": "Decentr",
//   "code": "DEC",
//   "contract_address": "0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
// }, {
//   "token": "DOVU",
//   "code": "DOV",
//   "contract_address": "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
// }, {
//   "token": "Geeq",
//   "code": "GEEQ",
//   "contract_address": "0x6B9f031D718dDed0d681c20cB754F97b3BB81b78",
// }, {
//   "token": "Tierion Network Token",
//   "code": "TNT",
//   "contract_address": "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
// }, {
//   "token": "AMLT",
//   "code": "AMLT",
//   "contract_address": "0xca0e7269600d353f70b14ad118a49575455c0f2f",
// }, {
//   "token": "QuadrantProtocol",
//   "code": "eQUAD",
//   "contract_address": "0xc28e931814725bbeb9e670676fabbcb694fe7df2",
// }, {
//   "token": "IOI Token",
//   "code": "IOI",
//   "contract_address": "0x8b3870df408ff4d7c3a26df852d41034eda11d81",
// }, {
//   "token": "Ixs Token",
//   "code": "IXS",
//   "contract_address": "0x73d7c860998ca3c01ce8c808f5577d94d545d1b4",
// }, {
//   "token": "ZMINE Token",
//   "code": "ZMN",
//   "contract_address": "0x554ffc77f4251a9fb3c0e3590a6a205f8d4e067d",
// }, {
//   "token": "RipioCreditNetwork",
//   "code": "RCN",
//   "contract_address": "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
// }, {
//   "token": "Pawthereum",
//   "code": "PAWTH",
//   "contract_address": "0xaecc217a749c2405b5ebc9857a16d58bdc1c367f",
// }, {
//   "token": "Blockchain Certified Data Token",
//   "code": "BCDT",
//   "contract_address": "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
// }, {
//   "token": "Voice Token",
//   "code": "VOICE",
//   "contract_address": "0x2e2364966267B5D7D2cE6CD9A9B5bD19d9C7C6A9",
// }, {
//   "token": "BIXToken",
//   "code": "BIX",
//   "contract_address": "0x009c43b42aefac590c719e971020575974122803",
// }, {
//   "token": "Smart Advertising Transaction Token",
//   "code": "SATT",
//   "contract_address": "0xdf49c9f599a0a9049d97cff34d0c30e468987389",
// }, {
//   "token": "CREDITS",
//   "code": "CS",
//   "contract_address": "0x46b9ad944d1059450da1163511069c718f699d31",
// }, {
//   "token": "Hakka Finance",
//   "code": "HAKKA",
//   "contract_address": "0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd",
// }, {
//   "token": "QunQunCommunities",
//   "code": "QUN",
//   "contract_address": "0x264dc2dedcdcbb897561a57cba5085ca416fb7b4",
// }, {
//   "token": "VIB",
//   "code": "VIB",
//   "contract_address": "0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724",
// }, {
//   "token": "Plasma",
//   "code": "PPAY",
//   "contract_address": "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
// }, {
//   "token": "SENTinel",
//   "code": "SENT",
//   "contract_address": "0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037",
// }, {
//   "token": "ChangeNOW",
//   "code": "NOW",
//   "contract_address": "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
// }, {
//   "token": "Block-Chain.com Token",
//   "code": "BC",
//   "contract_address": "0x2ecb13a8c458c379c4d9a7259e202de03c8f3d19",
// }, {
//   "token": "1-UP",
//   "code": "1-UP",
//   "contract_address": "0xc86817249634ac209bc73fca1712bbd75e37407d",
// }, {
//   "token": "TenXPay",
//   "code": "PAY",
//   "contract_address": "0xB97048628DB6B661D4C2aA833e95Dbe1A905B280",
// }, {
//   "token": "SPANK",
//   "code": "SPANK",
//   "contract_address": "0x42d6622dece394b54999fbd73d108123806f6a18",
// }, {
//   "token": "BHPCash",
//   "code": "BHPC",
//   "contract_address": "0xee74110fb5a1007b06282e0de5d73a61bf41d9cd",
// }, {
//   "token": "UREEQA Token",
//   "code": "URQA",
//   "contract_address": "0x1735db6ab5baa19ea55d0adceed7bcdc008b3136",
// }, {
//   "token": "Gas DAO",
//   "code": "GAS",
//   "contract_address": "0x6bba316c48b49bd1eac44573c5c871ff02958469",
// }, {
//   "token": "nDEX",
//   "code": "NDX",
//   "contract_address": "0x1966d718a565566e8e202792658d7b5ff4ece469",
// }, {
//   "token": "NFT INDEX",
//   "code": "NFTI",
//   "contract_address": "0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c",
// }, {
//   "token": "Bloom",
//   "code": "BLT",
//   "contract_address": "0x107c4504cd79c5d2696ea0030a8dd4e92601b82e",
// }, {
//   "token": "Falcon",
//   "code": "FNT",
//   "contract_address": "0xdc5864ede28bd4405aa04d93e05a0531797d9d59",
// }, {
//   "token": "RED MWAT",
//   "code": "MWAT",
//   "contract_address": "0x6425c6be902d692ae2db752b3c268afadb099d3b",
// }, {
//   "token": "CUBE",
//   "code": "AUTO",
//   "contract_address": "0x622dFfCc4e83C64ba959530A5a5580687a57581b",
// }, {
//   "token": "CAPP Token",
//   "code": "CAPP",
//   "contract_address": "0x11613b1f840bb5A40F8866d857e24DA126B79D73",
// }, {
//   "token": "Cappasity",
//   "code": "CAPP",
//   "contract_address": "0x04f2e7221fdb1b52a68169b25793e51478ff0329",
// }, {
//   "token": "PieDAO DOUGH v2",
//   "code": "DOUGH",
//   "contract_address": "0xad32A8e6220741182940c5aBF610bDE99E737b2D",
// }, {
//   "token": "PayPie",
//   "code": "PPP",
//   "contract_address": "0xc42209aCcC14029c1012fB5680D95fBd6036E2a0",
// }, {
//   "token": "Enigma",
//   "code": "ENG",
//   "contract_address": "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
// }, {
//   "token": "Quantum",
//   "code": "QAU",
//   "contract_address": "0x671abbe5ce652491985342e85428eb1b07bc6c64",
// }, {
//   "token": "PontoonToken",
//   "code": "TOON",
//   "contract_address": "0xaee433adebe0fbb88daa47ef0c1a513caa52ef02",
// }, {
//   "token": "Internet Node Token",
//   "code": "INT",
//   "contract_address": "0x0b76544f6c413a555f309bf76260d1e02377c02a",
// }, {
//   "token": "SpaceChain",
//   "code": "SPC",
//   "contract_address": "0x8069080a922834460c3a092fb2c1510224dc066b",
// }, {
//   "token": "RUFF",
//   "code": "RUFF",
//   "contract_address": "0xf278c1ca969095ffddded020290cf8b5c424ace2",
// }, {
//   "token": "DAPSTOKEN",
//   "code": "DAPS",
//   "contract_address": "0x93190dbce9b9bd4aa546270a8d1d65905b5fdd28",
// }, {
//   "token": "Vibe Coin",
//   "code": "VIBE",
//   "contract_address": "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
// }, {
//   "token": "Spendcoin",
//   "code": "SPND",
//   "contract_address": "0xddd460bbd9f79847ea08681563e8a9696867210c",
// }, {
//   "token": "CyberMiles",
//   "code": "CMT",
//   "contract_address": "0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f",
// }, {
//   "token": "Fair Token",
//   "code": "FAIR",
//   "contract_address": "0x9b20dabcec77f6289113e61893f7beefaeb1990a",
// }, {
//   "token": "XIO Network",
//   "code": "XIO",
//   "contract_address": "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
// }, {
//   "token": "NucleusVision",
//   "code": "nCash",
//   "contract_address": "0x809826cceab68c387726af962713b64cb5cb3cca",
// }, {
//   "token": "Float Bank",
//   "code": "BANK",
//   "contract_address": "0x24a6a37576377f63f194caa5f518a60f45b42921",
// }, {
//   "token": "POA ERC20 on Foundation",
//   "code": "POA20",
//   "contract_address": "0x6758b7d441a9739b98552b373703d8d3d14f9e62",
// }, {
//   "token": "MATRIX AI Network",
//   "code": "MAN",
//   "contract_address": "0xe25bcec5d3801ce3a794079bf94adf1b8ccd802d",
// }, {
//   "token": "ZAP TOKEN",
//   "code": "ZAP",
//   "contract_address": "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
// }, {
//   "token": "Edgeless",
//   "code": "EDG",
//   "contract_address": "0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c",
// }, {
//   "token": "Genaro X",
//   "code": "GNX",
//   "contract_address": "0x6ec8a24cabdc339a06a172f8223ea557055adaa5",
// }, {
//   "token": "All Sports Coin",
//   "code": "SOC",
//   "contract_address": "0x2d0e95bd4795d7ace0da3c0ff7b706a5970eb9d3",
// }, {
//   "token": "DeFiner",
//   "code": "FIN",
//   "contract_address": "0x054f76beED60AB6dBEb23502178C52d6C5dEbE40",
// }, {
//   "token": "VeriSafe",
//   "code": "VSF",
//   "contract_address": "0xac9ce326e95f51b5005e9fe1dd8085a01f18450c",
// }, {
//   "token": "Egretia",
//   "code": "EGT",
//   "contract_address": "0x8e1b448ec7adfc7fa35fc2e885678bd323176e34",
// }, {
//   "token": "LGO Token",
//   "code": "LGO",
//   "contract_address": "0x0a50c93c762fdd6e56d86215c24aaad43ab629aa",
// }, {
//   "token": "Insights Network",
//   "code": "INSTAR",
//   "contract_address": "0xc72fe8e3dd5bef0f9f31f259399f301272ef2a2d",
// }, {
//   "token": "SunContract",
//   "code": "SNC",
//   "contract_address": "0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404",
// }, {
//   "token": "Autonio",
//   "code": "NIOX",
//   "contract_address": "0xc813EA5e3b48BEbeedb796ab42A30C5599b01740",
// }, {
//   "token": "VIN",
//   "code": "VIN",
//   "contract_address": "0xf3e014fe81267870624132ef3a646b8e83853a96",
// }, {
//   "token": "Mallcoin Token",
//   "code": "MLC",
//   "contract_address": "0xc72ed4445b3fe9f0863106e344e241530d338906",
// }, {
//   "token": "Six Domain Asset",
//   "code": "SDA",
//   "contract_address": "0x4212fea9fec90236ecc51e41e2096b16ceb84555",
// }, {
//   "token": "ClinTex",
//   "code": "CTI",
//   "contract_address": "0x8c18D6a985Ef69744b9d57248a45c0861874f244",
// }, {
//   "token": "NapoleonX",
//   "code": "NPX",
//   "contract_address": "0x28b5e12cce51f15594b0b91d5b5adaa70f684a02",
// }, {
//   "token": "Partner",
//   "code": "PRC",
//   "contract_address": "0xcaa05e82bdcba9e25cd1a3bf1afb790c1758943d",
// }, {
//   "token": "PILLAR",
//   "code": "PLR",
//   "contract_address": "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
// }, {
//   "token": "Spheroid",
//   "code": "SPH",
//   "contract_address": "0xa0cf46eb152656c7090e769916eb44a138aaa406",
// }, {
//   "token": "PAR Stablecoin",
//   "code": "PAR",
//   "contract_address": "0x68037790a0229e9ce6eaa8a99ea92964106c4703",
// }, {
//   "token": "HPBCoin",
//   "code": "HPB",
//   "contract_address": "0x38c6a68304cdefb9bec48bbfaaba5c5b47818bb2",
// }, {
//   "token": "YOU Chain",
//   "code": "YOU",
//   "contract_address": "0x34364BEe11607b1963d66BCA665FDE93fCA666a8",
// }, {
//   "token": "Revain",
//   "code": "REV",
//   "contract_address": "0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9",
// }, {
//   "token": "PumaPay",
//   "code": "PMA",
//   "contract_address": "0x846c66cf71c43f80403b51fe3906b3599d63336f",
// }, {
//   "token": "DAEX Token",
//   "code": "DAX",
//   "contract_address": "0x0b4bdc478791897274652dc15ef5c135cae61e60",
// }, {
//   "token": "SIRIN",
//   "code": "SRN",
//   "contract_address": "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
// }, {
//   "token": "Empty Set Dollar",
//   "code": "ESD",
//   "contract_address": "0x36F3FD68E7325a35EB768F1AedaAe9EA0689d723",
// }, {
//   "token": "Float Protocol: FLOAT",
//   "code": "FLOAT",
//   "contract_address": "0xb05097849bca421a3f51b249ba6cca4af4b97cb9",
// }, {
//   "token": "Bundles",
//   "code": "BUND",
//   "contract_address": "0x8D3E855f3f55109D473735aB76F753218400fe96",
// }, {
//   "token": "Hiveterminal Token",
//   "code": "HVN",
//   "contract_address": "0xC0Eb85285d83217CD7c891702bcbC0FC401E2D9D",
// }, {
//   "token": "Cryptonovae",
//   "code": "YAE",
//   "contract_address": "0x4ee438be38f8682abb089f2bfea48851c5e71eaf",
// }, {
//   "token": "Woofy",
//   "code": "WOOFY",
//   "contract_address": "0xd0660cd418a64a1d44e9214ad8e459324d8157f1",
// }, {
//   "token": "onG",
//   "code": "ONG",
//   "contract_address": "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae",
// }, {
//   "token": "OCoin",
//   "code": "OCN",
//   "contract_address": "0x4092678e4e78230f46a1534c0fbc8fa39780892b",
// }, {
//   "token": "Impermax",
//   "code": "IMX",
//   "contract_address": "0x7b35ce522cb72e4077baeb96cb923a5529764a00",
// }, {
//   "token": "Skrumble Network V2",
//   "code": "SKM",
//   "contract_address": "0x048fe49be32adfc9ed68c37d32b5ec9df17b3603",
// }, {
//   "token": "UseChain Token",
//   "code": "USE",
//   "contract_address": "0xd9485499499d66b175cf5ed54c0a19f1a6bcb61a",
// }, {
//   "token": "Public Index Network",
//   "code": "PIN",
//   "contract_address": "0xc1f976b91217e240885536af8b63bc8b5269a9be",
// }, {
//   "token": "CPChain",
//   "code": "CPC",
//   "contract_address": "0xfAE4Ee59CDd86e3Be9e8b90b53AA866327D7c090",
// }, {
//   "token": "cVToken",
//   "code": "cV",
//   "contract_address": "0x50bC2Ecc0bfDf5666640048038C1ABA7B7525683",
// }, {
//   "token": "Yee - A Blockchain-powered & Cloud-based Socia",
//   "code": "YEE",
//   "contract_address": "0x922105fad8153f516bcfb829f56dc097a0e1d705",
// }, {
//   "token": "Herocoin",
//   "code": "PLAY",
//   "contract_address": "0xe477292f1b3268687a29376116b0ed27a9c76170",
// }, {
//   "token": "HitchainCoin",
//   "code": "HIT",
//   "contract_address": "0x7995ab36bb307afa6a683c24a25d90dc1ea83566",
// }, {
//   "token": "CryptalDash",
//   "code": "CRD",
//   "contract_address": "0xcaaa93712bdac37f736c323c93d4d5fdefcc31cc",
// }, {
//   "token": "Carbon",
//   "code": "CRBN",
//   "contract_address": "0xCdeee767beD58c5325f68500115d4B722b3724EE",
// }, {
//   "token": "Tadpole",
//   "code": "TAD",
//   "contract_address": "0x9f7229aF0c4b9740e207Ea283b9094983f78ba04",
// }, {
//   "token": "YOYOW",
//   "code": "YOYOW",
//   "contract_address": "0xcbeaec699431857fdb4d37addbbdc20e132d4903",
// }, {
//   "token": "IOT Chain",
//   "code": "ITC",
//   "contract_address": "0x5e6b6d9abad9093fdc861ea1600eba1b355cd940",
// }, {
//   "token": "DOS Network Token",
//   "code": "DOS",
//   "contract_address": "0x0A913beaD80F321E7Ac35285Ee10d9d922659cB7",
// }, {
//   "token": "LibraToken",
//   "code": "LBA",
//   "contract_address": "0xfe5f141bf94fe84bc28ded0ab966c16b17490657",
// }, {
//   "token": "BitSpawn Token",
//   "code": "SPWN",
//   "contract_address": "0xe516d78d784c77d479977be58905b3f2b1111126",
// }, {
//   "token": "YOP",
//   "code": "YOP",
//   "contract_address": "0xae1eaae3f627aaca434127644371b67b18444051",
// }, {
//   "token": "ABCC Token",
//   "code": "AT",
//   "contract_address": "0xbf8fb919a8bbf28e590852aef2d284494ebc0657",
// }, {
//   "token": "Behodler.io",
//   "code": "EYE",
//   "contract_address": "0x155ff1A85F440EE0A382eA949f24CE4E0b751c65",
// }, {
//   "token": "aXpire",
//   "code": "AXPR",
//   "contract_address": "0xdD0020B1D5Ba47A54E2EB16800D73Beb6546f91A",
// }, {
//   "token": "Hydro Protocol",
//   "code": "HOT",
//   "contract_address": "0x9af839687f6c94542ac5ece2e317daae355493a1",
// }, {
//   "token": "Genesis Vision",
//   "code": "GVT",
//   "contract_address": "0x103c3A209da59d3E7C4A89307e66521e081CFDF0",
// }, {
//   "token": "Xaurum",
//   "code": "Xaurum",
//   "contract_address": "0x4DF812F6064def1e5e029f1ca858777CC98D2D81",
// }, {
//   "token": "1World",
//   "code": "1WO",
//   "contract_address": "0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23",
// }, {
//   "token": "TaTaTu",
//   "code": "TTU",
//   "contract_address": "0x9cda8a60dd5afa156c95bd974428d91a0812e054",
// }, {
//   "token": "BitBall",
//   "code": "BTB",
//   "contract_address": "0x06e0feb0d74106c7ada8497754074d222ec6bcdf",
// }, {
//   "token": "DAOstack",
//   "code": "GEN",
//   "contract_address": "0x543ff227f64aa17ea132bf9886cab5db55dcaddf",
// }, {
//   "token": "Matryx",
//   "code": "MTX",
//   "contract_address": "0x0af44e2784637218dd1d32a322d44e603a8f0c6a",
// }, {
//   "token": "EXRP Network",
//   "code": "EXRN",
//   "contract_address": "0xe469c4473af82217b30cf17b10bcdb6c8c796e75",
// }, {
//   "token": "Rapids",
//   "code": "RPD",
//   "contract_address": "0x4bf4f2ea258bf5cb69e9dc0ddb4a7a46a7c10c53",
// }, {
//   "token": "Neumark",
//   "code": "NEU",
//   "contract_address": "0xa823e6722006afe99e91c30ff5295052fe6b8e32",
// }, {
//   "token": "NeuroToken",
//   "code": "NTK",
//   "contract_address": "0x69beab403438253f13b6e92db91f7fb849258263",
// }, {
//   "token": "Eden Coin",
//   "code": "EDN",
//   "contract_address": "0x89020f0D5C5AF4f3407Eb5Fe185416c457B0e93e",
// }, {
//   "token": "Shadows Network",
//   "code": "DOWS",
//   "contract_address": "0x661ab0ed68000491d98c796146bcf28c20d7c559",
// }, {
//   "token": "WePower",
//   "code": "WPR",
//   "contract_address": "0x4CF488387F035FF08c371515562CBa712f9015d4",
// }, {
//   "token": "MedToken",
//   "code": "MTN",
//   "contract_address": "0x41dbecc1cdc5517c6f76f6a6e836adbee2754de3",
// }, {
//   "token": "renDOGE",
//   "code": "renDOGE",
//   "contract_address": "0x3832d2F059E55934220881F831bE501D180671A7",
// }, {
//   "token": "https://unimex.network/",
//   "code": "UMX",
//   "contract_address": "0x10be9a8dae441d276a5027936c3aaded2d82bc15",
// }, {
//   "token": "Portion Token",
//   "code": "PRT",
//   "contract_address": "0x6D0F5149c502faf215C89ab306ec3E50b15e2892",
// }, {
//   "token": "indaHash Coin",
//   "code": "IDH",
//   "contract_address": "0x5136c98a80811c3f46bdda8b5c4555cfd9f812f0",
// }, {
//   "token": "ESSENTIA",
//   "code": "ESS",
//   "contract_address": "0xfc05987bd2be489accf0f509e44b0145d68240f7",
// }, {
//   "token": "UnlimitedIP Token",
//   "code": "UIP",
//   "contract_address": "0x4290563c2d7c255b5eec87f2d3bd10389f991d68",
// }, {
//   "token": "Simple Token",
//   "code": "ST",
//   "contract_address": "0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca",
// }, {
//   "token": "DigitexFutures",
//   "code": "DGTX",
//   "contract_address": "0xc666081073E8DfF8D3d1c2292A29aE1A2153eC09",
// }, {
//   "token": "Patientory",
//   "code": "PTOY",
//   "contract_address": "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06",
// }, {
//   "token": "Amon",
//   "code": "AMN",
//   "contract_address": "0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c",
// }, {
//   "token": "IONChain Token",
//   "code": "IONC",
//   "contract_address": "0xbc647aad10114b89564c0a7aabe542bd0cf2c5af",
// }, {
//   "token": "UCOT",
//   "code": "UCT",
//   "contract_address": "0x3c4bEa627039F0B7e7d21E34bB9C9FE962977518",
// }, {
//   "token": "Lendingblock",
//   "code": "LND",
//   "contract_address": "0x0947b0e6d821378805c9598291385ce7c791a6b2",
// }, {
//   "token": "DomRaiderToken",
//   "code": "DRT",
//   "contract_address": "0x9af4f26941677c706cfecf6d3379ff01bb85d5ab",
// }, {
//   "token": "VALID",
//   "code": "VLD",
//   "contract_address": "0x922ac473a3cc241fd3a0049ed14536452d58d73c",
// }, {
//   "token": "AidCoin",
//   "code": "AID",
//   "contract_address": "0x37e8789bb9996cac9156cd5f5fd32599e6b91289",
// }, {
//   "token": "BOB Token",
//   "code": "BOB",
//   "contract_address": "0xDF347911910b6c9A4286bA8E2EE5ea4a39eB2134",
// }, {
//   "token": "BAC",
//   "code": "BAC",
//   "contract_address": "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a",
// }, {
//   "token": "MediShares",
//   "code": "MDS",
//   "contract_address": "0x66186008C1050627F979d464eABb258860563dbE",
// }, {
//   "token": "DATA Economy Index",
//   "code": "DATA",
//   "contract_address": "0x33d63ba1e57e54779f7ddaeaa7109349344cf5f1",
// }, {
//   "token": "XMAX",
//   "code": "XMX",
//   "contract_address": "0x0f8c45b896784a1e408526b9300519ef8660209c",
// }, {
//   "token": "MoneyToken",
//   "code": "IMT",
//   "contract_address": "0x13119e34e140097a507b07a5564bde1bc375d9e6",
// }, {
//   "token": "WINGS",
//   "code": "WINGS",
//   "contract_address": "0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
// }, {
//   "token": "Zippie",
//   "code": "ZIPT",
//   "contract_address": "0xedd7c94fd7b4971b916d15067bc454b9e1bad980",
// }, {
//   "token": "stakedETH",
//   "code": "stETH",
//   "contract_address": "0xdfe66b14d37c77f4e9b180ceb433d1b164f0281d",
// }, {
//   "token": "CoinUs",
//   "code": "CNUS",
//   "contract_address": "0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308",
// }, {
//   "token": "Snetwork",
//   "code": "SNET",
//   "contract_address": "0xff19138b039d938db46bdda0067dc4ba132ec71c",
// }, {
//   "token": "Humaniq",
//   "code": "HMQ",
//   "contract_address": "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908",
// }, {
//   "token": "qiibeeToken",
//   "code": "QBX",
//   "contract_address": "0x2467aa6b5a2351416fd4c3def8462d841feeecec",
// }, {
//   "token": "Robotina token",
//   "code": "ROX",
//   "contract_address": "0x574f84108a98c575794f75483d801d1d5dc861a5",
// }, {
//   "token": "Paint",
//   "code": "PAINT",
//   "contract_address": "0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042",
// }, {
//   "token": "UCASH",
//   "code": "UCASH",
//   "contract_address": "0x92e52a1a235d9a103d970901066ce910aacefd37",
// }, {
//   "token": "Zloadr Token",
//   "code": "ZDR",
//   "contract_address": "0xbdfa65533074b0b23ebc18c7190be79fa74b30c2",
// }, {
//   "token": "COS",
//   "code": "COS",
//   "contract_address": "0x7d3cb11f8c13730c24d01826d8f2005f0e1b348f",
// }, {
//   "token": "SWARM",
//   "code": "SWM",
//   "contract_address": "0x3505f494c3f0fed0b594e01fa41dd3967645ca39",
// }, {
//   "token": "Posscoin",
//   "code": "POSS",
//   "contract_address": "0x6b193e107a773967bd821bcf8218f3548cfa2503",
// }, {
//   "token": "PolkaRareToken",
//   "code": "PRARE",
//   "contract_address": "0x2c2f7e7c5604d162d75641256b80f1bf6f4dc796",
// }, {
//   "token": "Traxia Membership Token",
//   "code": "TMT",
//   "contract_address": "0x3209f98bebf0149b769ce26d71f7aea8e435efea",
// }, {
//   "token": "Digix Gold Token",
//   "code": "DGX",
//   "contract_address": "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
// }, {
//   "token": "DePay",
//   "code": "DEPAY",
//   "contract_address": "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
// }, {
//   "token": "Centra",
//   "code": "CTR",
//   "contract_address": "0x96A65609a7B84E8842732DEB08f56C3E21aC6f8a",
// }, {
//   "token": "BitScreenerToken",
//   "code": "BITX",
//   "contract_address": "0xff2b3353c3015e9f1fbf95b9bda23f58aa7ce007",
// }, {
//   "token": "GSENetwork",
//   "code": "GSE",
//   "contract_address": "0xe530441f4f73bdb6dc2fa5af7c3fc5fd551ec838",
// }, {
//   "token": "NEXT",
//   "code": "NEXT",
//   "contract_address": "0x377d552914e7a104bc22b4f3b6268ddc69615be7",
// }, {
//   "token": "Stacker Ventures Token",
//   "code": "STACK",
//   "contract_address": "0xe0955f26515d22e347b17669993fcefcc73c3a0a",
// }, {
//   "token": "AdBank",
//   "code": "ADB",
//   "contract_address": "0x2baac9330cf9ac479d819195794d79ad0c7616e3",
// }, {
//   "token": "APYSwap",
//   "code": "APYS",
//   "contract_address": "0xf7413489c474ca4399eee604716c72879eea3615",
// }, {
//   "token": "Own",
//   "code": "CHX",
//   "contract_address": "0x1460a58096d80a50a2f1f956dda497611fa4f165",
// }, {
//   "token": "DAV Token",
//   "code": "DAV",
//   "contract_address": "0xd82df0abd3f51425eb15ef7580fda55727875f14",
// }, {
//   "token": "Primas Token",
//   "code": "PST",
//   "contract_address": "0x5d4abc77b8405ad177d8ac6682d584ecbfd46cec",
// }, {
//   "token": "Flixx",
//   "code": "FLIXX",
//   "contract_address": "0xf04a8ac553fcedb5ba99a64799155826c136b0be",
// }, {
//   "token": "Flyp.me",
//   "code": "FYP",
//   "contract_address": "0x8f0921f30555624143d427b340b1156914882c10",
// }, {
//   "token": "Rating",
//   "code": "Rating",
//   "contract_address": "0xe8663a64a96169ff4d95b4299e7ae9a76b905b31",
// }, {
//   "token": "Kcash",
//   "code": "KCASH",
//   "contract_address": "0x32d74896f05204d1b6ae7b0a3cebd7fc0cd8f9c7",
// }, {
//   "token": "Tapmydata",
//   "code": "TAP",
//   "contract_address": "0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d",
// }, {
//   "token": "Sapien Network",
//   "code": "SPN",
//   "contract_address": "0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a",
// }, {
//   "token": "FintruX Network",
//   "code": "FTX",
//   "contract_address": "0xd559f20296ff4895da39b5bd9add54b442596a61",
// }, {
//   "token": "0xcert Protocol Token",
//   "code": "ZXC",
//   "contract_address": "0x83e2be8d114f9661221384b3a50d24b96a5653f5",
// }, {
//   "token": "PHI Token",
//   "code": "PHI",
//   "contract_address": "0x13c2fab6354d3790d8ece4f0f1a3280b4a25ad96",
// }, {
//   "token": "OriginSport Token",
//   "code": "ORS",
//   "contract_address": "0xeb9a4b185816c354db92db09cc3b50be60b901b6",
// }, {
//   "token": "LunaChow",
//   "code": "LUCHOW",
//   "contract_address": "0xa5ef74068d04ba0809b7379dd76af5ce34ab7c57",
// }, {
//   "token": "Tripio",
//   "code": "TRIO",
//   "contract_address": "0x8b40761142b9aa6dc8964e61d0585995425c3d94",
// }, {
//   "token": "Auctus",
//   "code": "AUC",
//   "contract_address": "0xc12d099be31567add4e4e4d0d45691c3f58f5663",
// }, {
//   "token": "UBEX Token",
//   "code": "UBEX",
//   "contract_address": "0x6704b673c70de9bf74c8fba4b4bd748f0e2190e1",
// }, {
//   "token": "BOX Token",
//   "code": "BOX",
//   "contract_address": "0xe1A178B681BD05964d3e3Ed33AE731577d9d96dD",
// }, {
//   "token": "Inmediate",
//   "code": "DIT",
//   "contract_address": "0xf14922001a2fb8541a433905437ae954419c2439",
// }, {
//   "token": "CrowdWizToken",
//   "code": "WIZ",
//   "contract_address": "0x2f9b6779c37df5707249eeb3734bbfc94763fbe2",
// }, {
//   "token": "Everex",
//   "code": "EVX",
//   "contract_address": "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
// }, {
//   "token": "Katalyo Token",
//   "code": "KTLYO",
//   "contract_address": "0x24E3794605C84E580EEA4972738D633E8a7127c8",
// }, {
//   "token": "PalletOneToken",
//   "code": "PTN",
//   "contract_address": "0xfe76be9cec465ed3219a9972c21655d57d21aec6",
// }, {
//   "token": "MarsToken",
//   "code": "Mars",
//   "contract_address": "0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7",
// }, {
//   "token": "Aluna",
//   "code": "ALN",
//   "contract_address": "0x8185bc4757572da2a610f887561c32298f1a5748",
// }, {
//   "token": "HASHGARD",
//   "code": "GARD",
//   "contract_address": "0x5c64031c62061865e5fd0f53d3cdaef80f72e99d",
// }, {
//   "token": "HashCoin",
//   "code": "HSC",
//   "contract_address": "0x2bba3cf6de6058cc1b4457ce00deb359e2703d7f",
// }, {
//   "token": "Trustcoin",
//   "code": "TRST",
//   "contract_address": "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b",
// }, {
//   "token": "Non-Fungible Yearn",
//   "code": "NFY",
//   "contract_address": "0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
// }, {
//   "token": "GAT",
//   "code": "GAT",
//   "contract_address": "0x687174f8c49ceb7729d925c3a961507ea4ac7b28",
// }, {
//   "token": "ASIA COIN",
//   "code": "ASIA",
//   "contract_address": "0xf519381791c03dd7666c142d4e49fd94d3536011",
// }, {
//   "token": "Streamity",
//   "code": "STM",
//   "contract_address": "0x0e22734e078d6e399bcee40a549db591c4ea46cb",
// }, {
//   "token": "Hacken",
//   "code": "HKN",
//   "contract_address": "0x9e6b2b11542f2bc52f3029077ace37e8fd838d7f",
// }, {
//   "token": "Upfiring",
//   "code": "UFR",
//   "contract_address": "0xea097a2b1db00627b2fa17460ad260c016016977",
// }, {
//   "token": "Mothership",
//   "code": "MSP",
//   "contract_address": "0x68AA3F232dA9bdC2343465545794ef3eEa5209BD",
// }, {
//   "token": "FLIP",
//   "code": "FLP",
//   "contract_address": "0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3",
// }, {
//   "token": "Digital Reserve Currency",
//   "code": "DRC",
//   "contract_address": "0xa150Db9b1Fa65b44799d4dD949D922c0a33Ee606",
// }, {
//   "token": "X8XToken",
//   "code": "X8X",
//   "contract_address": "0x910dfc18d6ea3d6a7124a6f8b5458f281060fa4c",
// }, {
//   "token": "MobileGo",
//   "code": "MGO",
//   "contract_address": "0x40395044Ac3c0C57051906dA938B54BD6557F212",
// }, {
//   "token": "BITTO",
//   "code": "BITTO",
//   "contract_address": "0x55a290f08Bb4CAe8DcF1Ea5635A3FCfd4Da60456",
// }, {
//   "token": "Starbase",
//   "code": "STAR",
//   "contract_address": "0xf70a642bd387f94380ffb90451c2c81d4eb82cbc",
// }, {
//   "token": "MMToken",
//   "code": "MM",
//   "contract_address": "0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304",
// }, {
//   "token": "DEBITUM",
//   "code": "DEB",
//   "contract_address": "0x151202c9c18e495656f372281f493eb7698961d5",
// }, {
//   "token": "NANJCOIN",
//   "code": "NANJ",
//   "contract_address": "0xffe02ee4c69edf1b340fcad64fbd6b37a7b9e265",
// }, {
//   "token": "Sharpay",
//   "code": "S",
//   "contract_address": "0x96b0bf939d9460095c15251f71fda11e41dcbddb",
// }, {
//   "token": "Faceter",
//   "code": "FACE",
//   "contract_address": "0x1ccaa0f2a7210d76e1fdec740d5f323e2e1b1672",
// }, {
//   "token": "DMarket",
//   "code": "DMT",
//   "contract_address": "0x2ccbff3a042c68716ed2a2cb0c544a9f1d1935e1",
// }, {
//   "token": "ATN",
//   "code": "ATN",
//   "contract_address": "0x461733c17b0755ca5649b6db08b3e213fcf22546",
// }, {
//   "token": "UltrainGas",
//   "code": "UGAS",
//   "contract_address": "0x8716fc5da009d3a208f0178b637a50f4ef42400f",
// }, {
//   "token": "BGGToken",
//   "code": "BGG",
//   "contract_address": "0xea54c81fe0f72de8e86b6dc78a9271aa3925e3b5",
// }, {
//   "token": "Friendz Coin",
//   "code": "FDZ",
//   "contract_address": "0x23352036e911a22cfc692b5e2e196692658aded9",
// }, {
//   "token": "PYLNT",
//   "code": "PYLNT",
//   "contract_address": "0xd8924385cd46e6af6f377871c732bde2f8e9dd18",
// }, {
//   "token": "Pylon",
//   "code": "PYLNT",
//   "contract_address": "0x7703c35cffdc5cda8d27aa3df2f9ba6964544b6e",
// }, {
//   "token": "Ethverse Token",
//   "code": "ETHV",
//   "contract_address": "0xEeEeeeeEe2aF8D0e1940679860398308e0eF24d6",
// }, {
//   "token": "Menlo One",
//   "code": "ONE",
//   "contract_address": "0x4d807509aece24c0fa5a102b6a3b059ec6e14392",
// }, {
//   "token": "Zoracles",
//   "code": "ZORA",
//   "contract_address": "0xD8E3FB3b08eBA982F2754988d70D57eDc0055ae6",
// }, {
//   "token": "OneRoot Network",
//   "code": "RNT",
//   "contract_address": "0xff603f43946a3a28df5e6a73172555d8c8b02386",
// }, {
//   "token": "Tolar Token",
//   "code": "TOL",
//   "contract_address": "0xd07d9fe2d2cc067015e2b4917d24933804f42cfa",
// }, {
//   "token": "Niobium",
//   "code": "NBC",
//   "contract_address": "0x9f195617fa8fbad9540c5d113a99a0a0172aaedc",
// }, {
//   "token": "FTI",
//   "code": "FTI",
//   "contract_address": "0x943ed852dadb5c3938ecdc6883718df8142de4c8",
// }, {
//   "token": "CanYaCoin",
//   "code": "CAN",
//   "contract_address": "0x1d462414fe14cf489c7a21cac78509f4bf8cd7c0",
// }, {
//   "token": "BondAppetit Governance",
//   "code": "BAG",
//   "contract_address": "0x28a06c02287e657ec3f8e151a13c36a1d43814b0",
// }, {
//   "token": "INVERSE",
//   "code": "XIV",
//   "contract_address": "0x44f262622248027f8e2a8fb1090c4cf85072392c",
// }, {
//   "token": "HAC Token",
//   "code": "HAC",
//   "contract_address": "0x43567eb78638A55bbE51E9f9FB5B2D7AD1F125aa",
// }, {
//   "token": "Pepemon",
//   "code": "PPBLZ",
//   "contract_address": "0x4D2eE5DAe46C86DA2FF521F7657dad98834f97b8",
// }, {
//   "token": "Delphy Token",
//   "code": "DPY",
//   "contract_address": "0x6c2adc2073994fb2ccc5032cc2906fa221e9b391",
// }, {
//   "token": "LiteXToken",
//   "code": "LXT",
//   "contract_address": "0xbc46d9961a3932f7d6b64abfdec80c1816c4b835",
// }, {
//   "token": "Substratum",
//   "code": "SUB",
//   "contract_address": "0x8d75959f1e61ec2571aa72798237101f084de63a",
// }, {
//   "token": "xSigma",
//   "code": "SIG",
//   "contract_address": "0x7777777777697cfeecf846a76326da79cc606517",
// }, {
//   "token": "Blockchain Cuties Universe Governance Token",
//   "code": "BCUG",
//   "contract_address": "0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af",
// }, {
//   "token": "BitDegree",
//   "code": "BDG",
//   "contract_address": "0x1961b3331969ed52770751fc718ef530838b6dee",
// }, {
//   "token": "LocalCoinSwap Cryptoshare",
//   "code": "LCS",
//   "contract_address": "0xaa19961b6b858d9f18a115f25aa1d98abc1fdba8",
// }, {
//   "token": "EventChain",
//   "code": "EVC",
//   "contract_address": "0xb62d18dea74045e822352ce4b3ee77319dc5ff2f",
// }, {
//   "token": "ElectrifyAsia",
//   "code": "ELEC",
//   "contract_address": "0xd49ff13661451313ca1553fd6954bd1d9b6e02b9",
// }, {
//   "token": "CoinFi",
//   "code": "COFI",
//   "contract_address": "0x3136ef851592acf49ca4c825131e364170fa32b3",
// }, {
//   "token": "GourmetGalaxy",
//   "code": "GUM",
//   "contract_address": "0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24",
// }, {
//   "token": "XCELTOKEN PLUS",
//   "code": "XLAB",
//   "contract_address": "0x8c4e7f814d40f8929f9112c5d09016f923d34472",
// }, {
//   "token": "BANCA",
//   "code": "BANCA",
//   "contract_address": "0x998b3b82bc9dba173990be7afb772788b5acb8bd",
// }, {
//   "token": "FLUX",
//   "code": "FLUX",
//   "contract_address": "0x469eDA64aEd3A3Ad6f868c44564291aA415cB1d9",
// }, {
//   "token": "Bezop",
//   "code": "Bez",
//   "contract_address": "0x8a1e3930fde1f151471c368fdbb39f3f63a65b55",
// }, {
//   "token": "UNetworkToken",
//   "code": "UUU",
//   "contract_address": "0x3543638ed4a9006e4840b105944271bcea15605d",
// }, {
//   "token": "Indorse",
//   "code": "IND",
//   "contract_address": "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
// }, {
//   "token": "BlitzPredict",
//   "code": "XBP",
//   "contract_address": "0x28dee01d53fed0edf5f6e310bf8ef9311513ae40",
// }, {
//   "token": "AltEstate token",
//   "code": "ALT",
//   "contract_address": "0x419b8ed155180a8c9c64145e76dad49c0a4efb97",
// }, {
//   "token": "MetaGraphChain",
//   "code": "BKBT",
//   "contract_address": "0x6a27348483d59150ae76ef4c0f3622a78b0ca698",
// }, {
//   "token": "Indexed",
//   "code": "NDX",
//   "contract_address": "0x86772b1409b61c639eaac9ba0acfbb6e238e5f83",
// }, {
//   "token": "NOAHCOIN",
//   "code": "NOAH",
//   "contract_address": "0x58a4884182d9e835597f405e5f258290e46ae7c2",
// }, {
//   "token": "QChi",
//   "code": "QCH",
//   "contract_address": "0x687bfc3e73f6af55f0ccca8450114d107e781a0e",
// }, {
//   "token": "BTOCoin",
//   "code": "BTO",
//   "contract_address": "0x36905fc93280f52362a1cbab151f25dc46742fb5",
// }, {
//   "token": "Sharder",
//   "code": "SS",
//   "contract_address": "0xbbff862d906e348e9946bfb2132ecb157da3d4b4",
// }, {
//   "token": "REMME",
//   "code": "REM",
//   "contract_address": "0x83984d6142934bb535793a82adb0a46ef0f66b6d",
// }, {
//   "token": "CNN Token",
//   "code": "CNN",
//   "contract_address": "0x8713d26637cf49e1b6b4a7ce57106aabc9325343",
// }, {
//   "token": "FERA",
//   "code": "FERA",
//   "contract_address": "0x539F3615C1dBAfa0D008d87504667458acBd16Fa",
// }, {
//   "token": "I HOUSE TOKEN",
//   "code": "IHT",
//   "contract_address": "0xeda8b016efa8b1161208cf041cd86972eee0f31e",
// }, {
//   "token": "ZeusShieldCoin",
//   "code": "ZSC",
//   "contract_address": "0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63",
// }, {
//   "token": "NeuroChain Clausius",
//   "code": "NCC",
//   "contract_address": "0x5d48f293baed247a2d0189058ba37aa238bd4725",
// }, {
//   "token": "DAOventuresDeFi",
//   "code": "DVD",
//   "contract_address": "0x77dce26c03a9b833fc2d7c31c22da4f42e9d9582",
// }, {
//   "token": "Bethereum",
//   "code": "BETHER",
//   "contract_address": "0x14c926f2290044b647e1bf2072e67b495eff1905",
// }, {
//   "token": "Fuel Token",
//   "code": "FUEL",
//   "contract_address": "0xea38eaa3c86c8f9b751533ba2e562deb9acded40",
// }, {
//   "token": "Endor Protocol Token",
//   "code": "EDR",
//   "contract_address": "0xc528c28fec0a90c083328bc45f587ee215760a0f",
// }, {
//   "token": "OwnData",
//   "code": "OWN",
//   "contract_address": "0x170b275ced089fffaebfe927f445a350ed9160dc",
// }, {
//   "token": "SP8DE Token",
//   "code": "SPX",
//   "contract_address": "0x05aaaa829afa407d83315cded1d45eb16025910c",
// }, {
//   "token": "Hero Origen",
//   "code": "HERO",
//   "contract_address": "0x02585e4a14da274d02df09b222d4606b10a4e940",
// }, {
//   "token": "Lympo Market Token",
//   "code": "LMT",
//   "contract_address": "0x327673ae6b33bd3d90f0096870059994f30dc8af",
// }, {
//   "token": "EZOOW",
//   "code": "EZW",
//   "contract_address": "0x78a2a1029e3168b49d3a276c787050ff5106dcf2",
// }, {
//   "token": "Stox",
//   "code": "STX",
//   "contract_address": "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
// }, {
//   "token": "Vodi X",
//   "code": "VDX",
//   "contract_address": "0x91e64f39c1fe14492e8fdf5a8b0f305bd218c8a1",
// }, {
//   "token": "Work Quest Token",
//   "code": "WQT",
//   "contract_address": "0x06677dc4fe12d3ba3c7ccfd0df8cd45e4d4095bf",
// }, {
//   "token": "Chi Gastoken by 1inch",
//   "code": "CHI",
//   "contract_address": "0x0000000000004946c0e9F43F4Dee607b0eF1fA1c",
// }, {
//   "token": "AdToken",
//   "code": "ADT",
//   "contract_address": "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
// }, {
//   "token": "HYDRO TOKEN",
//   "code": "HYDRO",
//   "contract_address": "0x946112efab61c3636cbd52de2e1392d7a75a6f01",
// }, {
//   "token": "AstroTools.io",
//   "code": "ASTRO",
//   "contract_address": "0xcbd55D4fFc43467142761A764763652b48b969ff",
// }, {
//   "token": "Fire Lotto",
//   "code": "FLOT",
//   "contract_address": "0x049399a6b048d52971f7d122ae21a1532722285f",
// }, {
//   "token": "Typerium",
//   "code": "TYPE",
//   "contract_address": "0xeaf61fc150cd5c3bea75744e830d916e60ea5a9f",
// }, {
//   "token": "AppCoins",
//   "code": "APPC",
//   "contract_address": "0x1a7a8bd9106f2b8d977e08582dc7d24c723ab0db",
// }, {
//   "token": "Vox.Finance",
//   "code": "VOX",
//   "contract_address": "0x12D102F06da35cC0111EB58017fd2Cd28537d0e1",
// }, {
//   "token": "RvT",
//   "code": "RVT",
//   "contract_address": "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244",
// }, {
//   "token": "Hms Token",
//   "code": "HMC",
//   "contract_address": "0xAa0bb10CEc1fa372eb3Abc17C933FC6ba863DD9E",
// }, {
//   "token": "Aigang",
//   "code": "AIX",
//   "contract_address": "0x1063ce524265d5a3a624f4914acd573dd89ce988",
// }, {
//   "token": "OTCBTC Token",
//   "code": "OTB",
//   "contract_address": "0xa86a0da9d05d0771955df05b44ca120661af16de",
// }, {
//   "token": "Omnitude",
//   "code": "ECOM",
//   "contract_address": "0x171d750d42d661b62c277a6b486adb82348c3eca",
// }, {
//   "token": "Medical Token Currency",
//   "code": "MTC",
//   "contract_address": "0x905e337c6c8645263d3521205aa37bf4d034e745",
// }, {
//   "token": "SRCOIN",
//   "code": "SRCOIN",
//   "contract_address": "0xef8cf79c21637fc6f951bcac348915508a639a41",
// }, {
//   "token": "smartshare token",
//   "code": "SSP",
//   "contract_address": "0x624d520bab2e4ad83935fa503fb130614374e850",
// }, {
//   "token": "Mobile Integrated Blockchain",
//   "code": "MIB",
//   "contract_address": "0x146d8d942048ad517479c9bab1788712af180fde",
// }, {
//   "token": "Gene Source Code Chain",
//   "code": "Gene",
//   "contract_address": "0x884181554dfa9e578d36379919c05c25dc4a15bb",
// }, {
//   "token": "Protector Roge",
//   "code": "PROGE",
//   "contract_address": "0x282d0ad1fa03dfbdb88243b958e77349c73737d1",
// }, {
//   "token": "Dether",
//   "code": "DTH",
//   "contract_address": "0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190",
// }, {
//   "token": "Cryption Network Token",
//   "code": "CNT",
//   "contract_address": "0x429876c4a6f89fb470e92456b8313879df98b63c",
// }, {
//   "token": "Jetcoin",
//   "code": "JET",
//   "contract_address": "0x8727c112c712c4a03371ac87a74dd6ab104af768",
// }, {
//   "token": "Origo",
//   "code": "OGO",
//   "contract_address": "0xff0e5e014cf97e0615cb50f6f39da6388e2fae6e",
// }, {
//   "token": "WTT",
//   "code": "WTT",
//   "contract_address": "0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda",
// }, {
//   "token": "Goldmint MNT Prelaunch Token",
//   "code": "MNTP",
//   "contract_address": "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc",
// }, {
//   "token": "ContentBox Token",
//   "code": "BOX",
//   "contract_address": "0x63f584fa56e60e4d0fe8802b27c7e6e3b33e007f",
// }, {
//   "token": "InterValue",
//   "code": "INVE",
//   "contract_address": "0xdac4ae188ace3c8985765edc6c9b4739d4845ddc",
// }, {
//   "token": "SwarmCity",
//   "code": "SWT",
//   "contract_address": "0xb9e7f8568e08d5659f5d29c4997173d84cdf2607",
// }, {
//   "token": "GENE TOKEN",
//   "code": "PARKGENE",
//   "contract_address": "0x6dd4e4aad29a40edd6a409b9c1625186c9855b4d",
// }, {
//   "token": "BCDN",
//   "code": "BCDN",
//   "contract_address": "0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40",
// }, {
//   "token": "DeFiWizard Token",
//   "code": "DWZ",
//   "contract_address": "0x7dee45dff03ec7137979586ca20a2f4917bac9fa",
// }, {
//   "token": "Sentinel Chain",
//   "code": "SENC",
//   "contract_address": "0xa13f0743951b4f6e3e3aa039f682e17279f52bc3",
// }, {
//   "token": "Ethereum Blue",
//   "code": "BLUE",
//   "contract_address": "0x539efe69bcdd21a83efd9122571a64cc25e0282b",
// }, {
//   "token": "Vortex DeFi",
//   "code": "VTX",
//   "contract_address": "0xceb286c9604c542d3cc08b41aa6c9675b078a832",
// }, {
//   "token": "RightMesh Token",
//   "code": "RMESH",
//   "contract_address": "0x8d5682941ce456900b12d47ac06a88b47c764ce1",
// }, {
//   "token": "DoYourTip",
//   "code": "DYT",
//   "contract_address": "0x740623d2c797b7D8D1EcB98e9b4Afcf99Ec31E14",
// }, {
//   "token": "MidasProtocol",
//   "code": "MAS",
//   "contract_address": "0x23ccc43365d9dd3882eab88f43d515208f832430",
// }, {
//   "token": "Bitether",
//   "code": "BTR",
//   "contract_address": "0x499a6b77bc25c26bcf8265e2102b1b3dd1617024",
// }, {
//   "token": "GoToken",
//   "code": "GOT",
//   "contract_address": "0x423b5f62b328d0d6d44870f4eee316befa0b2df5",
// }, {
//   "token": "Cobinhood",
//   "code": "COB",
//   "contract_address": "0xb2f7eb1f2c37645be61d73953035360e768d81e6",
// }, {
//   "token": "ThriveToken",
//   "code": "THRT",
//   "contract_address": "0x4f27053f32eda8af84956437bc00e5ffa7003287",
// }, {
//   "token": "WIKI Token",
//   "code": "WIKI",
//   "contract_address": "0x66bad545596fb17a0b4ebdc003a85def10e8f6ae",
// }, {
//   "token": "Tokenbox",
//   "code": "TBX",
//   "contract_address": "0x3a92bd396aef82af98ebc0aa9030d25a23b11c6b",
// }, {
//   "token": "HeroNodeToken",
//   "code": "HER",
//   "contract_address": "0x491c9a23db85623eed455a8efdd6aba9b911c5df",
// }, {
//   "token": "Ethereum Gold",
//   "code": "ETG",
//   "contract_address": "0x28c8d01ff633ea9cd8fc6a451d7457889e698de6",
// }, {
//   "token": "Zebi Coin",
//   "code": "ZCO",
//   "contract_address": "0x2008e3057bd734e10ad13c9eae45ff132abc1722",
// }, {
//   "token": "UNIFUND",
//   "code": "iFUND",
//   "contract_address": "0x04B5E13000C6e9A3255Dc057091F3e3Eeee7b0f0",
// }, {
//   "token": "Po.et",
//   "code": "POE",
//   "contract_address": "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
// }, {
//   "token": "FuzeX",
//   "code": "FXT",
//   "contract_address": "0x1829aa045e21e0d59580024a951db48096e01782",
// }, {
//   "token": "savedroid",
//   "code": "SVD",
//   "contract_address": "0xbdeb4b83251fb146687fa19d1c660f99411eefe3",
// }, {
//   "token": "Omix",
//   "code": "OMX",
//   "contract_address": "0xb5dbc6d3cf380079df3b27135664b6bcf45d1869",
// }, {
//   "token": "renBCH",
//   "code": "renBCH",
//   "contract_address": "0x459086f2376525bdceba5bdda135e4e9d3fef5bf",
// }, {
//   "token": "RARE.UNIQUE",
//   "code": "RARE",
//   "contract_address": "0x93dfaf57d986b9ca77df9376c50878e013d9c7c8",
// }, {
//   "token": "BLOCKMASON CREDIT PROTOCOL TOKEN",
//   "code": "BCPT",
//   "contract_address": "0x1c4481750daa5ff521a2a7490d9981ed46465dbd",
// }, {
//   "token": "TESLA",
//   "code": "TSL",
//   "contract_address": "0x03806ce5ef69bd9780edfb04c29da1f23db96294",
// }, {
//   "token": "ShowHand",
//   "code": "HAND",
//   "contract_address": "0x48c1b2f3efa85fbafb2ab951bf4ba860a08cdbb7",
// }, {
//   "token": "智投链",
//   "code": "IIC",
//   "contract_address": "0xb6f43025b29196af2dddd69b0a58afba079cd600",
// }, {
//   "token": "Welltrado token",
//   "code": "WTL",
//   "contract_address": "0x9a0587eae7ef64b2b38a10442a44cfa43edd7d2a",
// }, {
//   "token": "Decentralized Accessible Content Chain",
//   "code": "DACC",
//   "contract_address": "0xf8c595d070d104377f58715ce2e6c93e49a87f3c",
// }, {
//   "token": "Themis",
//   "code": "GET",
//   "contract_address": "0x60c68a87be1e8a84144b543aacfa77199cd3d024",
// }, {
//   "token": "ChartEx",
//   "code": "CHART",
//   "contract_address": "0x1d37986f252d0e349522ea6c3b98cb935495e63e",
// }, {
//   "token": "Delta",
//   "code": "DLT",
//   "contract_address": "0x07e3c70653548b04f0a75970c1f81b4cbbfb606f",
// }, {
//   "token": "AiLink Token",
//   "code": "ALI",
//   "contract_address": "0x4289c043a12392f1027307fb58272d8ebd853912",
// }, {
//   "token": "BitCapitalVendorToken",
//   "code": "BCV",
//   "contract_address": "0x1014613e2b3cbc4d575054d4982e580d9b99d7b1",
// }, {
//   "token": "Bounty0x",
//   "code": "BNTY",
//   "contract_address": "0xd2d6158683aee4cc838067727209a0aaf4359de3",
// }, {
//   "token": "Berry",
//   "code": "BERRY",
//   "contract_address": "0x6aeb95f06cda84ca345c2de0f3b7f96923a44f4c",
// }, {
//   "token": "SPINDLE",
//   "code": "SPD",
//   "contract_address": "0x1dea979ae76f26071870f824088da78979eb91c8",
// }, {
//   "token": "MT Token",
//   "code": "MT",
//   "contract_address": "0x9b4e2b4b13d125238aa0480dd42b4f6fc71b37cc",
// }, {
//   "token": "Transcodium",
//   "code": "TNS",
//   "contract_address": "0xb0280743b44bf7db4b6be482b2ba7b75e5da096c",
// }, {
//   "token": "Rate3",
//   "code": "RTE",
//   "contract_address": "0x436f0f3a982074c4a05084485d421466a994fe53",
// }, {
//   "token": "SkinCoin",
//   "code": "SKIN",
//   "contract_address": "0x2bdc0d42996017fce214b21607a515da41a9e0c5",
// }, {
//   "token": "HelloGold",
//   "code": "HGT",
//   "contract_address": "0xba2184520a1cc49a6159c57e61e1844e085615b6",
// }, {
//   "token": "ChangeBank",
//   "code": "CAG",
//   "contract_address": "0x7d4b8cce0591c9044a22ee543533b72e976e36c3",
// }, {
//   "token": "Blocktix",
//   "code": "TIX",
//   "contract_address": "0xea1f346faf023f974eb5adaf088bbcdf02d761f4",
// }, {
//   "token": "Bigbom",
//   "code": "BBO",
//   "contract_address": "0x84f7c44b6fed1080f647e354d552595be2cc602f",
// }, {
//   "token": "UnikoinGold",
//   "code": "UKG",
//   "contract_address": "0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b",
// }, {
//   "token": "Gems",
//   "code": "GEM",
//   "contract_address": "0xc7bba5b765581efb2cdd2679db5bea9ee79b201f",
// }, {
//   "token": "DWS",
//   "code": "DWS",
//   "contract_address": "0xf4b54874cd8a6c863e3a904c18fda964661ec363",
// }, {
//   "token": "Storiqa",
//   "code": "STQ",
//   "contract_address": "0x5c3a228510d246b78a3765c20221cbf3082b44a4",
// }, {
//   "token": "PKG Token",
//   "code": "PKG",
//   "contract_address": "0x02f2d4a04e6e01ace88bd2cd632875543b2ef577",
// }, {
//   "token": "Pepedex",
//   "code": "PPDEX",
//   "contract_address": "0xf1F508c7C9f0d1b15a76fbA564eEf2d956220cf7",
// }, {
//   "token": "CPAY",
//   "code": "CPAY",
//   "contract_address": "0x0Ebb614204E47c09B6C3FeB9AAeCad8EE060E23E",
// }, {
//   "token": "Elycoin",
//   "code": "ELY",
//   "contract_address": "0xa95592dcffa3c080b4b40e459c5f5692f67db7f8",
// }, {
//   "token": "QUINADS",
//   "code": "QUIN",
//   "contract_address": "0x86e44543164d9b97b14ef7f6f3ab7ba670cab346",
// }, {
//   "token": "LALA",
//   "code": "LALA",
//   "contract_address": "0xfd107b473ab90e8fbd89872144a3dc92c40fa8c9",
// }, {
//   "token": "Sharedstake.finance",
//   "code": "SGT",
//   "contract_address": "0x24c19f7101c1731b85f1127eaa0407732e36ecdd",
// }, {
//   "token": "Component",
//   "code": "CMP",
//   "contract_address": "0x9f20ed5f919dc1c1695042542c13adcfc100dcab",
// }, {
//   "token": "Zilla",
//   "code": "ZLA",
//   "contract_address": "0xfd8971d5e8e1740ce2d0a84095fca4de729d0c16",
// }, {
//   "token": "Verify",
//   "code": "CRED",
//   "contract_address": "0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd",
// }, {
//   "token": "SNGLS",
//   "code": "SNGLS",
//   "contract_address": "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
// }, {
//   "token": "DATx",
//   "code": "DATx",
//   "contract_address": "0xabbbb6447b68ffd6141da77c18c7b5876ed6c5ab",
// }, {
//   "token": "Bee",
//   "code": "BEE",
//   "contract_address": "0x4d8fc1453a0f359e99c9675954e656d80d996fbf",
// }, {
//   "token": "InsurePal",
//   "code": "IPL",
//   "contract_address": "0x64cdf819d3e75ac8ec217b3496d7ce167be42e80",
// }, {
//   "token": "Zipper",
//   "code": "ZIP",
//   "contract_address": "0xa9d2927d3a04309e008b6af6e2e282ae2952e7fd",
// }, {
//   "token": "Datum",
//   "code": "DAT",
//   "contract_address": "0x81c9151de0c8bafcd325a57e3db5a5df1cebf79c",
// }, {
//   "token": "BoutsPro",
//   "code": "BOUTS",
//   "contract_address": "0x139d9397274bb9e2c29a9aa8aa0b5874d30d62e3",
// }, {
//   "token": "Covalent Token",
//   "code": "COVA",
//   "contract_address": "0xb37a769b37224449d92aac57de379e1267cd3b00",
// }, {
//   "token": "ArbitrageCT",
//   "code": "ARCT",
//   "contract_address": "0x1245ef80f4d9e02ed9425375e8f649b9221b31d8",
// }, {
//   "token": "EchoLink",
//   "code": "EKO",
//   "contract_address": "0xa6a840e50bcaa50da017b91a0d86b8b2d41156ee",
// }, {
//   "token": "BabyPunks",
//   "code": "BPUNKS",
//   "contract_address": "0x095648BC80a7d1Dd16B85E9B84F07463a20f3536",
// }, {
//   "token": "Boxx",
//   "code": "BOXX",
//   "contract_address": "0x780116d91e5592e58a3b3c76a351571b39abcec6",
// }, {
//   "token": "Devery.io",
//   "code": "EVE",
//   "contract_address": "0x923108a439c4e8c2315c4f6521e5ce95b44e9b4c",
// }, {
//   "token": "imbrex",
//   "code": "REX",
//   "contract_address": "0xf05a9382A4C3F29E2784502754293D88b835109C",
// }, {
//   "token": "EduCoin",
//   "code": "EDU",
//   "contract_address": "0xf263292e14d9d8ecd55b58dad1f1df825a874b7c",
// }, {
//   "token": "Dextoken Governance",
//   "code": "DEXG",
//   "contract_address": "0xb81d70802a816b5dacba06d708b5acf19dcd436d",
// }, {
//   "token": "STK",
//   "code": "STK",
//   "contract_address": "0xae73b38d1c9a8b274127ec30160a4927c4d71824",
// }, {
//   "token": "GoldenRatio",
//   "code": "GRT",
//   "contract_address": "0xb83Cd8d39462B761bb0092437d38b37812dd80A2",
// }, {
//   "token": "FUTURAX",
//   "code": "FTXT",
//   "contract_address": "0x41875c2332b0877cdfaa699b641402b7d4642c32",
// }, {
//   "token": "DeltaChain Token",
//   "code": "DELTA",
//   "contract_address": "0xde1e0ae6101b46520cf66fdc0b1059c5cc3d106c",
// }, {
//   "token": "POPCHAIN CASH",
//   "code": "PCH",
//   "contract_address": "0xe3f4b4a5d91e5cb9435b947f090a319737036312",
// }, {
//   "token": "Neural Protocol",
//   "code": "NRP",
//   "contract_address": "0x3918c42f14f2eb1168365f911f63e540e5a306b5",
// }, {
//   "token": "CoinBene Coin",
//   "code": "CONI",
//   "contract_address": "0x2c949199cff14aeaf1b33d64db01f48fb57f592f",
// }, {
//   "token": "ICE ROCK MINING",
//   "code": "ROCK2",
//   "contract_address": "0xC16b542ff490e01fcc0DC58a60e1EFdc3e357cA6",
// }, {
//   "token": "Lunyr",
//   "code": "LUN",
//   "contract_address": "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
// }, {
//   "token": "KWHCoin",
//   "code": "KWH",
//   "contract_address": "0xb8ddc930c2bab6c71610a2be639036e829f9c10b",
// }, {
//   "token": "Feed",
//   "code": "IFT",
//   "contract_address": "0x7654915a1b82d6d2d0afc37c52af556ea8983c7e",
// }, {
//   "token": "EROSCOIN",
//   "code": "ERO",
//   "contract_address": "0x74ceda77281b339142a36817fa5f9e29412bab85",
// }, {
//   "token": "Opus",
//   "code": "OPT",
//   "contract_address": "0x4355fC160f74328f9b383dF2EC589bB3dFd82Ba0",
// }, {
//   "token": "TGAME",
//   "code": "TGAME",
//   "contract_address": "0xf8e06e4e4a80287fdca5b02dccecaa9d0954840f",
// }, {
//   "token": "CEN",
//   "code": "CEN",
//   "contract_address": "0x0bc61dded5f6710c637cf8288eb6058766ce1921",
// }, {
//   "token": "4NEW",
//   "code": "KWATT",
//   "contract_address": "0x241ba672574a78a3a604cdd0a94429a73a84a324",
// }, {
//   "token": "Datarius Credit",
//   "code": "DTRC",
//   "contract_address": "0xc20464e0c373486d2b3335576e83a218b1618a5e",
// }, {
//   "token": "PRG",
//   "code": "PRG",
//   "contract_address": "0x7728dFEF5aBd468669EB7f9b48A7f70a501eD29D",
// }, {
//   "token": "USDQ Stablecoin by Q DAO v1.0",
//   "code": "USDQ",
//   "contract_address": "0x4954db6391f4feb5468b6b943d4935353596aec9",
// }, {
//   "token": "PayFair Token",
//   "code": "PFR",
//   "contract_address": "0xb41422d5a1d5d5c73c229686935b40f881502785",
// }, {
//   "token": "Guppy",
//   "code": "Guppy",
//   "contract_address": "0xf7b098298f7c69fc14610bf71d5e02c60792894c",
// }, {
//   "token": "CyberMusic",
//   "code": "CYMT",
//   "contract_address": "0x78c292d1445e6b9558bf42e8bc369271ded062ea",
// }, {
//   "token": "WABnetwork",
//   "code": "WAB",
//   "contract_address": "0x4bbbc57af270138ef2ff2c50dbfad684e9e0e604",
// }, {
//   "token": "ELTCOIN",
//   "code": "ELTCOIN",
//   "contract_address": "0x44197a4c44d6a059297caf6be4f7e172bd56caaf",
// }, {
//   "token": "Privatix",
//   "code": "PRIX",
//   "contract_address": "0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a",
// }, {
//   "token": "TieToken",
//   "code": "TIE",
//   "contract_address": "0x999967e2ec8a74b7c8e9db19e039d920b31d39d0",
// }, {
//   "token": "HeartBout",
//   "code": "HB",
//   "contract_address": "0x877c7deb5eb1fc5faad30c71e3a6e39dc8b1519f",
// }, {
//   "token": "ModulTrade Token",
//   "code": "MTRc",
//   "contract_address": "0x1e49ff77c355a3e38d6651ce8404af0e48c5395f",
// }, {
//   "token": "DataWallet",
//   "code": "DXT",
//   "contract_address": "0x8db54ca569d3019a2ba126d03c37c44b5ef81ef6",
// }, {
//   "token": "Thingschain",
//   "code": "TIC",
//   "contract_address": "0x72430a612adc007c50e3b6946dbb1bb0fd3101d1",
// }, {
//   "token": "Worldcore",
//   "code": "WRC",
//   "contract_address": "0x72adadb447784dd7ab1f472467750fc485e4cb2d",
// }, {
//   "token": "Lancer Token",
//   "code": "LNC",
//   "contract_address": "0x63e634330a20150dbb61b15648bc73855d6ccf07",
// }, {
//   "token": "Hurify Token",
//   "code": "HUR",
//   "contract_address": "0xcdb7ecfd3403eef3882c65b761ef9b5054890a47",
// }, {
//   "token": "ABX Token",
//   "code": "ABX",
//   "contract_address": "0x9a794dc1939f1d78fa48613b89b8f9d0a20da00e",
// }, {
//   "token": "Crowd Machine Compute Token",
//   "code": "CMCT",
//   "contract_address": "0x47bc01597798dcd7506dcca36ac4302fc93a8cfb",
// }, {
//   "token": "Proton Token",
//   "code": "PTT",
//   "contract_address": "0x4689a4e169eb39cc9078c0940e21ff1aa8a39b9c",
// }, {
//   "token": "Ormeus Coin",
//   "code": "ORME",
//   "contract_address": "0xc96df921009b790dffca412375251ed1a2b75c60",
// }, {
//   "token": "DUO Network Token",
//   "code": "DUO",
//   "contract_address": "0x56e0b2c7694e6e10391e870774daa45cf6583486",
// }, {
//   "token": "Netkoin",
//   "code": "NTK",
//   "contract_address": "0x5d4d57cd06fa7fe99e26fdc481b468f77f05073c",
// }, {
//   "token": "Suretly",
//   "code": "SUR",
//   "contract_address": "0xe120c1ecbfdfea7f0a8f0ee30063491e8c26fedf",
// }, {
//   "token": "TrueDeck",
//   "code": "TDP",
//   "contract_address": "0x5b11aacb6bddb9ffab908fdce739bf4aed554327",
// }, {
//   "token": "JSE Token",
//   "code": "JSE",
//   "contract_address": "0x2d184014b5658c453443aa87c8e9c4d57285620b",
// }, {
//   "token": "BezantToken",
//   "code": "BZNT",
//   "contract_address": "0xe1aee98495365fc179699c1bb3e761fa716bee62",
// }, {
//   "token": "CryCash",
//   "code": "CRC",
//   "contract_address": "0xf41e5fbc2f6aac200dd8619e121ce1f05d150077",
// }, {
//   "token": "JavaScript",
//   "code": "JS",
//   "contract_address": "0x5046e860ff274fb8c66106b0ffb8155849fb0787",
// }, {
//   "token": "Cryptrust",
//   "code": "CTRT",
//   "contract_address": "0x8606a8f28e1e2fd50b9074d65c01548b1f040b32",
// }, {
//   "token": "ThingsOpreatingSystem",
//   "code": "TOS",
//   "contract_address": "0xfb5a551374b656c6e39787b1d3a03feab7f3a98e",
// }, {
//   "token": "Horse",
//   "code": "HORSE",
//   "contract_address": "0x5b0751713b2527d7f002c0c4e2a37e1219610a6b",
// }, {
//   "token": "MIS",
//   "code": "MIS",
//   "contract_address": "0x4b4d2e899658fb59b1d518b68fe836b100ee8958",
// }, {
//   "token": "Aditus",
//   "code": "ADI",
//   "contract_address": "0x8810c63470d38639954c6b41aac545848c46484a",
// }, {
//   "token": "MetaMorph",
//   "code": "METM",
//   "contract_address": "0xfef3884b603c33ef8ed4183346e093a173c94da6",
// }, {
//   "token": "MEDIBIT",
//   "code": "MEDIBIT",
//   "contract_address": "0x737fa0372c8d001904ae6acaf0552d4015f9c947",
// }, {
//   "token": "Incodium",
//   "code": "INCO",
//   "contract_address": "0x4d8bfe7ea0f46486fd40fc4df60cf39f7568bee8",
// }, {
//   "token": "SPARTA",
//   "code": "SPARTA",
//   "contract_address": "0x24aef3bf1a47561500f9430d74ed4097c47f51f2",
// }, {
//   "token": "CONNECT",
//   "code": "CNCT",
//   "contract_address": "0x54a9ed327f2614316914c3f3a782a77d0aa47aee",
// }, {
//   "token": "HyperQuant Token",
//   "code": "HQT",
//   "contract_address": "0x3e1d5a855ad9d948373ae68e4fe1f094612b1322",
// }, {
//   "token": "Vikky Token",
//   "code": "VIKKY",
//   "contract_address": "0xd2946be786f35c3cc402c29b323647abda799071",
// }, {
//   "token": "WILD Token",
//   "code": "WILD",
//   "contract_address": "0xd3c00772b24d997a812249ca637a921e81357701",
// }, {
//   "token": "FOTA",
//   "code": "FOTA",
//   "contract_address": "0x4270bb238f6dd8b1c3ca01f96ca65b2647c06d3c",
// }, {
//   "token": "Alpha Coin",
//   "code": "APC",
//   "contract_address": "0x15bda08c3afbf5955d6e9b235fd55a1fd0dbc829",
// }, {
//   "token": "ITL",
//   "code": "Italian Lira",
//   "contract_address": "0x122A86b5DFF2D085AfB49600b4cd7375D0d94A5f",
// }, {
//   "token": "EvenCoin",
//   "code": "EVN",
//   "contract_address": "0x68909e586eeac8f47315e84b4c9788dd54ef65bb",
// }, {
//   "token": "RNTB Token",
//   "code": "RNTB",
//   "contract_address": "0x1fe70be734e473e5721ea57c8b5b01e6caa52686",
// }, {
//   "token": "Ccore",
//   "code": "CCO",
//   "contract_address": "0x679badc551626e01b23ceecefbc9b877ea18fc46",
// }, {
//   "token": "Intelligent Trading Foundation",
//   "code": "ITT",
//   "contract_address": "0x0aef06dcccc531e581f0440059e6ffcc206039ee",
// }, {
//   "token": "Kora Network Token",
//   "code": "KNT",
//   "contract_address": "0xff5c25d2f40b47c4a37f989de933e26562ef0ac0",
// }, {
//   "token": "Social Activity Token",
//   "code": "SAT",
//   "contract_address": "0xc56b13ebbcffa67cfb7979b900b736b3fb480d78",
// }, {
//   "token": "Decent.Bet",
//   "code": "DBET",
//   "contract_address": "0x9b68bfae21df5a510931a262cecf63f41338f264",
// }, {
//   "token": "Okschain Token",
//   "code": "OKS",
//   "contract_address": "0x7b68d272eda2185ea2f9283f241b1c44c51e712a",
// }, {
//   "token": "Zenswap Network Token",
//   "code": "ZNT",
//   "contract_address": "0x4fa000df40c06fc8c7d9179661535846b7cd4f87",
// }, {
//   "token": "Sonder",
//   "code": "SNR",
//   "contract_address": "0x47d1a59cbdd19aee060c859c0009277e245328ae",
// }, {
//   "token": "Ether Kingdoms Token",
//   "code": "IMP",
//   "contract_address": "0x48ff53777f747cfb694101222a944de070c15d36",
// }, {
//   "token": "HELP",
//   "code": "HELP",
//   "contract_address": "0xbbc2045d335cb224228f1850b29173d9d7d7b989",
// }, {
//   "token": "YoloCash",
//   "code": "YLC",
//   "contract_address": "0x21d5678a62dfe63a47062469ebb2fac2817d8832",
// }, {
//   "token": "Kind Ads Token",
//   "code": "KIND",
//   "contract_address": "0x4618519de4c304f3444ffa7f812dddc2971cc688",
// }, {
//   "token": "IBTC",
//   "code": "IBTC",
//   "contract_address": "0x0784dbabb6c6834bddfb7cfee116ba049e5dafab",
// }, {
//   "token": "PromotionCoin",
//   "code": "PC",
//   "contract_address": "0xa6714a2e5f0b1bdb97b895b0913b4fcd3a775e4d",
// }, {
//   "token": "ConnectJob",
//   "code": "CJT",
//   "contract_address": "0x3abdff32f76b42e7635bdb7e425f0231a5f3ab17",
// }, {
//   "token": "IPC",
//   "code": "IPC",
//   "contract_address": "0x622cd54deb2bb7a051515192417109bcf3fe098f",
// }, {
//   "token": "Bionic",
//   "code": "BNC",
//   "contract_address": "0xef51c9377feb29856e61625caf9390bd0b67ea18",
// }, {
//   "token": "Bonpay",
//   "code": "BON",
//   "contract_address": "0xcc34366e3842ca1bd36c1f324d15257960fcc801",
// }, {
//   "token": "Data Transaction Token",
//   "code": "XD",
//   "contract_address": "0x24dcc881e7dd730546834452f21872d5cb4b5293",
// }, {
//   "token": "UChain Token",
//   "code": "UCN",
//   "contract_address": "0xaaf37055188feee4869de63464937e683d61b2a1",
// }, {
//   "token": "Couchain",
//   "code": "COU",
//   "contract_address": "0xf091cf09c51811819db705710e9634b8bf18f164",
// }, {
//   "token": "Harrison First",
//   "code": "FIRST",
//   "contract_address": "0x9903A4Cd589DA8e434f264deAFc406836418578E",
// }, {
//   "token": "Crypto Daily Token",
//   "code": "CRDT",
//   "contract_address": "0xDaab5E695bb0E8Ce8384ee56BA38fA8290618e52",
// }, {
//   "token": "IG",
//   "code": "IG",
//   "contract_address": "0x8a88f04e0c905054d2f33b26bb3a46d7091a039a",
// }, {
//   "token": "Archetypal Network",
//   "code": "ACTP",
//   "contract_address": "0x7b2df125567815ac9b57da04b620f50bc93b320c",
// }, {
//   "token": "TEAM",
//   "code": "TEAM",
//   "contract_address": "0x1c79ab32c66acaa1e9e81952b8aaa581b43e54e7",
// }, {
//   "token": "MasterNet",
//   "code": "MASH",
//   "contract_address": "0xa0d440c6da37892dc06ee7930b2eede0634fd681",
// }, {
//   "token": "XMED Chain Token",
//   "code": "XMCT",
//   "contract_address": "0x44449Fa4d607F807d1eD4a69ad942971728391C8",
// }, {
//   "token": "DALECOIN",
//   "code": "DALC",
//   "contract_address": "0x07d9e49ea402194bf48a8276dafb16e4ed633317",
// }, {
//   "token": "Webcoin",
//   "code": "WEB",
//   "contract_address": "0xf344490abd414dafa97f34c8ca501b0aa5bf8873",
// }, {
//   "token": "Crystal Clear Token",
//   "code": "CCT",
//   "contract_address": "0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22",
// }, {
//   "token": "GAMESTARS TOKEN",
//   "code": "GST",
//   "contract_address": "0x67a9099f0008c35c61c00042cd9fb03684451097",
// }, {
//   "token": "XPlay",
//   "code": "XPA",
//   "contract_address": "0x90528aeb3a2b736b780fd1b6c478bb7e1d643170",
// }, {
//   "token": "Tracto",
//   "code": "TRCT",
//   "contract_address": "0x30ceCB5461A449A90081F5a5F55db4e048397BAB",
// }, {
//   "token": "FinTab",
//   "code": "FNTB",
//   "contract_address": "0xbd4b60a138b3fce3584ea01f50c0908c18f9677a",
// }, {
//   "token": "Bulleon",
//   "code": "BUL",
//   "contract_address": "0x0775c81a273b355e6a5b76e240bf708701f00279",
// }, {
//   "token": "ORIUM",
//   "code": "ORM",
//   "contract_address": "0xd51e852630debc24e9e1041a03d80a0107f8ef0c",
// }, {
//   "token": "Veros",
//   "code": "VRS",
//   "contract_address": "0xAbC430136A4dE71c9998242de8c1b4B97D2b9045",
// }, {
//   "token": "Scanetchain",
//   "code": "SWC",
//   "contract_address": "0xadf8b8050639b6236915f7516d69de714672f0bf",
// }, {
//   "token": "BitCoin ONE",
//   "code": "BTCONE",
//   "contract_address": "0x87f5e8c3425218837f3cb67db941af0c01323e56",
// }, {
//   "token": "Change Your Life",
//   "code": "AAA",
//   "contract_address": "0xd938137e6d96c72e4a6085412ada2dad78ff89c4",
// }, {
//   "token": "RouletteToken",
//   "code": "RLT",
//   "contract_address": "0xcced5b8288086be8c38e23567e684c3740be4d48",
// }, {
//   "token": "BANKEX",
//   "code": "BKX",
//   "contract_address": "0x45245bc59219eeaaf6cd3f382e078a461ff9de7b",
// }, {
//   "token": "Block Array",
//   "code": "ARY",
//   "contract_address": "0xa5f8fc0921880cb7342368bd128eb8050442b1a1",
// }, {
//   "token": "VOISE",
//   "code": "VOISE",
//   "contract_address": "0x83eEA00D838f92dEC4D1475697B9f4D3537b56E3",
// }, {
//   "token": "Ruler Protocol",
//   "code": "RULER",
//   "contract_address": "0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8",
// }, {
//   "token": "FaithCoin",
//   "code": "FAITH",
//   "contract_address": "0xe531642e9bb5d027e9c20e03284287b97919a9a5",
// }, {
//   "token": "XENON",
//   "code": "XNN",
//   "contract_address": "0xab95e915c123fded5bdfb6325e35ef5515f1ea69",
// }, {
//   "token": "Real Estate Asset Ledger",
//   "code": "REAL",
//   "contract_address": "0x9214ec02cb71cba0ada6896b8da260736a67ab10",
// }, {
//   "token": "Qurito",
//   "code": "QURO",
//   "contract_address": "0x076a93a40bf9e0d21d3f75dd1e0584ddbe0f9d1a",
// }, {
//   "token": "DOW",
//   "code": "dow",
//   "contract_address": "0x76974c7b79dc8a6a109fd71fd7ceb9e40eff5382",
// }, {
//   "token": "PolyAi",
//   "code": "AI",
//   "contract_address": "0x5121e348e897daef1eef23959ab290e5557cf274",
// }, {
//   "token": "ATLANT",
//   "code": "ATL",
//   "contract_address": "0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05",
// }, {
//   "token": "Speed Mining Service",
//   "code": "SMS",
//   "contract_address": "0x39013f961c378f02c2b82a6e1d31e9812786fd9d",
// }, {
//   "token": "Alpha",
//   "code": "A",
//   "contract_address": "0xffc63b9146967a1ba33066fb057ee3722221acf0",
// }, {
//   "token": "eBitcoin",
//   "code": "EBTC",
//   "contract_address": "0xeb7c20027172e5d143fb030d50f91cece2d1485d",
// }, {
//   "token": "Agrolot Token",
//   "code": "AGLT",
//   "contract_address": "0x72c9fb7ed19d3ce51cea5c56b3e023cd918baadf",
// },
{
  "token": "DGD",
  "code": "DGD",
  "contract_address": "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
}, {
  "token": "Wrapped LUNA",
  "code": "WLUNA",
  "contract_address": "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
}, {
  "token": "Wrapped OHM",
  "code": "sOHM",
  "contract_address": "0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f"
}];

const tokenABI = [{
  "constant": true,
  "inputs": [
    {
      "name": "_owner",
      "type": "address"
    }
  ],
  "name": "balanceOf",
  "outputs": [
    {
      "name": "balance",
      "type": "uint256"
    }
  ],
  "payable": false,
  "type": "function"
}];


export {erc20Addresses, tokenABI};