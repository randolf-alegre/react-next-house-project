This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## RUN LOCAL SERVER
NOTE: Make sure port 5000 is available. If json-server is not installed. Please do so.

## SETUP ENV

Create a .env file and add the following:
LOCAL_SERVER=http://localhost:5000
DB_COLLECTION=/houses
API_ENDPOINT=/api/houses

Install json-server if not installed yet:

```bash
npm install json-server
```

run the following:
```bash
json-server --watch db.json --port 5000
```
## Task Breakdown
1. Conduct analysis and design. (1hr)
2. Distinguish what are possible models, services, attributes need for the component. (1hr)
3. What objects involved in the component. (1hr)
4. Determine the behavior of the component. (1hr)
5. Consider what possible areas needed to be tested and not be tested. (1hr)
6. Break components into smaller components. (1hr)
7. Start coding (32hrs)
8. Unit testing of target component (5hrs)


