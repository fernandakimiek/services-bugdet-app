import { Text, TouchableOpacity, View } from "react-native";

import { FilterStatus } from "@/types/FilterStatus";
import { StatusTag } from "../StatusTag";
import { styles } from "./styles";

export type BudgetCardData = {
  id: string;
  title: string;
  clientName: string;
  status: FilterStatus;
  cost: number;
};

type BudgetCardProps = {
  data: BudgetCardData;
  onPress: () => void;
};

export function BudgetCard({ data, onPress }: BudgetCardProps) {
  const { clientName, status, title, cost } = data;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        <View style={styles.leftSection}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.clientName}>{clientName}</Text>
        </View>

        <View style={styles.rightSection}>
          <StatusTag status={status} />
          <Text style={styles.price}>
            {cost.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
