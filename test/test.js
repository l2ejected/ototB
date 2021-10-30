let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');

chai.use(chaiHttp);
chai.should();
contacts = {};

describe("Contacts", () => {
  describe("POST /", () => {
    // test to post new contact
    it('should post new contact with these details', (done) => {
      chai.request(app)
        .post('/api/contacts/')
        .type('form')
        .send({
          name: "charlie",
          email: "charlie@email.com"
        })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.should.be.a('object');
          console.log(res.body.data);
          done();
        });
    });
  })
})

describe("Contacts", () => {
  describe("GET /", () => {
    // Test to get all contacts
    it("should get all contacts", (done) => {
      chai.request(app)
        .get('/api/contacts')
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.should.be.a('object');
          this.contacts = res.body.data;
          console.log(this.contacts);
          done();
        });
    });

    // test to get specific contact
    it('should get contact with valid id', (done) => {
      const id = this.contacts[this.contacts.length-1]._id;
      chai.request(app)
        .get(`/api/contacts/view/${id}`)
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.should.be.a('object');
          console.log(res.body.data);
          done();
        });
    });
  })
})

describe("Contacts", () => {
  describe("PUT /", () => {
    // test to update last contact
    it('should update contact with this id', (done) => {
      const id = this.contacts[this.contacts.length-1]._id;
      chai.request(app)
        .put(`/api/contacts/update/${id}`)
        .type('form')
        .send({
          'name': 'charlie2'
        })
        .end((err, res) => {
          res.status.should.equal(200);
          res.body.should.be.a('object');
          res.body.data.name.should.equal('charlie2');
          console.log(res.body.data);
          done();
        });
    });
  })
})

describe("Contacts", () => {
  describe("DELETE /", () => {
        // test to delete last contact
        it('should delete contact with this id', (done) => {
          const id = this.contacts[this.contacts.length-1]._id;
          chai.request(app)
            .delete(`/api/contacts/delete/${id}`)
            .end((err, res) => {
              res.status.should.equal(200);
              res.body.should.be.a('object');
              done();
            });
        });
  })
})