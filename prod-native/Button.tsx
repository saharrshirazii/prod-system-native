import React from 'react'
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native'

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
};

const Button = ({title, onPress, variant = 'primary', style}: ButtonProps) => {
  return (
    <Pressable
        onPress={onPress}
        style = {({pressed}) =>[
            styles.base,
            variant === 'primary' ? styles.primary : styles.ghost,
            pressed && styles.pressed,
            style,]}
            >
      <Text style = {variant === 'primary' ? styles.textPrimary : styles.textGhost}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create ({
    base: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    ghost: {
        borderWidth: 1,
        borderColor: '#007AFF',
        backgroundColor: 'transparent',
    },
    textPrimary: {
        color: 'white',
        fontWeight: '600',
    },
    textGhost: {
        color: '#007AFF',
        fontWeight: '600',
    },
    pressed: {
        opacity: 0.85,
    }
})

export default Button