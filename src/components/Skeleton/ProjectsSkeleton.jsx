import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={550}
    height={600}
    viewBox="0 0 550 600"
    backgroundColor="#e3e3e3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="18" rx="10" ry="10" width="350" height="33" /> 
    <rect x="9" y="64" rx="10" ry="10" width="533" height="370" /> 
    <rect x="457" y="16" rx="10" ry="10" width="80" height="33" />
  </ContentLoader>
)

export default Skeleton