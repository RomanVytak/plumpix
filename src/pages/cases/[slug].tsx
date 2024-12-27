import { GetStaticPaths, GetStaticProps } from "next/types";
import { cases } from "./_/data";
import { CaseProps } from "./_/types";
import { Slider } from "../../parts/single-case/slider/slider";
import { Intro } from "../../parts/single-case/intro/intro";
import { Form } from "../../parts/sections/form/form";
import { CaseContent } from "../../parts/single-case/content/content";

const formData = {
  title: "Build your project with us",
  subtitle: "Contact us to discuss all benefits of this model for  your specific business."
}

const Case = ({ post }: { post: CaseProps }) => {

  return (
    <>
      <Intro data={post.home} />
      <CaseContent data={post} />
      <Slider data={post.slider} />
      <Form data={formData} />
    </>
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
