import ContentLoader from 'react-content-loader'

const SingleProjectSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={1100}
        height={600}
        viewBox="0 0 1050 600"
        backgroundColor="#e3e3e3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="400" y="23" rx="5" ry="5" width="180" height="28" />
        <rect x="64" y="63" rx="10" ry="10" width="896" height="428" />
        <rect x="100" y="520" rx="5" ry="5" width="810" height="328" />
        <circle cx="30" cy="276" r="25" />
        <circle cx="995" cy="276" r="25" />
    </ContentLoader>
)

export default SingleProjectSkeleton
