import { counter } from "../lib/utils";

const Home = ({ counter }) => {
    return <article>{counter}</article>;
};

export default Home;

export async function getStaticProps() {

    return {
        props: {
            counter,
        },
        revalidate: 100,
    };
}
