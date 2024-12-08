import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IDialogFull } from "./types/DialogFull.type";

const DialogFull = ({
  children,
  buttonEl,
  title,
  activeOk,
  activeCancel,
}: IDialogFull) => {
  return (
    <DialogRoot
      scrollBehavior="inside"
      size="cover"
      placement="center"
      motionPreset="slide-in-bottom"
    >
      <DialogTrigger asChild>{buttonEl}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={activeCancel}>
              Отказаться
            </Button>
          </DialogActionTrigger>
          <DialogActionTrigger asChild>
            <Button onClick={activeOk}>Принять</Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default DialogFull;
