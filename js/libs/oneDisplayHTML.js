export default function renderHTMLToTheDom(html, domElm) {
  // create a check to test for strings
  // Clear HTML inside dom first because we are appending
  document.querySelector(domElm).innerHTML += html;
}
