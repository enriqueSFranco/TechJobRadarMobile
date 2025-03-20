import { Text, View } from "react-native";

interface Author {
  id: string;
  name: string;
}
interface Publisher {
  id: string;
  name: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  body: string;
  image: string;
  create_at: string;
  author: Author;
  publisher: Publisher;
}

export interface MappedNews {
  id: string;
  title: string;
  body: string;
  image: string;
  createAt: string;
  author: Author;
  publisher: Publisher;
}

interface NewArticleProps {
  newArticle: MappedNews;
}

export function NewArticle({ newArticle }: NewArticleProps) {
  return (
    <View>
      <Text>{newArticle.title}</Text>
      <Text>By {newArticle.author.name}</Text>
    </View>
  );
}
