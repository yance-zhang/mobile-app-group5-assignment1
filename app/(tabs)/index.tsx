import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { SymbolView } from "expo-symbols";

export default function TabOneScreen() {
  const statistics = [
    {
      label: "Posted",
      value: 53,
    },
    {
      label: "Members",
      value: 12,
    },
    {
      label: "Admins",
      value: 1,
    },
  ];
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <SymbolView
          name={{
            ios: "chevron.left.forwardslash.chevron.right",
            android: "chevron_left",
            web: "chevron_left",
          }}
          size={28}
        />
        {/* title */}
        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerHandle}>ootd_everyday</Text>
        </View>
        <SymbolView
          name={{
            ios: "chevron.left.forwardslash.chevron.right",
            android: "add",
            web: "add",
          }}
          size={28}
        />
      </View>
      <View style={{ flexDirection: "row", width: "100%", padding: 10 }}>
        {/* borderred avater */}
        <View style={styles.avaterBox}>
          <View style={styles.avater}>
            <Text style={styles.avaterText}>OO TD</Text>
          </View>
        </View>
        {/* statistics */}
        <View style={styles.statisticsBox}>
          {statistics.map((s) => (
            <View key={s.label} style={styles.statisticsItem}>
              <Text style={styles.statisticsValue}>{s.value}</Text>
              <Text style={styles.statisticsLabel}>{s.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    padding: 10,
  },
  headerTitle: {
    fontWeight: "bold",
  },
  headerHandle: {
    opacity: 0.5,
    fontSize: 12,
  },
  container: {
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  avater: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "blue",
  },
  avaterBox: {
    width: 80,
    height: 80,
    padding: 3,
    borderWidth: 3,
    borderRadius: "50%",
    borderColor: "pink",
  },
  avaterText: {
    color: "white",
    fontSize: 24,
    lineHeight: 20,
    textAlign: "center",
    fontWeight: 600,
  },
  statisticsBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  statisticsItem: {
    alignItems: "center",
  },
  statisticsValue: {
    fontSize: 20,
  },
  statisticsLabel: {
    fontSize: 14,
    opacity: 0.8,
  },
});
