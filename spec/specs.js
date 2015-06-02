describe("Ticket", function() {
  it("Constructs a ticket with the appropriate attributes", function(){
    var testTicket = new Ticket(.75, 0);
    expect(testTicket.discount).to.equal(.75);
    expect(testTicket.showTime).to.equal(0);
  });
});

describe("Movie", function() {
  it("Constructs a movie with the appropriate attributes", function() {
    var testMovie = new Movie("Highlander", 1);
    expect(testMovie.title).to.equal("Highlander");
    expect(testMovie.movieCategory).to.equal(1);
  });
});

describe("price", function() {
  it("Returns the price based on the ticket and movie", function() {
    var testMovie = new Movie("Highlander", 1);
    var testTicket = new Ticket(.75, 0);
    expect(price(testMovie, testTicket)).to.equal(7.5)
  });
})
