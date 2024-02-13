export function About() {
  return (
    <div class="bg-gradient-to-r from-secondary-800 to-primary-700">
      <div class="mx-auto max-w-4xl py-16 px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
        <h2 class="text-3xl font-bold tracking-tight text-white">
          Hi, I'm Jack Isherwood
        </h2>
        <p class="mt-4 max-w-3xl text-lg text-secondary-200">
          I am a software developer living in Victoria, Canada. In my role at
          Track49 I am using Typescript, Node and Vue to develop Fintech and
          Insuretech applications. When I am not building software I enjoy
          running, hiking, and gaming.
        </p>
        <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          <div>
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Design</h3>
              <p class="mt-2 text-base text-secondary-200">
                I have experience designing user interfaces as well as complex
                backend software systems.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Programming</h3>
              <p class="mt-2 text-base text-secondary-200">
                Functional programming is my favorite style. My two favorite
                languages are Clojure and Elixir.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Deployment</h3>
              <p class="mt-2 text-base text-secondary-200">
                I primarily deploy applications by running them serverlessly on
                AWS Lambda.
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Maintenance</h3>
              <p class="mt-2 text-base text-secondary-200">
                I have experience maintaining large projects with millions of
                lines of code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
