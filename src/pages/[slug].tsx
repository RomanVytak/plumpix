import { GetStaticPaths, GetStaticProps } from "next"
import { Article } from "../parts/sections/article/article"
import { pages_data } from "../data/pages"
import { Reviews } from "../parts/sections/reviews/reviews"
import { Form } from "../parts/sections/form/form"
import { TechStack } from "../parts/sections/techstack/techstack"
import { Cards } from "../parts/sections/cards/cards"



const Page = ({ post }) => {
  return (
    <>
      <Article data={post.article} />
      <Cards title={post.cards.title} data={post.cards.items} />
      <Reviews />
      <TechStack />
      <Form />
    </>
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
