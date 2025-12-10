import { BudgetCard, BudgetCardData } from "@/components/BudgetCard";
import { FilterOrder } from "@/types/FilterOrder";
import { FilterStatus } from "@/types/FilterStatus";
import { useMemo } from "react";

import { FlatList, View } from "react-native";
import styles from "./styles";

type BudgetsListProps = {
  selectedStatuses: FilterStatus[];
  selectedOrder: FilterOrder | null;
  searchQuery: string;
};

const allItems: BudgetCardData[] = [
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
];

export default function BudgetsList({
  selectedStatuses,
  selectedOrder,
  searchQuery,
}: BudgetsListProps) {
  const filteredAndSortedItems = useMemo(() => {
    let filtered = [...allItems];

    // Aplicar busca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.clientName.toLowerCase().includes(query)
      );
    }

    // Aplicar filtro de status
    if (selectedStatuses.length > 0) {
      filtered = filtered.filter((item) =>
        selectedStatuses.includes(item.status)
      );
    }

    // Aplicar ordenação
    if (selectedOrder) {
      filtered.sort((a, b) => {
        switch (selectedOrder) {
          case FilterOrder.MOST_RECENT:
            // Assumindo que IDs maiores são mais recentes
            return parseInt(b.id) - parseInt(a.id);
          case FilterOrder.OLDEST:
            return parseInt(a.id) - parseInt(b.id);
          case FilterOrder.HIGHEST_VALUE:
            return b.cost - a.cost;
          case FilterOrder.LOWEST_VALUE:
            return a.cost - b.cost;
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [selectedStatuses, selectedOrder, searchQuery]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredAndSortedItems}
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
