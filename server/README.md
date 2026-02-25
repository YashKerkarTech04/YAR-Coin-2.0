# YAR-Coin-2.0 Official Server Endpoints :

- Login API
```bash
POST   https://yarcoin.vercel.app/login
```

- Socket Chat Tunnel
```bash
wss://yarcoin.vercel.app
```

- Auction Settlement Cron Job
```bash
* * * * *
```

- Admin API's
```bash
POST   https://yarcoin.vercel.app/api/teachers
GET    https://yarcoin.vercel.app/api/teachers
GET    https://yarcoin.vercel.app/stat/repo/:owner/:repo
GET    https://yarcoin.vercel.app/panelty/:walletAddress/:amount
POST   https://yarcoin.vercel.app/mint/nft
```

- Members API's
```bash
POST   https://yarcoin.vercel.app/api/students
GET    https://yarcoin.vercel.app/api/students
POST   https://yarcoin.vercel.app/convert
GET    https://yarcoin.vercel.app/transactions/:walletAddress
```

- Bidding API's
```bash
POST   https://yarcoin.vercel.app/api/biddings
GET    https://yarcoin.vercel.app/api/biddings/student/:studentId
```