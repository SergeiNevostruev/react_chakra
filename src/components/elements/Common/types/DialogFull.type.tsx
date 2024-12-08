import { MouseEventHandler, ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IDialogFull {
  children: ReactNode;
  buttonEl: ReactNode;
  title: string;
  activeOk: MouseEventHandler | undefined;
  activeCancel: MouseEventHandler | undefined;
}
