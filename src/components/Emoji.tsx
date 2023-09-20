import thumnsUp from '../assets/thumbs-up.webp'
import bullsEye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import { Image, ImageProps } from '@chakra-ui/react'


interface Props {
    ratings: number
}
const Emoji = ({ratings}:Props) => {
    if(ratings < 3) return null

    const emojiMap : {[key: number] : ImageProps} = {
        3: {src: meh, alt: 'meh', boxSize: '25px' },
        4: {src: thumnsUp, alt: 'thumnsUp', boxSize: '25px' },
        5: {src: bullsEye, alt: 'bullsEye', boxSize: '35px' }
    }

  return (
     <Image {...emojiMap[ratings]} />
  )
}

export default Emoji
