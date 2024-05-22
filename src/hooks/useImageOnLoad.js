import { useState } from 'react'

const useImageOnLoad = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    const handleImageOnLoad = () => setIsLoaded(true)

    const transitionStyles = {
        lowRes: {
            position: 'absolute',
            opacity: isLoaded ? 0 : 1,
        },
        highRes: {
            opacity: isLoaded ? 1 : 0,
        },
    }

    return { handleImageOnLoad, transitionStyles }
}

export default useImageOnLoad