import {StyleSheet} from 'react-native';

export const padding = StyleSheet.create({
  larger: {
    padding: 32,
  },
  large: {
    padding: 24,
  },
  medium: {
    padding: 16,
  },
  low: {
    padding: 8,
  },
});

export const margin = StyleSheet.create({
  larger: {
    margin: 32,
  },
  large: {
    margin: 24,
  },
  medium: {
    margin: 16,
  },
  low: {
    margin: 8,
  },
});

export const fontSize = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  subTitle: {
    fontSize: 28,
  },
  larger: {
    fontSize: 20,
  },
  large: {
    fontSize: 16,
  },
  medium: {
    fontSize: 14,
  },
  low: {
    fontSize: 12,
  },
});

export const borderWidth = StyleSheet.create({
  larger: {
    borderWidth: 4,
  },
  large: {
    borderWidth: 3,
  },
  medium: {
    borderWidth: 2,
  },
  low: {
    borderWidth: 1,
  },
});

export const borderRadius = StyleSheet.create({
  larger: {
    borderRadius: 25,
  },
  large: {
    borderRadius: 20,
  },
  medium: {
    borderRadius: 15,
  },
  low: {
    borderRadius: 10,
  },
});

export const fontWeight = StyleSheet.create({
  larger: {
    fontWeight: '800',
  },
  large: {
    fontWeight: '600',
  },
  medium: {
    fontWeight: '400',
  },
  low: {
    fontWeight: '200',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export const textAlign = StyleSheet.create({
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  justify: {
    textAlign: 'justify',
  },
});

export const color = StyleSheet.create({
  primary: {
    backgroundColor: '#555',
  },
  secondary: {
    backgroundColor: '#777',
  },
  tertiary: {
    backgroundColor: '#999',
  },
  onPrimary: {
    color: '#ddd',
  },
  onSecondary: {
    color: '#ccc',
  },
  onTertiary: {
    color: '#fff',
  },
});

export const height = StyleSheet.create({
  auto: {
    height: 'auto',
  },
  full: {
    height: 100,
  },
  large: {
    height: 75,
  },
  medium: {
    height: 50,
  },
  low: {
    height: 25,
  },
  little: {
    height: 15,
  },
});

export const width = StyleSheet.create({
  auto: {
    width: 'auto',
  },
  full: {
    width: 100,
  },
  large: {
    width: 75,
  },
  medium: {
    width: 50,
  },
  low: {
    width: 25,
  },
  little: {
    width: 15,
  },
});

export const justifyContent = StyleSheet.create({
  flexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
});

export const flexDirection = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
});

export const styles = StyleSheet.create({
  backgroundMainColor: {
    backgroundColor: '#aaa',
  },

  boldFontWeight: {
    fontWeight: 'bold',
  },
  mediumFontWeight: {
    fontWeight: '500',
  },
});
