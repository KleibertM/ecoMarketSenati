import { Flex, Text, keyframes } from '@chakra-ui/react';
import { FiX } from "react-icons/fi";
const animation = keyframes
    `from {
    opacity: 0
}
to {
    opacity: 1
}
`
    ;

const CartNull = () => {
    const myAnimate = ` ${animation} both 1s`
    return (
        <>
            <Flex flexDirection={'column'} align={'center'} justify={'center'} gap={4} animation={myAnimate} h={'80vh'}>

                <Text fontSize={['20rem', 'auto']} 
                color={'#58D68D'}>
                    <FiX />
                </Text>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>
                    ¡Hay producto en el Carrito!
                </Text>
            </Flex>
        </>
    )
}

export default CartNull