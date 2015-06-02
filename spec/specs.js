describe("Ticket", function() {
  it("Constructs a ticket with the appropriate attributes", function(){
    var testTicket = new Ticket("student", "matinee");
    expect(testTicket.discount).to.equal("student");
    expect(testTicket.showTime).to.equal("matinee");
  });
});
