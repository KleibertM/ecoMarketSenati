import {
    Box,
    Flex,
    FormControl,
    Input,
    Stack,
    Button, Textarea,
} from "@chakra-ui/react"
import { useState } from "react";
import Messages from "../Messages";
"use client"
const Form = () => {
    const [datos, setDatos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value;
        const mensaje = e.target.mensaje.value;

        setDatos(prev => [...prev, { nombre, mensaje }]);

    }
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <Stack w={['100vw', '600px']} gap="4" margin={'1rem 0'} p={'1rem'}>

                        <FormControl isRequired>
                            <Input placeholder="Nombre" name="nombre" />
                        </FormControl>

                        <FormControl isRequired>
                            <Textarea placeholder="Mensaje..." name="mensaje" />
                        </FormControl>

                        <Button type="submit" colorScheme="green" mt="3">
                            Enviar
                        </Button>

                    </Stack>
                </form>
                {datos ? <Messages data={datos} /> : null}
                
            </>
        )
    
}
export default Form;
