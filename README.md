# hscript.js
JavaScript helper for generating HTML

The global `hscript` has HTML tag methods for creating HTML like this:

```javascript
var htmlString = (function(){ with(hscript){ return(
  div(
    h1('hscript.js'),
    p('An ', 
      em({style: {background: 'red'}}, 
        'awesome'
      ), 
      ' library!'
    )
  )
)}})();
```

with hyperscript syntax:

```javascript
var htmlString = (function(){ var h = hscript; return(
  h('div',
    h('h1', 'hscript.js'),
    h('p', 'An ', 
      h('em', {style: {background: 'red'}}, 
        'awesome'
      ), 
      ' library!'
    )
  )
)}})();
```

or with a mix:

```javascript
var htmlString = (function(){ with(hscript){ return(
  h('div',
    h1('hscript.js'),
    h('p', 'An ', 
      h('em', {style: {background: 'red'}}, 
        'awesome'
      ), 
      ' library!'
    )
  )
)}})();
```

The hyperscript syntax supports shortcuts for classes, id and `<div>` tags:
```javascript
h(''); // '<div></div>'  
h('p#specialty.highlighted.note') // '<p id="specialty" class="highlighted note"></p>'
```

## hscript.js methods

### hyperscript

hscript.h()  
hscript()

### HTML5 tags

hscript.a()  
hscript.abbr()  
hscript.address()  
hscript.area()  
hscript.article()  
hscript.aside()  
hscript.audio()  
hscript.b()  
hscript.base()  
hscript.bdi()  
hscript.bdo()  
hscript.blockquote()  
hscript.body()  
hscript.br()  
hscript.button()  
hscript.canvas()  
hscript.caption()  
hscript.cite()  
hscript.code()  
hscript.col()  
hscript.colgroup()  
hscript.data()  
hscript.datalist()  
hscript.dd()  
hscript.del()  
hscript.dfn()  
hscript.div()  
hscript.dl()  
hscript.dt()  
hscript.em()  
hscript.embed()  
hscript.fieldset()  
hscript.figcaption()  
hscript.figure()  
hscript.footer()  
hscript.form()  
hscript.h1()  
hscript.h2()  
hscript.h3()  
hscript.h4()  
hscript.h5()  
hscript.h6()  
hscript.head()  
hscript.header()  
hscript.hr()  
hscript.html()  
hscript.i()  
hscript.iframe()  
hscript.img()  
hscript.input()  
hscript.ins()  
hscript.kbd()  
hscript.keygen()  
hscript.label()  
hscript.legend()  
hscript.li()  
hscript.link()  
hscript.main()  
hscript.map()  
hscript.mark()  
hscript.meta()  
hscript.meter()  
hscript.nav()  
hscript.noscript()  
hscript.object()  
hscript.ol()  
hscript.optgroup()  
hscript.option()  
hscript.output()  
hscript.p()  
hscript.param()  
hscript.pre()  
hscript.progress()  
hscript.q()  
hscript.rb()  
hscript.rp()  
hscript.rt()  
hscript.rtc()  
hscript.ruby()  
hscript.s()  
hscript.samp()  
hscript.script()  
hscript.section()  
hscript.select()  
hscript.small()  
hscript.source()  
hscript.span()  
hscript.strong()  
hscript.style()  
hscript.sub()  
hscript.sup()  
hscript.table()  
hscript.tbody()  
hscript.td()  
hscript.template()  
hscript.textarea()  
hscript.tfoot()  
hscript.th()  
hscript.thead()  
hscript.time()  
hscript.title()  
hscript.tr()  
hscript.track()  
hscript.u()  
hscript.ul()  
hscript.var()  
hscript.video()  
hscript.wbr()
