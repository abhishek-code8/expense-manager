const expect = require('chai').expect;
const request =  require('supertest');
const app = require('../index');
const should = require('chai').should();


expenseTemp ={   
  "id":"8b1febbb-600e-41db-9ca5-9223f1e0ffb6",
  "title": "xbox",
  "category": "electronics",
  "description": "gaming device",
  "amount": "35000",
  "expenseDate": "09/01/2021"
}

// testsuit starts from here
describe('Expense Manager testing', function() {
  //testsuit for functionality testing
  describe('Functionality testing', function() {
    // testsuit for adding expense
    describe('Adding expense functionality testing', function() {
      // testcase to insert expense record
      it('Should create expense, returning success message', function(done) {
        this.timeout(3000);
        request(app)
        .post('/api/expense/')
        .expect(201)
        .expect('Content-Type', /text/)
        .send(expenseTemp)
        .end(function(err, res) {
          should.not.exist(err);
          should.exist(res.body, 'Response body should not be null or undefined');
          res.should.be.equal('Expense is added successfully', 'Response body should have a key as userInfo which will hold username value');
          done();
        });
          //write assertion code here and your response should return below given message
          //'Expense record is added successfully'
          
      });
      // testcase to handle, if expense record is already exist with the given id
      it('Should not create expense if expense is already exist with the given id, returning error message', function(done) {
          // write assertion code here and your response should return below given message
          //'Expense record is already exist with the given id'
          done();
      });
      // testcase to handle, if user is passing empty record.
      it('Should not create expense if passing empty record, returning error message', function(done) {
          // write assertion code here and your response should return below given message
          //'Empty data is not allowed, please provide some valid data to insert record'
          done();
      });
      // testcase to handle, if user is not passing any record in post body.
      it('Should not create expense if user is not passing any record in post request, returning error message', function(done) {
          // write assertion code here and your response should return below given message
          // 'Please provide some data to add new expense'
          done();
      });
      // testcase to handle, if user is passing wrong key as a record.
      it('Should not create expense if user is passing wrong data, returning error message', function(done) {
          // write assertion code here and your response should return below given message
          // 'Please provide values for id ,title, category, description, amount and expenseDate. All are mandatory data elements'
          done();
      });
    });
    // testsuit to get all expense record
    describe('Getting all expense functionality testing', function() {
      it('Should get all expense, returning array of expense ', function(done) {
          // write assertion code here and check response array length, it should be greater than zero
          done();
      });
    });
    // testsuit to update expense record
    describe('Updating expense functionality testing', function() {
      // testcase to update particular expense category
      it('Should search expense by id and update expense category, returning success message', function(done) {
          // write assertion code here and your response should return below given message
          // 'Expense record is updated successfully'
          done();
      });
      // testcase to handle, if no expense record will be found by given category
      it('Should search expense by id if expense is not found with the given id, returning error message', function(done) {
          // write assertion code here and your response should return below given message
          // 'Expense record is not found with the given id'
          done();
      });
      // testcase to handle, if user is passing empty record.
      it('Should not update expense if passing empty record, returning error message', function(done) {
        // write assertion code here and your response should return below given message
        // 'Empty data is not allowed, please provide some valid data to update record'
         done();
      });
      // testcase to handle, if user is not passing any record in put body.
      it('Should not update expense if user is not passing any record in update request, returning error message', function(done) {
          // write assertion code here and your response should return below given message
          // 'Please provide id and some data to update expense record'
          done();
      });
      // testcase to handle, if user is not passing id in update request.
      it('Should not update expense if passing without any id, returning error message', function(done) {
          // write assertion code here and your response should return below given message
          // 'Please provide expense id to update record'
          done();
      });
      // testcase to handle, if user is passing id only id not other field values.
      it('Should not update expense if passing only id not other fields, returning error message', function(done) {
          // write assertion code here and your response should return below given message
          // 'Please provide values those needs to update'
          done();
      });
    });
    // testsuit to search and get expense record according to given condition
    describe('Searching expense functionality testing', function() {
      // testcase to get all expense those are matching with given start and end date
      it('Should search expense by start and end date, returning matching expense data as an array', function(done) {
        // write assertion code here and check response array length, it should be greater than zero
        done();
      });
       // testcase to get all expense, those are equal to given start date and greater than given start date
      it('Should search expense by start date only, returning expense data where date is greater than and equal to the given start date', function(done) {
        // write assertion code here and check response array length, it should be greater than zero
        done();
      });
      // testcase to get all expense those are matching with given category, start and end date.
      it('Should search expense by category, start and end date, returning matching expense data as an array', function(done) {
        // write assertion code here and check response array length, it should be greater than zero
        done();
      });
      // // testcase to get all expense, those are equal to given category, start date and greater than given start date
      it('Should search expense by category and start date only, returning expense data matching with given category and date should be greater than and equal to start date', function(done) {
        // write assertion code here and check response array length, it should be greater than zero
        done();
      });
      // // testcase to get all expense, those are equal to given category, start date and greater than given start date
      it('Should handle 404 error if route not matched, returning Not Found message', function(done) {
        // write assertion code here and your response should return below given message
        // 'Not Found'
        done();
      });
    });
    // testsuit to delete a expense record
    describe('Deleting expense functionality testing', function() {
      // testcase to delete expense record by given id
      it('Should search expense by id and delete particular expense record, returning success message', function(done) {
        // write assertion code here and your response should return below given message
        // 'Expense record is deleted successfully'
        done();
      });
      // testcase to handle, if no expense record will be found by given id
      it('Should search expense by id if expense is not found with the given id, returning error message', function(done) {
        // write assertion code here and your response should return below given message
        // 'Expense provide correct id, there is no expense record with the given id'
        done();
      });
      // testcase to handle, if user is not passing any record in delete body.
      it('Should not delete expense if user is not passing any record in delete request, returning error message', function(done) {
        // write assertion code here and your response should return below given message
        // 'Please provide expense id to delete expense record'
        done();
      });
      // testcase to handle, if user is not passing id in delete request body.
      it('Should not delete expense if not passing id, returning error message', function(done) {
        // write assertion code here and your response should return below given message
        // 'Please provide expense id to delete expense record'
        done();
      });
    });
  });
});