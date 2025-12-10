import { BudgetCard, BudgetCardData } from "@/components/BudgetCard";
import { FilterStatus } from "@/types/FilterStatus";
import { useEffect, useState } from "react";

import { FlatList, View } from "react-native";
import styles from "./styles";

export default function BudgetsList() {
  const [filter, setFilter] = useState<FilterStatus | undefined>(undefined);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState<BudgetCardData[]>([
    {
      id: "1",
      title: "Desenvolvimento de aplicativo de loja online",
      clientName: "Soluções Tecnológicas Beta",
      status: FilterStatus.APPROVED,
      cost: 22300,
    },
    {
      id: "2",
      title: "Consultoria em marketing digital",
      clientName: "Marketing Wizards",
      status: FilterStatus.DRAFT,
      cost: 4000,
    },
    {
      id: "3",
      title: "Serviços de SEO",
      clientName: "SEO Masters",
      status: FilterStatus.SENT,
      cost: 3500,
    },
    {
      id: "4",
      title: "Criação de conteúdo",
      clientName: "Content Creators",
      status: FilterStatus.DRAFT,
      cost: 2500,
    },
    {
      id: "5",
      title: "Gestão de redes sociais",
      clientName: "Social Experts",
      status: FilterStatus.DENIED,
      cost: 1800,
    },
    {
      id: "6",
      title: "Design de interface",
      clientName: "UI/UX Designers",
      status: FilterStatus.APPROVED,
      cost: 5200,
    },
  ]);

  useEffect(() => {
    // getBudgets();
  }, [filter]);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BudgetCard data={item} onPress={() => item.id} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}
