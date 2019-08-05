import React, {Component} from 'react';
import { Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { employeeChanged } from '../actions';

class EmployeeCreate extends Component {

    onNameChange(value){
        this.props.employeeChanged({prop: 'name', value});
    }

    onPhoneChange(value){
        this.props.employeeChanged({prop: 'phone', value});
    }

    render() {
        let { name, phone, shift } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={name}
                        onChangeText={this.onNameChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="713 52 48"
                        value={phone}
                        onChangeText={this.onPhoneChange.bind(this)}
                        keyboardType="phone-pad"
                    />
                </CardSection>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeChanged({prop: 'shift', value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeChanged })(EmployeeCreate);
    