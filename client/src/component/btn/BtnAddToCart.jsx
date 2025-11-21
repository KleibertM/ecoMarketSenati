import { useState } from "react";
import { useCart } from "../../hook/cartHook";
import { Button, useToast, Select, Flex, Text, Tooltip } from '@chakra-ui/react'
import { FiShoppingCart } from "react-icons/fi";

const BtnAddToCart = ({ dataItem, FlexDirec }) => {
    const { addToCart } = useCart()
    const toast = useToast()

    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <Flex 
            flexDirection={FlexDirec}
            gap={2}>
                <Select
                    name="elegir cantidad"
                    border={"2px solid #107407ff"}
                    borderRadius={'9999px'}
                    w={['auto', 'auto']}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))} // Actualizar la cantidad seleccionada 
                >
                    {[...Array(189).keys()].map((number) => (
                        <option
                            key={number + 1}
                            value={number + 1}
                        >
                            {number + 1}
                        </option>
                    ))}
                </Select>
                <Tooltip label='Agregar al carrito'>
                    <Button bg={'#107407ff'} color={'white'} name="Agregar al carrito" gap={2}
                        onClick={() => {
                            const productWithQuantity = { ...dataItem, quantity }; // Agregar la cantidad seleccionada al producto
                            addToCart(productWithQuantity); // Llamar a addToCart con el producto actualizado
                            toast({
                                title: 'Agregaste al.',
                                description: `Se agrego ${quantity} articulo ${dataItem.nombre} al carrito.`,
                                status: 'success',
                                duration: 1500,
                                isClosable: true,
                            });
                        }}
                        borderRadius={50}>
                        <Text>
                            Añadir al
                        </Text>
                        <Text fontSize={'2rem'}>
                            <FiShoppingCart />
                        </Text>
                    </Button>
                </Tooltip>
            </Flex>
        </>
    )
}
export default BtnAddToCart