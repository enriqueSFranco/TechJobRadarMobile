import { View, StyleSheet } from "react-native";
import allNews from "@assets/data/allNews.json";
import { NewArticle, NewsArticle } from "@/components/organisms/NewArticle";
import { TransformKeys, transformObject } from "@/utils/transformObject";

const { all_news } = allNews;

// Mapeo de transformación
type MappedNewsArticle = TransformKeys<NewsArticle, { create_at: "createAt" }>;

const transformationMap = {
  create_at: "createAt",
  // Agrega aquí otras claves a transformar
};

const mappedNews: MappedNewsArticle[] = all_news.map((article) =>
  transformObject(article, transformationMap),
);

// pestaña predeterminada cuando se va a cargar la aplicación
export default function Tab() {
  return (
    <View style={styles.container}>
      <NewArticle newArticle={mappedNews[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
