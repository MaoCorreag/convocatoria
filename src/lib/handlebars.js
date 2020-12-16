module.exports = {
  'if_eq': function(a, b, opts) {
    if (a === b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  },
  'setChecked': function(value, test) {
    if (value === undefined) return '';
    return value === test ? 'checked' : '';
  },
  'setSelected': function(value, test) {
    if (value === undefined) return '';
    return value === test ? 'selected' : '';
  },
  'setPeriod': function(value, info) {
    const data = info.split(' ');
    const test = `${data[0]} ${data[1]}`;
    if (value === undefined) return '';
    return value === test ? 'checked' : '';
  },
  'setYear': function(value) {
    return [...value.split(' ').splice(-1)]
  },
  'setTrue': function(value, test) {
    if (value === undefined) return '';
    return value === 1 ? 'checked' : '';
  }
}
