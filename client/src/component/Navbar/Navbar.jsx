import {Flex, Avatar} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import BtnSidebar from '../sidebar/BtnSidebar';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    

    return ( 
        <>
        <Flex justify={'space-between'} align={'center'} h={['60px', '70px']} position={'fixed'} zIndex={999} w={'100vw'} bg={'white'} left={0} paddingX={['20px', '60px']}>
            <Link to={'/'} >
                <Avatar size={['md', 'lg']} name='EcoMarket - Tienda Organica' src={"https://tse4.mm.bing.net/th/id/OIP.GkNVYZgpen7Z8j-xSJNjPQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"} bg={'white'} 
                loading='lazy' />
            </Link>

            <BtnSidebar link={'/cart'} icon={<FiShoppingCart />} />
        </Flex>
        </>
    )
}

export default Navbar