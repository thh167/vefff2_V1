const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { document } = (new JSDOM()).window;
