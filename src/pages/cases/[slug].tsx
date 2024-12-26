import { GetStaticPaths, GetStaticProps } from "next/types";
import { cases } from "./_/data";
import { CaseHome } from "../../components/caseHome/caseHome";
import gls from '../../components/cases/cases.module.scss'
import { CaseAbout } from "../../parts/cases/about/caseAbout";
import { Content } from "../../components/content/content";
import { CaseProps } from "./_/types";
import { Slider } from "../../parts/cases/slider/slider";
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Case = ({ post }: { post: CaseProps }) => {
  const [isMatches, setIsMatches] = useState(false);
  const sidebarRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const getMatchMedia = () => {
      setIsMatches(window.matchMedia('(min-width: 801px)').matches)
    }
    getMatchMedia()

    window.addEventListener('resize', getMatchMedia);

    const ctx = gsap.context(() => {
      if (isMatches) {
        ScrollTrigger.create({
          trigger: sidebarRef.current,
          start: "top +85px",
          end: "bottom bottom",
          endTrigger: contentRef.current,
          pin: true,
          invalidateOnRefresh: true,
          markers: true
        });
      }
    });

    return () => {
      ctx.revert();
      window.removeEventListener('resize', getMatchMedia);
    }
  }, [isMatches]);

  return (
    <>
      <CaseHome data={post.home} />
      <div className={gls.caseContent}>
        <div className={gls.leftContent} ref={sidebarRef}>
          <CaseAbout data={post} />
        </div>
        <div className={gls.rightContent} ref={contentRef}>
          <Content data={post.about} />
          <Content data={post.сhallenge} />
          <Content data={post.content} title="The process" />
        </div>
      </div>
      <Slider data={post.slider} />
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
