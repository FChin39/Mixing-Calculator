var postcss = require('postcss');
var assign = require('object-assign');

module.exports = postcss.plugin('postcss-px2units', function (opts) {
  opts = opts || {};
  opts = assign({
    divisor: 1,
    multiple: 1,
    decimalPlaces: 2,
    targetUnits: 'rpx',
    comment: 'no',
    minPixelValue: 0
  }, opts);

  function repalcePx(str) {
    if (!str) {
      return '';
    }
    return str.replace(/\b(\d+(\.\d+)?)px\b/g, function (match, x) {
      if (x <= opts.minPixelValue) {
        return match;
      }
      var size = x * opts.multiple / opts.divisor;
      return size % 1 === 0 ? size + opts.targetUnits : size.toFixed(opts.decimalPlaces) + opts.targetUnits;
    });
  }

  return function (root) {
    root.walkDecls(function (decl) {
      if (decl && decl.next() && decl.next().type === 'comment' && decl.next().text === opts.comment) {
        decl.next().remove();
      } else {
        decl.value = repalcePx(decl.value);
      }
    });
  };
});
