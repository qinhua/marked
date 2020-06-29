function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false,
    bilibiliEmojiUrl: 'https://cdn.jsdelivr.net/gh/LIlGG/cdn@1.0.1/img/bili/',
    codeEmojiEmojiUrl: 'https://cdn.jsdelivr.net/gh/LIlGG/cdn@1.0.1/img/Sakura/images/smilies/'
  };
}

function changeDefaults(newDefaults) {
  module.exports.defaults = newDefaults;
}

module.exports = {
  defaults: getDefaults(),
  getDefaults,
  changeDefaults
};
