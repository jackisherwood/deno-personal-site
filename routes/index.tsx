import { Head } from "$fresh/runtime.ts";

import { Hero }    from "../components/Hero.tsx"
import { Footer }  from "../components/Footer.tsx"
import { Connect } from "../components/Connect.tsx"
import { About }   from "../components/About.tsx"

export default function Home() {
  return (
    <>
      <Head>
        <title>Jack Isherwood</title>
        {/* <meta name="description">Hi, I'm Jack Isherwood. This is my personal website.</meta> */}
      </Head>

      <div class="bg-white">
        <main>
          <Hero />

          <About></About>

          <Connect></Connect>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}
