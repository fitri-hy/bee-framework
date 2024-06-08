class DomUtils {
  static createElement(tag, props = {}, ...children) {
    const element = document.createElement(tag);
    Object.keys(props).forEach(key => element[key] = props[key]);
    children.forEach(child => element.appendChild(
      typeof child === 'string' ? document.createTextNode(child) : child
    ));
    return element;
  }

  static setMetaTagContent(id, content) {
    const metaTag = document.getElementById(id);
    if (metaTag) {
      metaTag.setAttribute('content', content);
    }
  }

  static addMetaTags(title, description, keywords) {
    document.title = title;
    DomUtils.setMetaTagContent('meta-description', description);
    DomUtils.setMetaTagContent('meta-keywords', keywords);
  }
}

export default DomUtils;
