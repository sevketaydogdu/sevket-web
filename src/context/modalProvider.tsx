import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { useNonReactiveCallback } from '@/hooks/useNonReactiveCallback';
interface IModal {
  onClose?: () => Promise<void>;
}
// export interface ConfirmModal   {
//   name: 'confirm';
//   type: 'fullScreen';

//   // title: string;
//   // message: string | (() => JSX.Element);
//   // onPressConfirm: () => void | Promise<void>;
//   // onPressCancel?: () => void | Promise<void>;
//   confirmBtnText?: string;
//   confirmBtnStyle?: StyleProp<ViewStyle>;
//   cancelBtnText?: string;
// }
export interface PostMoreModal {
  name: 'postMore';
}

export type Modal = PostMoreModal;

const ModalContext = React.createContext<{
  isModalActive: boolean;
  activeModals: Modal[];
}>({
  isModalActive: false,
  activeModals: [],
});

const ModalControlContext = React.createContext<{
  openModal: (modal: Modal) => void;
  /**
   * Close modal'a bir callback istenilebilir, bu callback ile modal kapandıktan sonra yapılması gereken bir işlem var ise o yapılır.
   * @returns
   */
  closeModal: (callback?: () => void) => boolean;
  closeAllModals: () => void;
}>({
  openModal: () => {},
  closeModal: (callback?: () => void) => false,
  closeAllModals: () => {},
});

/**
 * @deprecated DO NOT USE THIS unless you have no other choice.
 */
export let unstable__openModal: (modal: Modal) => void = () => {
  throw new Error(`ModalContext is not initialized`);
};

/**
 * @deprecated DO NOT USE THIS unless you have no other choice.
 */
export let unstable__closeModal: () => boolean = () => {
  throw new Error(`ModalContext is not initialized`);
};

export function Provider({ children }: React.PropsWithChildren<object>) {
  const [activeModals, setActiveModals] = React.useState<Modal[]>([]);

  const openModal = useNonReactiveCallback((modal: Modal) => {
    setActiveModals((modals) => [...modals, modal]);
  });

  const closeModal = useNonReactiveCallback((callback?: () => void) => {
    const wasActive = activeModals.length > 0;
    setActiveModals((modals) => {
      return modals.slice(0, -1);
    });
    if (callback && typeof callback === 'function') {
      callback();
    }
    return wasActive;
  });

  const closeAllModals = useNonReactiveCallback(() => {
    setActiveModals([]);
  });

  unstable__openModal = openModal;
  unstable__closeModal = closeModal;

  const state = React.useMemo(
    () => ({
      isModalActive: activeModals.length > 0,
      activeModals,
    }),
    [activeModals]
  );

  const methods = React.useMemo(
    () => ({
      openModal,
      closeModal,
      closeAllModals,
    }),
    [openModal, closeModal, closeAllModals]
  );

  return (
    <ModalContext.Provider value={state}>
      <ModalControlContext.Provider value={methods}>{children}</ModalControlContext.Provider>
    </ModalContext.Provider>
  );
}

export function useModals() {
  return React.useContext(ModalContext);
}

export function useModalControls() {
  return React.useContext(ModalControlContext);
}
