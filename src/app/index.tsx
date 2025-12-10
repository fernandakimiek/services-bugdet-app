import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Plus, Search, SlidersHorizontal } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import BudgetsList from "./BudgetsList";
import styles from "./styles";

export default function App() {
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
        />
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal color="#6A46EB" size={20} />
        </TouchableOpacity>
      </View>

      <BudgetsList />
    </View>
  );
}
