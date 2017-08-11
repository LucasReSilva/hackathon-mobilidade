import React, { Component } from 'react';
import {
	TextInput,
	View,
	StyleSheet,
	Button
} from 'react-native';
import { connect } from 'react-redux';
import { modificaEmailCadastro, modificaSenhaCadastro } from '../actions/CadastroActions';

class Inicial extends Component {
  render() {
	return (
		<View style={styles.cadastro}>
			<TextInput
				style={styles.entradas}
				value={this.props.email_novo_usuario}
				onChangeText={texto => this.props.modificaEmailCadastro(texto)}
				placeholder='Email'
			/>
			<TextInput
				style={styles.entradas}
				value={this.props.senha_novo_usuario}
				onChangeText={texto => this.props.modificaSenhaCadastro(texto)}
				placeholder='Senha'
			/>
			<View style={styles.botaoCadastro}>
				<Button
					title='Cadastrar'
					onPress={() => alert('Hi')}
				/>
			</View>
		</View>
	);
  }
}

const styles = StyleSheet.create({
	cadastro: {
		justifyContent: 'center',
		flex: 1
	},
	entradas: {
		marginLeft: 50,
		marginRight: 50,
		fontSize: 20
	},
	botaoCadastro: {
		marginTop: 30,
		marginLeft: 70,
		marginRight: 70
	}
});

const mapStateToProps = state => (
	{
		email_novo_usuario: state.CadastroReducer.email_novo_usuario
	}
);

export default connect(mapStateToProps, { modificaEmailCadastro, modificaSenhaCadastro })(Inicial);
