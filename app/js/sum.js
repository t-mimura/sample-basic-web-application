module.exports = function() {
  var result = 0;
  [].forEach.call(arguments, function(i) {
    var n = Number(i);
    if (!isNaN(n)) {
      result += n;
    }
  });
  return result;
}
