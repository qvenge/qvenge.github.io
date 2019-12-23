'use strict';

var NUMBER_OF_PAGES = 64;

var srcArr = [];
var src = '';


for (var i = 1; i <= NUMBER_OF_PAGES; ++i) {
    src = 'pages/' + i + '.jpg';
    srcArr.push(src);
}

var bookElem = document.querySelector('.book-widget');

var bookWidget = new BookWidget(bookElem);
bookWidget.init(srcArr);