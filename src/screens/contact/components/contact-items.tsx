import { AntDesign, Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { Href, Link } from 'expo-router';
import React, { FC, useState } from 'react';
import { Pressable, View, Text } from 'react-native';

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

const textClass = 'color-white text-xl';
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
        <View className=" rounded-2xl">
          <View
            className=" bg-background2 hover:bg-orange-950 flex-row py-4 pl-5 pr-4 rounded-2xl cursor-copy items-center"
            // paddingVertical="$4"
            // paddingLeft="$5"
            // paddingRight="$4"
            // br="$1"
            // animation="quick"
            // enterStyle={{ opacity: 0, scale: 0.9 }}
            // exitStyle={{ opacity: 0, scale: 0.9 }}
            // cursor="copy"
          >
            <View className="flex-col flex-1 justify-center ">
              {copied ? (
                <Text
                  className={textClass}

                  // textAlign="left" animation="quick" y={0} opacity={1} scale={1}
                >
                  <Feather
                    name="check-circle"
                    size={24}
                    color={Colors.dark.orange[200]}
                    style={{ marginRight: 8 }}
                  />
                  E-mail Copied!
                </Text>
              ) : (
                <View className="flex-col  ">
                  {label && <Text className="font-light color-white text-sm">{label}:</Text>}
                  <Text
                    className={textClass}
                    // textAlign="left"
                    // fontWeight="900"
                    // numberOfLines={1}
                    // $md={{
                    //   fontSize: 16,
                    // }}
                    allowFontScaling>
                    {text}
                  </Text>
                </View>
              )}
            </View>

            <View
              className={`p-4 ${hovered ? 'bg-selected' : 'bg-background2'} rounded-2xl`}
              // padding="$4"
              // bg={hovered ? Colors.dark.black[300] : Colors.dark.black[100]}
              // br={16}
            >
              <Feather
                name="copy"
                size={24}
                color={hovered ? Colors.dark.orange[200] : Colors.dark.orange[100]}
              />
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

const LinkItem: FC<ContatItemLinkProps> = ({ label, text, url, iconName = 'link' }) => {
  return (
    <View className=" rounded-2xl">
      <Link href={url as Href} asChild target="_blank" rel="noopener noreferrer">
        <Pressable>
          {({ hovered }) => (
            <View
              className=" bg-background2 hover:bg-orange-950 flex-row py-4 pl-5 pr-4 rounded-2xl cursor-pointer"
              // animation="quick"
              // paddingVertical="$4"
              // paddingLeft="$5"
              // paddingRight="$4"
              // enterStyle={{ opacity: 0, scale: 0.9 }}
              // exitStyle={{ opacity: 0, scale: 0.9 }}
              // br="$1"
            >
              <View className="flex-col flex-1 justify-center">
                {label && <Text className="color-white">{label}:</Text>}
                <View className="flex-row items-center gap-4">
                  <AntDesign
                    name={iconName}
                    style={{
                      lineHeight: 24,
                    }}
                    size={24}
                    color={Colors.dark.white[100]}
                  />
                  <Text
                    // textAlign="left"
                    // fontWeight="900"
                    // cursor="pointer"
                    // numberOfLines={1}
                    // $md={{
                    //   fontSize: 16,
                    // }}
                    className={textClass}
                    allowFontScaling>
                    {text}
                  </Text>
                </View>
              </View>

              <View className={`p-4 ${hovered ? 'bg-selected' : 'bg-background2'} rounded-2xl`}>
                <Feather
                  name="external-link"
                  size={24}
                  color={hovered ? Colors.dark.orange[200] : Colors.dark.orange[100]}
                />
              </View>
            </View>
          )}
        </Pressable>
      </Link>
    </View>
  );
};

const ContactItems: FC<ContactItemAllProps> = (props) => {
  const { type } = props;

  switch (type) {
    case 'copy':
      return <CopyItem {...props} />;
    case 'link':
      return (
        <View
        // enterStyle={{ opacity: 0, scale: 0.9 }} exitStyle={{ opacity: 0, scale: 0.9 }}
        >
          <LinkItem {...props} />
        </View>
      );
    default:
      return null;
  }
};

export default ContactItems;
