// Retrieve the given GET value defined by its "variableName"
// if not found, assign it "defaultValue" instead

/* exported getGETQueryValue */

function getGETQueryValue(variableName, defaultValue) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variableName)
      return pair[1];
  }
  return defaultValue;
}
