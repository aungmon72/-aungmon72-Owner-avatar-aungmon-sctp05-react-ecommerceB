import { atom, useAtom } from 'jotai';

export const flashMessageAtom = atom({
    message: '',
    type: 'info',
});

export const useFlashMessage = () => {
    const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);
    

    const showMessage = (message, type = 'info') => {
        setFlashMessage({ message, type });
    };

    const clearMessage = () => {
        setFlashMessage({ message: '', type: 'info' });
    };

    const getMessage = () => {
        return flashMessage;
    };

    return {
        getMessage,
        showMessage,
        clearMessage

    };
}
