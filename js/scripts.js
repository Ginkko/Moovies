var movies = []
var tickets = []

function Ticket(discount, showTime) {
  this.discount = discount;
  this.showTime = showTime;
}

function Movie(title, movieCategory) {
  this.title = title;
  this.movieCategory = movieCategory;
}

var price = function(movie, ticket) {
  return 10 * movie.movieCategory * ticket.discount + ticket.showTime;
}

var populateDB = function() {
  var movie0 = new Movie("Highlander", 0.5);
  var movie1 = new Movie("Jurassic Park", 2);
  var movie2 = new Movie("Adventures of Sloth Banker", 1);
  var movie3 = new Movie("Big Hero 6", 2);
  var movie4 = new Movie("John Wick", 1);
  var movie5 = new Movie("Evil Dead", 0.5);

  for(var i = 0; i < 6; i++) {
    movies.push("movie" + i);
  }
}
