describe("Ticket", function() {
  it("Constructs a ticket with the appropriate attributes", function(){
    var testTicket = new Ticket("student", "matinee");
    expect(testTicket.discount).to.equal("student");
    expect(testTicket.showTime).to.equal("matinee");
  });
});

describe("Movie", function() {
  it("Constructs a movie with the appropriate attributes", function() {
    var testMovie = new Movie("Highlander", "re-run");
    expect(testMovie.title).to.equal("Highlander");
    expect(testMovie.status).to.equal("re-run");
  });
});
