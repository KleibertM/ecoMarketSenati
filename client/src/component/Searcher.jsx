import { Flex, Input } from '@chakra-ui/react'

const Searcher = ({  searcher }) => {

    return (
        <>
            <Flex  w={['50%', 'auto']}
            bottom={0} 
            left={'calc(50% - 50%)'} 
            zIndex={10}
            mx='10'
            marginBottom={'1rem'}
            px='1' 
            py='1' 
            bg='gray.50' 
            borderRadius={50} >
                <Input placeholder=' Buscar . . .'
                    name="searchInput"
                    onChange={searcher}
                    borderRadius={50}
                    aria-label='barra de busqueda'
                />
            </Flex>
        </>
    )
}

export default Searcher;
