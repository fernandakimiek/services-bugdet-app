import { Button } from "@/components/Button";
import { FilterModal } from "@/components/FilterModal";
import { Input } from "@/components/Input";
import { FilterOrder } from "@/types/FilterOrder";
import { FilterStatus } from "@/types/FilterStatus";
import { Plus, Search, SlidersHorizontal } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BudgetsList from "./BudgetsList";
import styles from "./styles";

export default function App() {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<FilterStatus[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<FilterOrder | null>(
    FilterOrder.MOST_RECENT
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatusToggle = (status: FilterStatus) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleOrderSelect = (order: FilterOrder) => {
    setSelectedOrder(order);
  };

  const handleResetFilters = () => {
    setSelectedStatuses([]);
    setSelectedOrder(FilterOrder.MOST_RECENT);
  };

  const handleApplyFilters = () => {
    setIsFilterModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Orçamentos</Text>
          <Text style={styles.headerSubtitle}>
            Você tem 1 item em rascunho
          </Text>
        </View>
        <Button
          text="Novo"
          icon={<Plus color="#fff" size={20} />}
          backgroundColor="#6A46EB"
          onPress={() => {
            /* Ação ao pressionar o botão */
          }}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.searchContainer}>
        <Input
          icon={<Search color="#4A4A4A" size={20} />}
          placeholder="Título ou cliente"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setIsFilterModalVisible(true)}
        >
          <SlidersHorizontal color="#6A46EB" size={20} />
        </TouchableOpacity>
      </View>

      <BudgetsList
        selectedStatuses={selectedStatuses}
        selectedOrder={selectedOrder}
        searchQuery={searchQuery}
      />

      <FilterModal
        visible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisible(false)}
        selectedStatuses={selectedStatuses}
        selectedOrder={selectedOrder}
        onStatusToggle={handleStatusToggle}
        onOrderSelect={handleOrderSelect}
        onReset={handleResetFilters}
        onApply={handleApplyFilters}
      />
    </View>
  );
}
