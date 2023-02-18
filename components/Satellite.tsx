type SatelliteProps = {
  startRotation: number;
  border: boolean;
  children: any;
};

export function Satellite(props: SatelliteProps) {
  const style = `transform: rotate(${props.startRotation}deg) translate(20rem) rotate(-${props.startRotation}deg)`;

  const parentClass = `${
    props.border ? "border border-2" : ""
  } absolute rounded-full bottom-0 top-0 mt-auto mb-auto ml-auto mr-auto left-0 right-0 hidden md:block`;

  return (
    <div
      class={parentClass}
      style="height: 40rem; width: 40rem; max-width: 100%"
    >
      <div class="relative w-full h-full animate-orbit">
        <div
          class="rounded-full h-20 w-20 bg-white border border-2 absolute m-auto top-0 bottom-0 left-0 right-0"
          style={style}
        >
          <div class="flex w-full h-full items-center justify-center animate-reverse-orbit">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
