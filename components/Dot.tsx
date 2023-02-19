export type DotProps = {
  rotation: number;
  radius: number;
  scale: number;
  direction: 1 | 0;
};

export function Dot(props: DotProps) {
  const style = `transform: rotate(${props.rotation}deg) translate(${props.radius}rem) scale(${props.scale})`;

  const parentClass = `absolute rounded-full bottom-0 top-0 mt-auto mb-auto ml-auto mr-auto left-0 right-0 hidden md:block`;

  // const rotationClass = props.direction == 1 ? "animate-orbit" : "animate-reverse-orbit"
  // const rotationClass = ""
  const keyframe       = props.direction == 1 ? "spin-right" : "spin-left"
  const animationStyle = `animation: ${3 + (props.radius - 19) * 4 + (props.scale * 2)}s infinite linear ${keyframe};`

  return (
    <div
      class={parentClass}
      style="height: 40rem; width: 40rem;"
    >
      <div class={`relative w-full h-full`} style={animationStyle}>
        <div
          class="rounded-full h-1 w-1 bg-blue-700 absolute m-auto top-0 bottom-0 left-0 right-0"
          style={style}
        >
        </div>
      </div>
    </div>
  );
}
