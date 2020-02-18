const prism = require('prismjs');
const loadLanguages = require('prismjs/components/index');
const umlEncoder = require('plantuml-encoder');

loadLanguages([
  'markup',
  'bash',
  'javascript',
  'typescript',
  'stylus',
  'css',
  'json',
  'yaml',
  'python',
  'docker',
]);

module.exports = function (str, lang) {
  lang = lang.trim();
  if (lang === '') {
    lang = 'js';
  }
  else if (lang === 'vue') {
    lang = 'html';
  }
  else if (lang === 'plantuml') {
    const encoded = umlEncoder.encode(str);
    return `<UmlDiagram url="https://www.plantuml.com/plantuml/png/${encoded}" title="title" />`;
  }

  if (prism.languages[lang] !== undefined) {
    const code = prism.highlight(str, prism.languages[lang], lang);

    return `<pre v-pre class="doc-code language-${lang}">` +
      `<code class="doc-code__inner doc-code__inner--prerendered language-${lang}">${code}</code>` +
      '</pre>';
  }

  return '';
};
