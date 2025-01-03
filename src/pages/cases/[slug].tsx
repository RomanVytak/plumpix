import { GetStaticPaths, GetStaticProps } from "next/types";
import { cases } from "../../data/cases";
import { Slider } from "../../parts/single-case/slider/slider";
import { Intro } from "../../parts/single-case/intro/intro";
import { Form } from "../../parts/sections/form/form";
import { CaseContent } from "../../parts/single-case/content/content";
import { Recent } from "../../parts/single-case/recent/recent";
import { CaseProps, CasesProps } from "../../types";

const Case = ({ post, recent }: { post: CaseProps, recent: CasesProps }) => {
  return (
    <>
      <Intro data={post.home} />
      <CaseContent data={post} />
      <Slider data={post.slider} />
      <Form />
      <Recent data={recent} />
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
  const recent = cases.filter((post) => post.slug !== params?.slug);

  if (!post) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      post,
      recent
    },
  };
};
