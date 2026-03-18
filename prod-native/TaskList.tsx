import React from 'react'
import { StyleSheet, Text, FlatList, View } from 'react-native'

type Task = {
    id: string,
    title: string,
    done: boolean
};

const data: Task[] = [
    {id: 't1', title: 'to create navigation', done: false},
    {id: 't2', title: 'styling with stylesheet', done: true},
]

export const TaskList = () => {
  return (
    <FlatList
      contentContainerStyle = {styles.container}
      data = {data}
      keyExtractor = {(itetm) => itetm.id}
      renderItem = {({ item }) => (
        <View style = {styles.item}>
          <Text style = {[styles.text, item.done && styles.done]}>{item.title}</Text>
        </View>
      )}
      ListHeaderComponent={<Text style = {styles.header}>Tasks</Text>}
    />
  );
  }

  const styles = StyleSheet.create({
  container: { padding: 16, gap: 10 },
  header: { fontSize: 22, fontWeight: "700", marginBottom: 6 },
  item: {
  padding: 12,
  borderWidth: 1,
  borderColor: "#E5E7EB",
  borderRadius: 12,
},
text: { fontSize: 16 },
done: { textDecorationLine: "line-through", color: "#6B7280" },
});

