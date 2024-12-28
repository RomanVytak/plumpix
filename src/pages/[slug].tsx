import { GetStaticPaths, GetStaticProps } from "next"
import { Article } from "../parts/sections/article/article"
import { pages_data } from "../data/pages"
import { Reviews } from "../parts/sections/reviews/reviews"
import { Form } from "../parts/sections/form/form"
import { TechStack } from "../parts/sections/techstack/techstack"
import { Cards } from "../parts/sections/cards/cards"
import { Stages } from "../parts/sections/stages/stages"



const Page = ({ post }) => {
  return (
    <>
      <Article data={post.article} />
      <Cards {...post.cards} />
      <Cards {...post.why_hire} type="colorful" />
      <Stages {...post.stages} />
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
