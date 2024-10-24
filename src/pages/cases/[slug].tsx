import { GetStaticPaths, GetStaticProps } from "next/types";
import Layout from "../../layout";
import { cases } from "./_/data";
import { CaseHome } from "../../components/caseHome/caseHome";
import { Tabs } from "../../components/tabs/tabs";

const Case = ({ post }) => {
  return (
    <Layout>
      <CaseHome data={post.home} />
      <Tabs title="Stages of our development process" />
    </Layout>
  )
}

export default Case

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = cases.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = cases.find((post) => post.slug === params?.slug);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post,
    },
  };
};
