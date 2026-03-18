import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Button from './Button'

const TaskRow = () => {
  return (
    <View style={styles.row}>
      <View style={styles.textBlock}>
        <Text style={styles.title}>Reading React Native</Text>
        <Text style={styles.meta}>Priority: high</Text>
      </View>
      <Button title="Open" onPress={() => alert("Edit task")} />
    </View>
  )
}
    
const styles = StyleSheet.create({
row: {
flexDirection: "row",
alignItems: "center",
gap: 12,
padding: 12,
borderWidth: 1,
borderColor: "#E5E7EB",
borderRadius: 12,
},
textBlock: {
flex: 1,
},
title: {
fontWeight: "700",
fontSize: 16,
marginBottom: 2,
},
meta: {
color: "#6B7280",
},
});


export default TaskRow


