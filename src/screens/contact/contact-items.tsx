import { AntDesign, Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Href, Link } from 'expo-router';
import React, { FC, useState } from 'react';
import { Pressable, View as RNView } from 'react-native';
import { SizableText, View, XStack, YStack, AnimatePresence, Text } from 'tamagui';

import Colors from '@/constants/Colors';

// Add this type definition
type FeatherIconName = keyof typeof AntDesign.glyphMap;

interface ContactItemNeededProps {
  label?: string;
  text: string;
}
interface ContactItemCopyProps extends ContactItemNeededProps {
  type: 'copy';
}
interface ContatItemLinkProps extends ContactItemNeededProps {
  type: 'link';
  url: string;
  iconName?: FeatherIconName;
}

export type ContactItemAllProps = ContactItemCopyProps | ContatItemLinkProps;

const CopyItem: FC<ContactItemCopyProps> = ({ label, text }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = async () => {
    setCopied(true);
    await Clipboard.setStringAsync(text);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <Pressable onPress={copyToClipboard}>
      {({ hovered }) => (
        <RNView className="bg-background2 flex-row p-4 rounded-xl">
          <AnimatePresence>
            <YStack f={1} justifyContent="center">
              {copied ? (
                <Text textAlign="left" animation="quick" y={0} opacity={1} scale={1}>
                  <Feather
                    name="check-circle"
                    size={24}
                    color={Colors.dark.orange[200]}
                    style={{ marginRight: 8 }}
                  />
                  E-mail Copied!
                </Text>
              ) : (
                <YStack y={0} opacity={1} scale={1}>
                  {label && (
                    <SizableText fontWeight="500" size="$5">
                      {label}:
                    </SizableText>
                  )}
                  <Text
                    textAlign="left"
                    fontWeight="900"
                    numberOfLines={1}
                    $md={{
                      fontSize: 16,
                    }}
                    allowFontScaling>
                    {text}
                  </Text>
                </YStack>
              )}
            </YStack>

            <Pressable
              className={` bg-slate-800 p-4 ${hovered && 'bg-slate-500'} rounded-xl self-end`}>
              <Feather
                name="copy"
                size={24}
                color={hovered ? Colors.dark.orange[200] : Colors.dark.orange[100]}
              />
            </Pressable>
          </AnimatePresence>
        </RNView>
      )}
    </Pressable>
  );
};

const LinkItem: FC<ContatItemLinkProps> = ({ label, text, url, iconName = 'link' }) => {
  return (
    <AnimatePresence>
      <Link href={url as Href} target="_blank" rel="noopener noreferrer" asChild>
        <Pressable>
          {({ hovered }) => (
            <RNView className="bg-background2   flex-row p-4 rounded-xl">
              <YStack f={1} justifyContent="center">
                {label && (
                  <SizableText fontWeight="500" size="$5">
                    {label}:
                  </SizableText>
                )}
                <XStack alignItems="center" gap="$4">
                  <AntDesign
                    name={iconName}
                    style={{
                      lineHeight: 24,
                    }}
                    size={24}
                    color={Colors.dark.white[100]}
                  />
                  <Text
                    textAlign="left"
                    fontWeight="900"
                    cursor="pointer"
                    numberOfLines={1}
                    $md={{
                      fontSize: 16,
                    }}
                    allowFontScaling>
                    {text}
                  </Text>
                </XStack>
              </YStack>

              <Pressable
                className={` bg-slate-800 p-4 ${hovered && 'bg-slate-500'} rounded-xl self-end`}
                // bg={hovered ? Colors.dark.black[300] : Colors.dark.black[100]}
              >
                <Feather
                  name="external-link"
                  size={24}
                  color={hovered ? Colors.dark.orange[200] : Colors.dark.orange[100]}
                />
              </Pressable>
            </RNView>
            // <XStack
            //   animation="quick"
            //   className="bg-background"
            //   // bg={Colors.dark.orange[200]}
            //   paddingVertical="$4"
            //   paddingLeft="$5"
            //   paddingRight="$4"
            //   enterStyle={{ opacity: 0, scale: 0.9 }}
            //   exitStyle={{ opacity: 0, scale: 0.9 }}
            //   br="$1">
            //   <YStack f={1} justifyContent="center">
            //     {label && (
            //       <SizableText fontWeight="500" size="$5">
            //         {label}:
            //       </SizableText>
            //     )}
            //     <XStack alignItems="center" gap="$4">
            //       <AntDesign
            //         name={iconName}
            //         style={{
            //           lineHeight: 24,
            //         }}
            //         size={24}
            //         color={Colors.dark.white[100]}
            //       />
            //       <Text
            //         textAlign="left"
            //         fontWeight="900"
            //         cursor="pointer"
            //         numberOfLines={1}
            //         $md={{
            //           fontSize: 16,
            //         }}
            //         allowFontScaling>
            //         {text}
            //       </Text>
            //     </XStack>
            //   </YStack>

            //   <View
            //     padding="$4"
            //     bg={hovered ? Colors.dark.black[300] : Colors.dark.black[100]}
            //     br={16}>
            //     <Feather
            //       name="external-link"
            //       size={24}
            //       color={hovered ? Colors.dark.orange[200] : Colors.dark.orange[100]}
            //     />
            //   </View>
            // </XStack>
          )}
        </Pressable>
      </Link>
    </AnimatePresence>
  );
};

const ContactItems: FC<ContactItemAllProps> = (props) => {
  const { type } = props;

  switch (type) {
    case 'copy':
      return <CopyItem {...props} />;
    case 'link':
      return (
        <View enterStyle={{ opacity: 0, scale: 0.9 }} exitStyle={{ opacity: 0, scale: 0.9 }}>
          <LinkItem {...props} />
        </View>
      );
    default:
      return null;
  }
};

export default ContactItems;
