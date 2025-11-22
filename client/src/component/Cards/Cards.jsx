import CardComponent from '../Card/Card'
import { dataMunay } from '../Data/data'
import { Grid, GridItem } from '@chakra-ui/react'
import Searcher from '../Searcher'
import { useState } from 'react'

const CardsContent = () => {
    const [search, setSearch] = useState('')

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const results = !search ? dataMunay : dataMunay.filter((dataMunay) => dataMunay.nombre.toLowerCase().includes(search.toLowerCase()));
    return (
        <>
            <Searcher searcher={searcher} />
            <Grid h='auto' w={'100vw'}
                templateRows={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
                gap={[4, 8]} position={'relative'}
            >

                {results.map((item, index) => (
                    <>
                        <GridItem key={index} margin={'0 auto'} >
                            <CardComponent dataItem={item} />
                        </GridItem>
                    </>
                ))}
            </Grid>
        </>

    )
}

export default CardsContent
