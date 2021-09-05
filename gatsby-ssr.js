const React = require("react");

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <link key="fonts.googleapis.com" rel="preconnect" href="https://fonts.googleapis.com"></link>,
  <link key="fonts.gstatic.com" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>,
  <link key="poppins" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&38;display=swap" rel="stylesheet"></link>,
  <link key="material-icons" href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>,
]

const BodyAttributes = {
}

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
}

exports.onPreRenderHTML = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }
  const headComponents = getHeadComponents();
  headComponents.forEach(element => {
    if (element.type === 'style' && element.props['data-href']) {
      element.type = 'link';
      element.props.href = element.props['data-href'];
      element.props.rel = 'stylesheet';
      element.props.type = 'text/css';

      delete element.props['data-href'];
      delete element.props.dangerouslySetInnerHTML;
    }
  });
};
