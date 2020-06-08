import React, { Component } from 'react';
import {
  Alert,
  Button,
  Text,
  Switch,
  Picker,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Constants } from 'expo';

export default class NewAppointment extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
      mode: false,
      date: '',
      time: '',
      location: '',
      habit: '',
      description: '',
      repetiion: '',
      reminder: '',
      isHabit: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  _handleToggleSwitch = () =>
    this.setState((state) => ({
      mode: !state.mode,
    }));

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          style={styles.input}
          placeholder="Titel"
        />
        <Picker
          value={this.state.category}
          style={styles.inputDropdown}
          name="category"
          mode="dropdown"
          onChange={this.handleChange}>
          <Picker.Item value="" label="Kategorie" />
          <Picker.Item value="fitti" label="Fitnessstudio" />
          <Picker.Item value="market" label="Supermarkt" />
          <Picker.Item value="museum" label="Museum" />
          <Picker.Item value="bar" label="Bar" />
        </Picker>

        <View style={styles.inputSwitch}>
          <Text style={{ flex: 1, justifyContent: 'center' }}> Introvert </Text>
          <Switch
            style={{ flex: 0.5 }}
            onValueChange={this._handleToggleSwitch}
            value={this.state.mode}
            onTintColor={'orange'}
            tintColor={'grey'}
          />
          <Text style={{ flex: 1, marginLeft: 10, justifyContent: 'center' }}>
            Extrovert
          </Text>
        </View>

        <View style={styles.inputSwitch}>
          <Text style={{ flex: 1, justifyContent: 'center' }}> Datum </Text>
          <Text style={{ flex: 1, justifyContent: 'center' }}>Uhrzeit</Text>
        </View>
        <View style={styles.inputSwitch}>
          <Text style={{ flex: 1, justifyContent: 'center' }}> Beschreibung </Text>
        </View>
        <Picker
          value={this.state.repetition}
          style={styles.inputDropdown}
          name="repetition"
          mode="dropdown"
          onChange={this.handleChange}>
          <Picker.Item value="" label="Wiederholen" />
          <Picker.Item value="never" label="Nie" />
          <Picker.Item value="daily" label="Täglich" />
          <Picker.Item value="weekly" label="Wöchentlich" />
          <Picker.Item value="monthly" label="Monatlich" />
          <Picker.Item value="yearly" label="Jährlich" />
        </Picker>
                <Picker
          value={this.state.reminder}
          style={styles.inputDropdown}
          name="reminder"
          mode="dropdown"
          onChange={this.handleChange}>
          <Picker.Item value="" label="Erinnerung" />
          <Picker.Item value="no" label="Keine" />
          <Picker.Item value="15" label="15 Minuten vorher" />
          <Picker.Item value="30" label="30 Minuten vorher" />
          <Picker.Item value="45" label="45 Minuten vorher" />
          <Picker.Item value="60" label="60 Minuten vorher" />
        </Picker>
      <TouchableOpacity>
         <Button title='Termin erstellen' onPress={() => Alert.alert('Nice')} />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  inputDropdown: {
    width: 200,
    height: 44,
    padding: 8,
    marginBottom: 4,
    borderBottomWidth: 1,
  },
  inputSwitch: {
    flexDirection: 'row',
    width: 200,
    height: 44,
    padding: 8,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
