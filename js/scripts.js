function Ticket(discount, showTime) {
  this.discount = discount;
  this.showTime = showTime;
}

function Movie(title, movieCategory) {
  this.title = title;
  this.movieCategory = movieCategory;
}

var price = function(movie, ticket) {
  debugger;
  var basePrice = 10;
  // var movie = this.movie
  // var ticket = this.ticket
  return basePrice * movie.movieCategory * ticket.discount + ticket.showTime;
}
