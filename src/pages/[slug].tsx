import { GetStaticPaths, GetStaticProps } from "next"
import { Article } from "../parts/sections/article/article"
import { pages_data } from "../data/pages"
import { Reviews } from "../parts/sections/reviews/reviews"
import { Form } from "../parts/sections/form/form"
import { TechStack } from "../parts/sections/techstack/techstack"
import { Cards } from "../parts/sections/cards/cards"
import { Stages } from "../parts/sections/stages/stages"
import { CONTENT_TYPES } from "../const"
import { PlainText } from "../parts/sections/plainText/plainText"

const Page = ({ post }) => {
  return (
    <>
      {Object.keys(post).map((contentBlock: any, index: number) => {
        switch (contentBlock) {
          case CONTENT_TYPES.article:
            return <Article key={index} data={post.article} />
          case CONTENT_TYPES.white_cards:
            return <Cards key={index} {...post.white_cards} />
          case CONTENT_TYPES.blue_cards:
            return <Cards key={index} {...post.blue_cards} type="colorful" />
          case CONTENT_TYPES.reviews:
            return <Reviews key={index} />
          case CONTENT_TYPES.techstack:
            return <TechStack key={index} />
          case CONTENT_TYPES.stages:
            return <Stages key={index} {...post.stages} />
          case CONTENT_TYPES.plainText:
            return <PlainText key={index} data={post.plainText} />
        }
      })}
      <Form title={post?.form?.title} />
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
