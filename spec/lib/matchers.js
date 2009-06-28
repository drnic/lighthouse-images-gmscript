Screw.Matchers['includes'] = {
  match: function(expected, actual) {
    return actual.indexOf(expected) != -1;
  },
  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to include ' + $.print(expected);
  }
};

Screw.Matchers['equal_basename'] = {
  match: function(expected, actual) {
    var match = actual.match(/url\((.*)\)/);
    if (match) { actual = match[1]; }
    var basename = actual.match(/[^\/]+$/);
    if (basename) {
      return basename[0] === expected;
    } else {
      return actual === expected;
    }
  },
  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to match basename ' + $.print(expected);
  }
};
