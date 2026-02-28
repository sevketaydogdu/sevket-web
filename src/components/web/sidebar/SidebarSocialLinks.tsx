import { Link } from 'expo-router';
import { Image, Text, View } from 'react-native';

interface SidebarSocialLinksProps {
  isCompact: boolean;
}

export default function SidebarSocialLinks({ isCompact }: SidebarSocialLinksProps) {
  if (isCompact) return null;

  return (
    <>
      <Link
        href="https://twitter.com/intent/follow?screen_name=sevketaydogdu"
        className="flex-row items-center gap-2 mt-8"
        target="_blank">
        <View className="flex-row items-center gap-3 pl-2 relative">
          <View className="relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_210_10)">
                <path
                  d="M18.5808 0H5.41922C2.42627 0 0 2.4375 0 5.44431V18.5557C0 21.5625 2.42627 24 5.41922 24H18.5808C21.5737 24 24 21.5625 24 18.5557V5.44431C24 2.4375 21.5737 0 18.5808 0Z"
                  fill="black"
                />
                <path
                  d="M14.6962 7H16.3894L12.6905 11.2477L17.0419 17.0273H13.6345L10.9659 13.5223L7.91203 17.0273H6.21797L10.1742 12.4843L6 7H9.49359L11.9058 10.2041L14.6962 7ZM14.1019 16.0092H15.0403L8.98406 7.96492H7.97719L14.1019 16.0092Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_210_10">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </View>
          <Text className="text-sm text-slate-400 font-semibold">Follow Sevket on 𝕏</Text>
        </View>
      </Link>
      <Link
        href="https://medium.com/@sevketaydogdu34"
        className="flex-row items-center gap-2 mt-2"
        target="_blank">
        <View className="flex-row items-center gap-3 pl-2 relative">
          <View className="relative">
            <Image
              source={{
                uri: 'https://pbs.twimg.com/profile_images/3544660761/2e8f6be2ebb5d814bd567960a647638b_400x400.png',
              }}
              alt="Twitter"
              className="w-6 h-6 rounded-full"
            />
            <View className="w-2 h-2 bg-red-500 rounded-full absolute -top-0.5 -right-0.5" />
          </View>
          <Text className="text-sm text-slate-400 font-semibold">Follow Sevket on Medium</Text>
        </View>
      </Link>
    </>
  );
}

