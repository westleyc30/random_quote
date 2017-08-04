
$(document).ready(function () {
  var url               = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

  var elQuoteButton     = document.getElementById('getQuote');
  var elTweetButton     = document.getElementById('tweetQuote');
  var elQuoteText       = document.getElementById('quoteText');
  var elAuthorText      = document.getElementById('authorText');
  var startText = 'Hi! Press the get quote button to get a random quote and the tweet button to tweet it if you like';
  var startAuthor = 'Westley Cho';

  elQuoteText.innerHTML = startText;
  elAuthorText.innerHTML = startAuthor;
  $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + '"' +encodeURIComponent(startText) + '"' + encodeURIComponent(' -' + startAuthor));


  var getQuote = function(data) {

    $("#quoteText").text(data.quoteText);
    $("#authorText").text(data.quoteAuthor);
    if (data.quoteAuthor === '') {
      $("#authorText").text("Anonymous");
    }

    $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" + '"' + encodeURIComponent(data.quoteText) + '"' + encodeURIComponent(' -' + data.quoteAuthor));
  };

  elQuoteButton.onclick = function () {
    $.getJSON(url, getQuote, 'jsonp');
  };
  // elTweetButton.onclick = function () {tweetQuote();};

});
