import { InferGetStaticPropsType } from "next/types"

export const getStaticProps = async () => {
  const response = await fetch('https://backend-omega-seven.vercel.app/api/getjoke');
  const joke = await response.json();

  return {
    props: {
      joke,
    },
  }
}

function DevJoke({ joke }: InferGetStaticPropsType<typeof getStaticProps>) {}