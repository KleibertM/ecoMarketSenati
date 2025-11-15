import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { lazy } from 'react';

const CardsContent = lazy(()=> import('../Cards/Cards'))


const TabsNav = () => {

  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab fontSize={'1.5rem'} fontFamily={'munayTitle'} name='Sabores tradicional'>Produtos</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CardsContent />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabsNav