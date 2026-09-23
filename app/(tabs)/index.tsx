import { useState } from 'react';
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function DiscordProfileScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTopIcons}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>🏠</Text>
            </View>
            <TouchableOpacity style={styles.nitroPill}>
              <Text style={styles.nitroText}>🚀 Nitro</Text>
            </TouchableOpacity>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>⚙️</Text>
            </View>
          </View>
        </View>

        <View style={styles.avatarRow}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../../assets/images/avatar.jpg')}
              style={styles.avatarImage}
            />
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>🌙</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.addStatusButton}>
            <Text style={styles.addStatusText}>+ Add Status</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.identityContainer}>
          <Text style={styles.username}>Azwann_shah ∨</Text>
          <Text style={styles.pronouns}>• He/Him</Text>
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>✏️ Edit Profile</Text>
        </TouchableOpacity>


        <View style={styles.card}>
          <Text style={styles.cardHeader}>About Me</Text>
          <Text style={styles.cardBodyText}>
            Nothing much about me.{'\n'}Old account lost. This is my new discord account.
          </Text>
          <Text style={[styles.cardHeader, { marginTop: 16 }]}>Member Since</Text>
          <Text style={styles.cardBodyText}>👾 Jun 11, 2025</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardHeader}>Connections</Text>

          <View style={styles.connectionRow}>
            <Text style={styles.connectionIconContainer}>👤</Text>
            <View style={styles.connectionTextContainer}>
              <Text style={styles.connectionTitle}>UpstairsSuperb9527</Text>
              <Text style={styles.connectionSub}>Member since May 23, 2024</Text>
              <Text style={styles.connectionText}>113,713 Karma</Text>
            </View>
            <Text style={styles.arrowText}>🡭</Text>
          </View>

          <View style={styles.connectionRow}>
            <Text style={styles.connectionIconContainer}>👤</Text>
            <View style={styles.connectionTextContainer}>
              <Text style={styles.connectionTitle}>Azwann_shah</Text>
              <Text style={styles.connectionSub}>Member since May 28, 2024</Text>
              <Text style={styles.connectionText}>41 Posts  1 Followers</Text>
            </View>
            <Text style={styles.arrowText}>🡭</Text>
          </View>

          <View style={styles.connectionRow}>
            <Text style={styles.connectionIconContainer}>👤</Text>
            <View style={styles.connectionTextContainer}>
              <Text style={styles.connectionTitle}>UpstairsSuperB</Text>
            </View>
            <Text style={styles.arrowText}>🡭</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cardRow}>
          <Text style={styles.cardHeaderText}>Your Friends</Text>
          <Text style={styles.arrowText}>›</Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => setIsModalVisible(true)}
          style={styles.smallAlertButton}
        >
          <Text style={styles.smallAlertText}>Alert</Text>
        </Pressable>

        <Modal
          transparent
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Alert Button Pressed</Text>

              <Pressable
                onPress={() => setIsModalVisible(false)}
                style={styles.exitButton}
              >
                <Text style={styles.exitText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f22', 
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  bannerContainer: {
    height: 120,
    backgroundColor: '#d8cbab', 
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  bannerTopIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
  },
  nitroPill: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  nitroText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: -40,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: '#1e1f22',
  },
  statusBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#111214',
    borderRadius: 12,
    padding: 2,
  },
  statusBadgeText: {
    fontSize: 12,
  },
  addStatusButton: {
    backgroundColor: '#2b2d31',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
  },
  addStatusText: {
    color: '#dbdee1',
    fontSize: 13,
    fontWeight: '600',
  },
  identityContainer: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: '#dcddde',
  },
  pronouns: {
    color: '#949ba4',
    fontSize: 13,
    marginTop: 2,
  },
  editButton: {
    backgroundColor: '#5865f2',
    marginHorizontal: 16,
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    backgroundColor: '#2b2d31',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
  },
  cardHeader: {
    color: '#949ba4',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  cardBodyText: {
    color: '#dbdee1',
    fontSize: 14,
    lineHeight: 20,
  },
  connectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
  },
  connectionIconContainer: {
    marginRight: 12,
    fontSize: 18,
  },
  connectionTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  connectionTitle: {
    color: '#f2f3f5',
    fontWeight: 'bold',
    fontSize: 14,
  },
  connectionSub: {
    color: '#949ba4',
    fontSize: 12,
    marginTop: 2,
  },
  connectionText: {
    color: '#dbdee1',
    fontSize: 12,
    lineHeight: 20,
  },
  modBadge: {
    backgroundColor: '#35363c',
    color: '#949ba4',
    fontSize: 10,
  },
  arrowText: {
    color: '#949ba4',
    fontSize: 18,
    marginLeft: 12,
  },
  cardRow: {
    backgroundColor: '#2b2d31',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeaderText: {
    color: '#f2f3f5',
    fontSize: 14,
    fontWeight: '600',
  },
  smallAlertButton: {
    backgroundColor: '#5865f2',
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 12,
    alignSelf: 'center',
  },
  smallAlertText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: 260,
    backgroundColor: '#2b2d31',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20,
  },
  exitButton: {
    backgroundColor: '#5865f2',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  exitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
