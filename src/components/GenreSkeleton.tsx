import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react"

const GenreSkeleton = () => {
  return (
   <>
    <HStack>
        <Skeleton boxSize={'32px'} borderRadius={8} />
        <SkeletonText />
        <SkeletonText width={12} skeletonHeight='1' noOfLines={1}  mt='4'/>
    </HStack>
   </>
  )
}

export default GenreSkeleton
