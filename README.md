Code for task B1

References:
1) https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
2) https://stackoverflow.com/questions/7948789/mongod-complains-that-there-is-no-data-db-folder

Requirements:
- Node JS
- Mongo DB (ensure /data/db has relevant permissions - `sudo chown 777 /data/db`) [if `/data/db` doesn't exist: `sudo mkdir -p /data/db`]
- Testing using Postman

To test:
1) Run MongoDB server with `mongod` on terminal
2) On a separate terminal, navigate to directory 'b1' and run `npm run test`
