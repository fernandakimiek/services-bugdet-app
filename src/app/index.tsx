import { Plus, Search, SlidersHorizontal } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* Ação ao pressionar o botão */
          }}
        >
          <Plus color="#fff" size={20} style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Novo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search color="#4A4A4A" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="#676767"
            placeholder="Título ou cliente"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal color="#6A46EB" size={20} />
        </TouchableOpacity>
      </View>

      <BudgetsList />
    </View>
  );
}
