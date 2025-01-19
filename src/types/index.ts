import { cases } from "../data/cases";

export type CasesProps = typeof cases;
export type CaseProps = CasesProps[0];

export type ArticleProps = {
  title: string
  text: string
  image: string
  button?: string
  link?: string
}

export type OfferCardProps = {
  title: string
  text: string
  button?: string
  link?: string
}