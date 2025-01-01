import { GetStaticPaths, GetStaticProps } from "next"
import { Article } from "../parts/sections/article/article"
import { pages_data } from "../data/pages"
import { Reviews } from "../parts/sections/reviews/reviews"
import { Form } from "../parts/sections/form/form"
import { TechStack } from "../parts/sections/techstack/techstack"
import { Cards } from "../parts/sections/cards/cards"
import { Stages } from "../parts/sections/stages/stages"
import { CONTENT_TYPES } from "../const"

const Page = ({ post }) => {
  return (
    <>
      {Object.keys(post).map((contentBlock: any) => {
        switch (contentBlock) {
          case CONTENT_TYPES.article:
            return <Article data={post.article} />
          case CONTENT_TYPES.white_cards:
            return <Cards {...post.white_cards} />
          case CONTENT_TYPES.blue_cards:
            return <Cards {...post.blue_cards} type="colorful" />
          case CONTENT_TYPES.reviews:
            return <Reviews />
          case CONTENT_TYPES.techstack:
            return <TechStack />
          case CONTENT_TYPES.stages:
            return <Stages {...post.stages} />
        }
      })}
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


// return (
//   <>
//     {post.article && }
//     {post.white_cards && }
//     {post.blue_cards && }
//     {post.reviews && }
//     {post.techstack && }
//     {post.stages && }

//   </>
// )