import { GetStaticPaths, GetStaticProps } from "next"
import Layout from "../layout/layout"
import { Article } from "../components/article/article"
import { pages_data } from "../data/pages"
import { Cards } from "../components/cards/cards"
import { Reviews } from "../components/reviews/reviews"
import { TechStack } from "../components/techstack/techstack"
import { Form } from "../components/form/form"

const Page = ({ post }) => {
  return (
    <Layout>
      <Article data={post.article} />
      <Cards title={post.cards.title} data={post.cards.items} />
      <Reviews />
      <TechStack />
      <Form />
    </Layout>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = pages_data.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = pages_data.find((post) => post.slug === params?.slug);

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
