(function (tags, voidTags, globalName) {
  window[globalName] = hbind;
  var i = 0,
      space = " ",
      blank = "",
      dquo = '"',
      defaultTag = 'div';
  
  tags = (tags + space + voidTags).split(space);
  voidTags = space + voidTags + space;

  while (i < tags.length) hbind(tags[i++]);

  hbind.h = h;

  function h(tag, attr) {
    var iterVal,
        prop,
        arg = arguments,
        classes = (tag.match(/\.([\w\-]+)/g) || [])
          .join(space)
          .replace(/\./g, blank),
        id = (tag.match(/#([\w\-]+)/) || [])[1],
        html;

    tag = tag.match(/^\w+/) || defaultTag;
    html =
      "<" + tag +
      (id ? ' id="' + id + dquo : blank) +
      (classes ? ' class="' + classes + dquo : blank);
    if (typeof attr === "object") {
      for (iterVal in attr) {
        if (typeof attr[iterVal] === "object") {
          html += space + iterVal + '="';
          for (prop in attr[iterVal]) {
            html += prop + ":" + attr[iterVal][prop] + ";";
          }
          html += dquo;
        } else {
          html += space + iterVal + '="' + attr[iterVal] + dquo;
        }
      }
      iterVal = 2;
    } else {
      iterVal = 1;
    }
    if (~voidTags.indexOf(space + tag + space)) {
      html += "/>";
    } else {
      html += ">";
      for (; iterVal < arg.length;) {
        html += arg[iterVal++];
      }
      html += "</" + tag + ">";
    }
    return html;
  }
  function hbind(tag) {
    hbind[tag] = function () {
      return h.apply(null, [tag].concat([].slice.call(arguments)));
    };
  }
})(
  /* supported tags */
  "a abbr address article aside audio b bdi bdo blockquote body button canvas " +
  "caption cite code colgroup data datalist dd del dfn div dl dt em fieldset " +
  "figcaption figure footer form h1 h2 h3 h4 h5 h6 head header html i iframe ins " +
  "kbd label legend li main map mark meter nav noscript object ol optgroup option " +
  "output p pre progress q rb rp rt rtc ruby s samp script section select small " +
  "span strong style sub sup table tbody td template textarea tfoot th thead time " +
  "title tr u ul var video",
  
  /* supported void tags */
  "area base br col embed hr img input keygen link meta param source track wbr",
  
  /* global name */
  "hscript"
);
