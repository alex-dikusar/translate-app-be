import React, { useState, useCallback, ComponentType, MouseEvent } from 'react';
import {
  ModalCloseHandler,
  ModalCloseReason,
} from 'src/components/ModalDialog';

type UseModalShowHandler<TProps> = (
  data?: Partial<Omit<TProps, 'open'>>,
) => void;

type UseModalOptions = {
  onClose?: ModalCloseHandler;
  open?: boolean;
};

type UseModalReturn<TProps> = [
  React.ReactNode | null | false,
  UseModalShowHandler<TProps>,
  boolean,
];

export const useModal = <TProps extends UseModalOptions>(
  Component: ComponentType<TProps>,
  options?: UseModalOptions & Partial<TProps>,
): UseModalReturn<TProps> => {
  const [{ open, ...state }, setState] = useState({ open: false });
  const { onClose, ...rest } = options || {};
  const props = { ...rest, ...state } as TProps;

  const showDialog: UseModalShowHandler<TProps> = useCallback(
    (data) => setState({ open: true, ...data }),
    [],
  );

  const closeDialog = useCallback(
    (...args: [event?: MouseEvent | null, reason?: ModalCloseReason]) => {
      setState({ open: false });
      if (onClose) {
        onClose(...args);
      }
    },
    [onClose],
  );

  const DialogComponent = open ? (
    <Component open={open} onClose={closeDialog} {...props} />
  ) : null;

  return [DialogComponent, showDialog, open];
};
