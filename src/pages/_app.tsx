import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { Component } from "react";
import {Provider} from "react-redux";
import {store} from "../store/store";

function MyApp(props: AppProps) {
  let { Component, pageProps } = props;
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>)

}

export default MyApp;
