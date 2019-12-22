import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { compose } from "redux";

import configureStore from "rredux/store";

const MyApp = ({ Component, pageProps, store }) =>{
  return (
    <div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  )
};
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  MyApp.getInitialProps = async ({ Component, ctx, store }) => {
    let pageProps = {};

  
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { Component, store, pageProps }
  }
  
export default compose(
  withRedux(configureStore),
  withReduxSaga,
)(MyApp);