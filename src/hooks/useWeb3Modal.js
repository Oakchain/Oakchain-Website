import {
  useIsWalletModalOpen,
  useSetIsWalletModalOpen,
} from "@thirdweb-dev/react";

const useWeb3Modal = () => {
  const isOpen = useIsWalletModalOpen();
  const setIsOpen = useSetIsWalletModalOpen();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, setIsOpen, open, close, toggleModal };
};

export default useWeb3Modal;
