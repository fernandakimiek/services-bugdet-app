import { FilterOrder } from "@/types/FilterOrder";
import { FilterStatus } from "@/types/FilterStatus";
import { Check, X } from "lucide-react-native";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../Button";
import { StatusTag } from "../StatusTag";
import { styles } from "./styles";

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedStatuses: FilterStatus[];
  selectedOrder: FilterOrder | null;
  onStatusToggle: (status: FilterStatus) => void;
  onOrderSelect: (order: FilterOrder) => void;
  onReset: () => void;
  onApply: () => void;
};

export function FilterModal({
  visible,
  onClose,
  selectedStatuses,
  selectedOrder,
  onStatusToggle,
  onOrderSelect,
  onReset,
  onApply,
}: FilterModalProps) {
  const statusOptions = [
    FilterStatus.DRAFT,
    FilterStatus.SENT,
    FilterStatus.APPROVED,
    FilterStatus.DENIED,
  ];

  const orderOptions = [
    FilterOrder.MOST_RECENT,
    FilterOrder.OLDEST,
    FilterOrder.HIGHEST_VALUE,
    FilterOrder.LOWEST_VALUE,
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filtrar e ordenar</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X color="#000000" size={20} />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.modalContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Status</Text>
              {statusOptions.map((status) => {
                const isSelected = selectedStatuses.includes(status);
                return (
                  <TouchableOpacity
                    key={status}
                    style={styles.optionRow}
                    onPress={() => onStatusToggle(status)}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        isSelected && styles.checkboxSelected,
                      ]}
                    >
                      {isSelected && <Check color="#fff" size={14} />}
                    </View>
                    <StatusTag status={status} />
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ordenação</Text>
              {orderOptions.map((order) => {
                const isSelected = selectedOrder === order;
                return (
                  <TouchableOpacity
                    key={order}
                    style={styles.optionRow}
                    onPress={() => onOrderSelect(order)}
                  >
                    <View
                      style={[
                        styles.radioButton,
                        isSelected && styles.radioButtonSelected,
                      ]}
                    >
                      {isSelected && (
                        <View style={styles.radioButtonInner} />
                      )}
                    </View>
                    <Text style={styles.optionText}>{order}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={onReset}
            >
              <Text style={styles.resetButtonText}>Resetar filtros</Text>
            </TouchableOpacity>
            <View style={styles.applyButtonContainer}>
              <Button
                text="Aplicar"
                icon={<Check color="#fff" size={20} />}
                backgroundColor="#6A46EB"
                onPress={onApply}
                style={styles.applyButton}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

