import { FlatList, Text, View, StyleSheet } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import ProductListItem from "../../components/product-list-item";
import ListHeader from "../../components/list-header";
import { useAuth } from "../../providers/auth-provider";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
