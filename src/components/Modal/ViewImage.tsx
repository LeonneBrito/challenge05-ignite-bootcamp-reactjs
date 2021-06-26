import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose?: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" maxH="600px">
        <ModalBody>
          <Image src={imgUrl} />
        </ModalBody>

        <ModalFooter
          bg="gray.800"
          borderRadius="0px 0px 6px 6px"
          justifyContent="left"
          h="8"
        >
          <Link target="blank" href={imgUrl}>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
