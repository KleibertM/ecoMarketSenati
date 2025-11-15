import { Flex, Image } from '@chakra-ui/react'
import { PiEnvelopeSimpleOpenFill, PiTiktokLogoFill, PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import BtnLink from '../btn/BtnLink';
const Contact = () => {
    return (
        <>
            <Flex flexDirection={'column'} justifyContent={'center'} align={'center'}>
                <Flex flexDirection={['column', 'row']} paddingY={4} gap={10}>
                    <Image
                        src={"https://tse4.mm.bing.net/th/id/OIP.GkNVYZgpen7Z8j-xSJNjPQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"}
                        loading='lazy'
                        alt='Logo Munay'
                        h={['auto', '12rem']}
                        borderRadius={'100%'}
                    />
                    <Flex flexWrap={'nowrap'} align={'center'} justify={'center'} gap={4}>
                        <BtnLink icon={<PiEnvelopeSimpleOpenFill />} link={'#'} />
                        <BtnLink icon={<FaFacebook />}  link={'#'} />
                        <BtnLink icon={<PiTiktokLogoFill />} link={'#'} />
                        <BtnLink icon={<PiInstagramLogoFill />} link={'#'} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Contact