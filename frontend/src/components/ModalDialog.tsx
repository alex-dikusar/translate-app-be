import React, { MouseEvent } from 'react';
import Box from '@mui/material/Box';
import { ModalProps } from '@mui/material/Modal';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export enum ModalCloseReason {
  escapeKeyDown = 'escapeKeyDown',
  backdropClick = 'backdropClick',
  completeAction = 'completeAction',
}

export type ModalCloseHandler = (
  event?: MouseEvent | null,
  reason?: ModalCloseReason,
) => void;

type Props = Omit<DialogProps, 'onClose'> & {
  title: string;
  text?: string;
  contentProps?: DialogContentProps;
  onClose?: ModalCloseHandler;
};

function ModalDialog({
  children,
  open,
  title,
  text,
  contentProps,
  onClick,
  onClose,
  ...rest
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose as ModalProps['onClose']}
      onClick={onClick}
      {...rest}
    >
      <DialogTitle>
        <Box display="inline" flex={1}>
          {title}
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>
      <DialogContent {...contentProps}>
        {text}
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default ModalDialog;
