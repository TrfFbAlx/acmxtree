(function() {
  function insertScript(content, type, id) {
    var s = document.createElement('script');
    var body = document.querySelector('body');
    s.type = type;
    if (id) {
      s.id = id;
    }
    s.innerText = content;
    body.appendChild(s);
  }

}());

var doofinder_script ='//cdn.doofinder.com/media/js/doofinder-classic.7.latest.min.js';
(function(d,t){var f=d.createElement(t),s=d.getElementsByTagName(t)[0];f.async=1;
f.src=('https:'==location.protocol?'https:':'http:')+doofinder_script;
f.setAttribute('charset','utf-8');
s.parentNode.insertBefore(f,s)}(document,'script'));

var dfClassicLayers = [{
  "hashid": "9360d61ad95a15092290bfc22cdcabf1",
  "zone": "eu1",
  "display": {
    "lang": "es",
    "align": "right",
    "dleft": 49
  },
  "queryInput": "#search_query_top"
}];
