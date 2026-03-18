import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export const TitleField = () => {
    const [title, setTitle] = React.useState('');
    
  return (
    <View style = {styles.wrapper}>
      <Text style = {styles.label}>Title:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Enter title"
        style={styles.input}
      />
      <Text style={styles.display}>Preview: {title || '-'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        gap: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
    },
    display: {
        fontSize: 16,
        color: '#555',
    }
});

export default TitleField
