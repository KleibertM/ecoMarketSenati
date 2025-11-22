import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    Button,
    Box
} from "@chakra-ui/react";
import { TbMailShare } from "react-icons/tb";
const Messages = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <Popover key={index} placement="auto" closeOnBlur={true}>
                    <PopoverTrigger>
                        <Button w="100%" textAlign="left" justifyContent="space-evenly" mb={2}>
                            {'Mensaje Recibido'} <TbMailShare />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent>
                        <PopoverCloseButton />
                        <PopoverHeader fontWeight="bold">
                            {item.nombre}
                        </PopoverHeader>
                        <PopoverBody>
                            <Box>
                                {item.mensaje}
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            ))}
        </>
    );
};

export default Messages;
