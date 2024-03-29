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
2) On a separate terminal run `node index`
3) GET/POST at http://localhost:8080/api/contacts
      - GET retrieves the full database
      - To POST, ensure body has both name and email fields in JSON object [adds a new Contact]
4) PUT at http://localhost:8080/api/contacts/update/{_id} [updates field(s) of existing Contact]
5) DELETE at http://localhost:8080/api/contacts/delete/{_id} [delete an existing Contact]
6) GET at http://localhost:8080/api/contacts/view/{_id} [view an existing Contact]

Automated testing:
1) Run MongoDB server with `mongod` on terminal
2) On a separate terminal run `npm run test`

CI:
1) Deployed Travis so on commits, there will be auto testing.
