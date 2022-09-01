import { getFileList } from "../lib/content";

const Home = ({ content }) => {
    console.log(JSON.stringify(content))
    return <article>{content instanceof Array && content.map((e)=><div>{e}</div>)}</article>;
};

export default Home;

export async function getStaticProps() {
    console.log("getStaticProps", getFileList())

    return {
        props: {
            content: getFileList(),
        },
        revalidate: 5,
    };
}
