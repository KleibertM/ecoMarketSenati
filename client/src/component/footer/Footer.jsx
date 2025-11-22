import { PiPlanetFill } from "react-icons/pi";
import { lazy} from 'react';
import Form from "../contact/Form";
import { Flex } from "@chakra-ui/react";


const Contact = lazy(()=> import('../contact/Contact'))
const BannerText = lazy(()=> import('../bannerText/BannerText'))

const Footer = () => {
    return (
        <>
        <Flex justifyContent={'space-evenly'} flexDirection={['column' , 'row']} position={'relative'} alignContent={'center'}>
            <Contact />
            <Form />
        </Flex>
        <BannerText icon={<PiPlanetFill />} text={'EcoMarket'} />
        </>
    )
}

export default Footer
