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
  movies.push(movie0);
  var movie1 = new Movie("Jurassic Park", 2);
  movies.push(movie1);
  var movie2 = new Movie("Adventures of Sloth Banker", 1);
  movies.push(movie2);
  var movie3 = new Movie("Big Hero 6", 2);
  movies.push(movie3);
  var movie4 = new Movie("John Wick", 1);
  movies.push(movie4);
  var movie5 = new Movie("Evil Dead", 0.5);
  movies.push(movie5);

  }



$(function() {

  populateDB();

  movies.forEach(function(movie){
    $("select#movies").append("<option value='" + movie.movieCategory + "'>" + movie.title + "</option>");
  });


  $("form#buyTicket").submit(function() {
    event.preventDefault();
    var category = $("select#movies").val();
    var showTime = $("select#showTime").val();
    var discount = $("select#discount").val();

    var dummyTicket = new Ticket(discount, showTime);
    var dummyMovie = new Movie("Movie", category);
    var finalPrice = price(dummyMovie, dummyTicket);

    $("p#price").append(finalPrice);
  });
});
