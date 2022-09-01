import { getFileList,runWatch } from "../lib/content";

const Home = ({ content }) => {
    console.log(JSON.stringify(content))
    return <article>{content instanceof Object && Object.entries(content).length}</article>;
};

export default Home;

export async function getStaticProps() {
    console.log("getStaticProps", getFileList())
    runWatch()
    return {
        props: {
            content: getFileList(),
        },
        revalidate: 5,
    };
}
