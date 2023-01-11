import { GetStaticProps, InferGetStaticPropsType } from "next/types"

type Joke = {
  name: string
  twitter: string
  question: string
  punchline: string
}

export const getStaticProps: GetStaticProps<{ joke: Joke }> = async () => {
  const response = await fetch('https://backend-omega-seven.vercel.app/api/getjoke');
  const joke: Joke = await response.json();

  return {
    props: {
      joke,
    },
  }
}

function DevJoke({ joke }: InferGetStaticPropsType<typeof getStaticProps>) {
  // resolves response's 'joke' into Joke object
  return `
    <div>
      <p>${joke.question}</p>
      <p>${joke.punchline}</p>
    </div>
  `
}

export default DevJoke