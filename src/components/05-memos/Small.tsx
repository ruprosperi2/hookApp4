import React, { memo } from "react"

const Small = memo(({ value }) => {
  console.log("me renderice gente")
  return (
    <div>
      {value}
    </div>
  )
})

export default Small
