import { FilterStatus } from "@/types/FilterStatus";

import { Circle } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

const STATUS_THEME: Record<
  FilterStatus,
  { background: string; accent: string }
> = {
  [FilterStatus.DRAFT]: { background: "#E6E5E5", accent: "#A1A2A1" },
  [FilterStatus.SENT]: { background: "#CEEFFF", accent: "#2AA1D9" },
  [FilterStatus.APPROVED]: { background: "#E6F4EA", accent: "#27AE60" },
  [FilterStatus.DENIED]: { background: "#FDEAEA", accent: "#EB5757" },
};

const DEFAULT_STATUS_THEME = { background: "#FFFFFF", accent: "#000000" };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export function StatusTag({ status }: { status: FilterStatus }) {
  const { background, accent } = STATUS_THEME[status] ?? DEFAULT_STATUS_THEME;

  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <Circle size={10} fill={accent} color={accent} />
      <Text style={[styles.statusText, { color: accent }]}>{status}</Text>
    </View>
  );
}
