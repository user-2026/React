mkdir name
cd name
npm init -y
npm install express body-parser

npx create-react-app client

cd client 
npm run build
cd..
node server.js
