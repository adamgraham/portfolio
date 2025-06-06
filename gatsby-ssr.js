const React = require('react');

const HtmlAttributes = {
  lang: 'en',
};

const HeadComponents = [
  <link
    key="fonts.googleapis.com"
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />,
  <link
    key="fonts.gstatic.com"
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="true"
  />,
  <link
    key="inter"
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&38;display=swap"
    rel="stylesheet"
  />,
  <link
    href="https://cdn.zigurous.com/forge-css@1.2.0/dist/index.min.css"
    rel="stylesheet"
  />,
];

const BodyAttributes = {};

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
  setBodyAttributes(BodyAttributes);
};

export const onPreRenderHTML = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV === 'production') {
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
  }
};
