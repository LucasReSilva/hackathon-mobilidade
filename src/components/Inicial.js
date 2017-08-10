import React, { Component } from 'react';
import {
	TextInput,
	View,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { modificaEmailCadastro } from '../actions/CadastroActions';

class Inicial extends Component {
  render() {
	return (
		<View style={styles.cadastro}>
			<TextInput
				style={styles.emailCadastro}
				value={this.props.email_novo_usuario}
				onChangeText={texto => this.props.modificaEmailCadastro(texto)}
			/>
		</View>
	);
  }
}

const styles = StyleSheet.create({
	cadastro: {
		flex: 1,
		backgroundColor: '#71b4e8',
		alignItems: 'center',
		justifyContent: 'center'
	},
	emailCadastro: {
		width: 200
	}
});

const mapStateToProps = state => (
	{
		email_novo_usuario: state.CadastroReducer.email_novo_usuario
	}
);

export default connect(mapStateToProps, { modificaEmailCadastro })(Inicial);
