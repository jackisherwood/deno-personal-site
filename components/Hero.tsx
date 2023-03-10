import { asset } from "$fresh/runtime.ts";
import { Satellite } from "./Satellite.tsx";
import { Dots } from "./Dots.tsx";

export function Hero() {
  return (
    <div class="relative overflow-hidden pt-0 md:pt-32 pb-0">
      <div class="mt-24 flex justify-center">
        <div class="flex justify-center w-full overflow-hidden">
          <div class="absolute w-full bottom-0 top-0 mt-auto mb-auto ml-auto mr-auto left-0 right-0 overflow-hidden">
            <div
              class="absolute bg-primary-300 filter blur-2xl rounded-full bottom-0 top-0 mt-auto mb-auto ml-auto mr-auto left-0 right-0"
              style="max-width: 20rem; aspect-ratio: 1/1;"
            ></div>

            {/* Typescript icon */}
            <Satellite startRotation={90} border={true}>
              <svg
                fill="none"
                viewBox="0 0 128 128"
                class="text-gray-400 w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="currentColor" height="128" rx="6" width="128" />
                <path
                  clip-rule="evenodd"
                  d="m74.2622 99.468v14.026c2.2724 1.168 4.9598 2.045 8.0625 2.629 3.1027.585 6.3728.877 9.8105.877 3.3503 0 6.533-.321 9.5478-.964 3.016-.643 5.659-1.702 7.932-3.178 2.272-1.476 4.071-3.404 5.397-5.786 1.325-2.381 1.988-5.325 1.988-8.8313 0-2.5421-.379-4.7701-1.136-6.6841-.758-1.9139-1.85-3.6159-3.278-5.1062-1.427-1.4902-3.139-2.827-5.134-4.0104-1.996-1.1834-4.246-2.3011-6.752-3.353-1.8352-.7597-3.4812-1.4975-4.9378-2.2134-1.4567-.7159-2.6948-1.4464-3.7144-2.1915-1.0197-.7452-1.8063-1.5341-2.3598-2.3669-.5535-.8327-.8303-1.7751-.8303-2.827 0-.9643.2476-1.8336.7429-2.6079s1.1945-1.4391 2.0976-1.9943c.9031-.5551 2.0101-.9861 3.3211-1.2929 1.311-.3069 2.7676-.4603 4.3699-.4603 1.1658 0 2.3958.0877 3.6928.263 1.296.1753 2.6.4456 3.911.8109 1.311.3652 2.585.8254 3.824 1.3806 1.238.5552 2.381 1.198 3.43 1.9285v-13.1051c-2.127-.8182-4.45-1.4245-6.97-1.819s-5.411-.5917-8.6744-.5917c-3.3211 0-6.4674.3579-9.439 1.0738-2.9715.7159-5.5862 1.8336-7.844 3.353-2.2578 1.5195-4.0422 3.4553-5.3531 5.8075-1.311 2.3522-1.9665 5.1646-1.9665 8.4373 0 4.1785 1.2017 7.7433 3.6052 10.6945 2.4035 2.9513 6.0523 5.4496 10.9466 7.495 1.9228.7889 3.7145 1.5633 5.375 2.323 1.6606.7597 3.0954 1.5486 4.3044 2.3668s2.1628 1.7094 2.8618 2.6736c.7.9643 1.049 2.06 1.049 3.2873 0 .9062-.218 1.7462-.655 2.5202s-1.1 1.446-1.9885 2.016c-.8886.57-1.9956 1.016-3.3212 1.337-1.3255.321-2.8768.482-4.6539.482-3.0299 0-6.0305-.533-9.0021-1.6-2.9715-1.066-5.7245-2.666-8.2591-4.799zm-23.5596-34.9136h18.2974v-11.5544h-51v11.5544h18.2079v51.4456h14.4947z"
                  fill="#fff"
                  fill-rule="evenodd"
                />
              </svg>
            </Satellite>

            {/* Vue icon */}
            <Satellite startRotation={210} border={false}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 197 170"
                class="text-gray-400 w-12 h-12 pt-2"
                fill="#FFF"
              >
                <polygon
                  fill="currentColor"
                  points="39.23,0 0,0 2.9450761,5.1010782 98.16,170.02 196.32,0 157.06,0 98.16,102.01 42.175701,5.0991171 "
                  id="polygon865"
                />
                <polygon
                  fill="currentColor"
                  points="75.5,2.009956e-14 -6.8113917e-16,2.009956e-14 2.94,5.1 78.44871,5.1 98.16,39.26 117.87937,5.1 193.38,5.1 196.325,0 120.82,7.8065636e-15 114.97322,2.009956e-14 98.16,29.037153 81.35,2.009956e-14 "
                  id="polygon867"
                />
              </svg>
            </Satellite>

            {/* Node icon */}
            <Satellite startRotation={330} border={false}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                class="text-gray-400 w-12 h-12"
              >
                <g fill="currentColor">
                  <path d="M499.8 990c-12.6 0-25.2-3.4-36.4-10.1l-115.9-71c-17.3-10-8.8-13.6-3.2-15.6 23.1-8.3 30-12.4 54.6-26.9 2.6-1.5 6-.9 8.7.7l86.9 51.4c3.2 1.9 7.8 1.9 10.8 0l339.5-201.8c3.2-1.9 5.3-5.8 5.3-9.7V298.5c0-4-2.1-7.9-5.4-9.9L505.3 81.5c-3.2-2-7.5-2-10.7 0L155.5 288.6c-3.4 2-5.5 5.9-5.5 9.8V707c0 4 2.1 7.7 5.4 9.6l87.3 52.4c51.6 26.7 82.2-.4 82.2-32V335.3c0-5.8 4.5-10.3 10.1-10.3h49.9c5.5 0 10.1 4.5 10.1 10.3v401.8c0 71.2-42.3 112.1-107.6 112.1-20 0-35.9 0-80-22.5l-91-54.2C93.9 759.1 80 734 80 707.1V292.6c0-26.9 13.9-52 36.5-65.4L463.6 19.6c21.9-12.9 51.1-12.9 72.9 0l347 207.5c22.5 13.5 36.5 38.6 36.5 65.4V707c0 26.9-13.9 52-36.5 65.5l-347 207.3c-11.1 6.6-23.7 10.1-36.5 10.1l-.2.1z" />
                  <path d="M607.1 710c-141.3 0-183.8-69.1-183.8-129.7 0-5.8 4.5-10.3 10-10.3h44.9c5 0 9.2 3.7 10 8.8 6.7 47.3 36.6 68.1 118.8 68.1 73.1 0 103-22.6 103-62.7 0-23.2-7.6-40.3-121.2-51.8-95-9.7-153.8-31.4-153.8-110 0-72.5 59.1-114.8 158-114.8 100.9 0 167.3 30.6 173.2 111.2.2 2.9-.8 5.8-2.7 8-1.9 2.1-4.5 3.3-7.3 3.3h-45c-4.7 0-8.8-3.4-9.8-8.1-9.6-37.1-37.1-51.2-108.4-51.2-79.8 0-89.1 27.9-89.1 49.5 0 26.2 11 33.8 118.8 48.5C729.3 483.2 780 503.9 780 581.4c0 78.3-63.1 128.6-172.9 128.6z" />
                </g>
              </svg>
            </Satellite>

            <Dots></Dots>
          </div>

          <div class="relative flex items-end" style="height: 440px;">
            <picture>
              <source
                type="image/webp"
                srcset={asset("/torso.webp")}
                style="max-height: 440px; width: auto;"
                alt="photo of Jack Isherwood"
              />
              <img
                src={asset("/torso.png")}
                style="max-height: 440px; width: auto;"
                alt="photo of Jack Isherwood"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
