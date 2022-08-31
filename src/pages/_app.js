import { Provider } from "react-redux";
import { Layout } from "../components/Layout";
import { store } from "../app/store";

export default function MyApp({ Component, pageProps }) {
    fetch("/api/hello").catch(e=>{})
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
