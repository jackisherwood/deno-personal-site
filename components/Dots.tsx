import {Dot, DotProps} from "./Dot.tsx"

import * as R from "ramda"

function getPositions(): DotProps[] {
  const numberOfDots = 50
  const minimumRadius = 20
  const maximumRadius = 45
  const maximumScale = 4

  return R.times(() => {
    const radius = (maximumRadius - minimumRadius) * Math.random() + minimumRadius
    const rotation = Math.random() * 360
    const scale = Math.ceil(Math.random() * maximumScale)
    const direction = Math.random() > .5 ? 1 : 0

    return { radius, rotation, scale, direction }
  }, numberOfDots)
}

export function Dots() {
  const positions = getPositions()

  console.log(positions)

  const dots = R.map((props: DotProps) => (<Dot {...props}></Dot>), positions)

  return (
    <div>
      {
        dots
      }
    </div>
  )
}