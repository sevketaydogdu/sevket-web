import Head from 'expo-router/head';
import React from 'react';
import { Linking, Platform, StyleSheet, Text, View } from 'react-native';

export type Segment = string | { text: string; url: string };
export type Inline = string | Segment[];

export type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: Inline }
  | { type: 'ul'; items: Inline[] };

export type LegalSection = {
  lang: 'en' | 'tr';
  title: string;
  lastUpdated: string;
  blocks: Block[];
};

type Props = {
  pageTitle: string;
  description: string;
  sections: LegalSection[];
};

const openUrl = (url: string) => {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    return;
  }
  Linking.openURL(url);
};

const renderInline = (value: Inline) => {
  if (typeof value === 'string') return value;
  return value.map((seg, i) =>
    typeof seg === 'string' ? (
      <React.Fragment key={i}>{seg}</React.Fragment>
    ) : (
      <Text
        key={i}
        accessibilityRole="link"
        // react-native-web renders this as a real <a href>
        {...({ href: seg.url } as object)}
        onPress={(e) => {
          e?.preventDefault?.();
          openUrl(seg.url);
        }}
        style={styles.link}>
        {seg.text}
      </Text>
    )
  );
};

const LegalPage = ({ pageTitle, description, sections }: Props) => {
  return (
    <View style={styles.page}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <View style={styles.container}>
        {sections.map((section, sIndex) => (
          <View
            key={section.lang}
            style={[styles.section, sIndex > 0 && styles.sectionDivider]}
            {...({ lang: section.lang } as object)}>
            <Text accessibilityRole="header" style={styles.h1}>
              {section.title}
            </Text>
            <Text style={styles.updated}>{section.lastUpdated}</Text>
            {section.blocks.map((block, i) => {
              switch (block.type) {
                case 'h2':
                  return (
                    <Text key={i} accessibilityRole="header" style={styles.h2}>
                      {block.text}
                    </Text>
                  );
                case 'h3':
                  return (
                    <Text key={i} style={styles.h3}>
                      {block.text}
                    </Text>
                  );
                case 'p':
                  return (
                    <Text key={i} style={styles.p}>
                      {renderInline(block.text)}
                    </Text>
                  );
                case 'ul':
                  return (
                    <View key={i} style={styles.list}>
                      {block.items.map((item, j) => (
                        <View key={j} style={styles.listItem}>
                          <Text style={styles.bullet}>{'•'}</Text>
                          <Text style={[styles.p, styles.listText]}>{renderInline(item)}</Text>
                        </View>
                      ))}
                    </View>
                  );
                default:
                  return null;
              }
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default LegalPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'rgb(10, 10, 10)',
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  container: {
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
  },
  section: {
    paddingBottom: 24,
  },
  sectionDivider: {
    marginTop: 32,
    paddingTop: 40,
    borderTopWidth: 1,
    borderTopColor: 'rgba(250, 250, 250, 0.15)',
  },
  h1: {
    color: 'rgb(250, 250, 250)',
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '800',
    marginBottom: 6,
  },
  updated: {
    color: 'rgba(250, 250, 250, 0.6)',
    fontSize: 14,
    marginBottom: 20,
  },
  h2: {
    color: 'rgb(250, 250, 250)',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 8,
  },
  h3: {
    color: 'rgb(250, 250, 250)',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 4,
  },
  p: {
    color: 'rgba(250, 250, 250, 0.85)',
    fontSize: 16,
    lineHeight: 26,
    marginBottom: 10,
  },
  list: {
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bullet: {
    color: 'rgba(250, 250, 250, 0.85)',
    fontSize: 16,
    lineHeight: 26,
    width: 18,
  },
  listText: {
    flex: 1,
    marginBottom: 6,
  },
  link: {
    color: '#E0FF00',
    textDecorationLine: 'underline',
  },
});
