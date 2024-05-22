import useImageOnLoad from '../hooks/useImageOnLoad'

const Image = ({ alt, lowResSrc, highResSrc }) => {
    const { handleImageOnLoad, transitionStyles } = useImageOnLoad()

    const styles = {
        image: {
            height: '6rem',
            width: '6rem',
            aspectRatio: '1/1',
        },
    }

    const lowResStyle = {
        ...styles.image,
        ...transitionStyles.lowRes,
    }
    const highResStyle = {
        ...styles.image,
        ...transitionStyles.highRes,
    }

    return (
        <>
            <img alt={alt} src={lowResSrc} style={lowResStyle} />
            <img alt={alt} src={highResSrc} style={highResStyle} onLoad={handleImageOnLoad} />
        </>
    )
}

export default Image