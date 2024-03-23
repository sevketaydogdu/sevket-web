import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Sheet,
  TooltipSimple,
  Unspaced,
  XStack,
} from 'tamagui';
export function MainModal() {
  return <DialogInstance />;
}
function DialogInstance() {
  return (
    <Dialog allowPinchZoom>
      <Dialog.Trigger asChild>
        <Button>Show Dialog</Button>
      </Dialog.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" gap="$4">
            <Adapt.Contents />
          </Sheet.Frame>

          <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        </Sheet>
      </Adapt>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          //   animation="lazy"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$4">
          <Dialog.Title>Edit profile</Dialog.Title>

          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>

          <Fieldset gap="$4" horizontal bw="$0">
            <Label width={160} justifyContent="flex-end" htmlFor="name">
              Name
            </Label>

            <Input flex={1} id="name" defaultValue="Nate Wienert" />
          </Fieldset>

          <XStack alignSelf="flex-end" gap="$4">
            <DialogInstance />
            <Dialog.Close displayWhenAdapted asChild>
              <Button theme="active" aria-label="Close">
                Save changes
              </Button>
            </Dialog.Close>
          </XStack>
          <Unspaced>
            <Dialog.Close asChild>
              <Button position="absolute" top="$3" right="$3" size="$3" circular />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
