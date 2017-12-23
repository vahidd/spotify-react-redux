import React from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const {TextArea} = Input;

import styles from 'Styles/sidebar.scss';

class CreatePlaylistModal extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      isCreating   : false,
      createBtnText: 'Create it!'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    if (e)
      e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          isCreating: true
        });
        this.props.create(
          values.name,
          values.description ? values.description : '',
          values.isPublic ? values.isPublic : true
        );
      }
    });
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.isCreating && !nextProps.isCreating) {
      this.setState({
        isCreating   : false,
        createBtnText: 'Created!'
      });
      setTimeout(() => {
        this.setState({
          createBtnText: 'Create it!'
        });
        this.props.close();
        this.props.form.resetFields();
      }, 500);
    }
  }

  render () {
    const {getFieldDecorator} = this.props.form;
    return <Modal
      closable={false}
      maskClosable={true}
      styleName="create-playlist-modal"
      visible={this.props.isOpen}
      onCancel={this.props.close}
      footer={[
        <Button key="back" onClick={this.props.close}>Cancel</Button>,
        <Button key="submit" type="primary" loading={this.props.isCreating} onClick={this.handleSubmit}>
          {this.state.createBtnText}
        </Button>,
      ]}
    >
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            validateTrigger: 'onBlur',
            rules          : [
              {
                required: true,
                message : 'Please enter a name'
              }
            ]
          })(
            <Input placeholder="Playlist Name"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('description')(
            <TextArea autosize={true} placeholder="Playlist Description"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('isPublic')(
            <Checkbox defaultChecked={true}>This is a public playlist!</Checkbox>
          )}
        </FormItem>
      </Form>
    </Modal>;
  }
}

CreatePlaylistModal.propTypes = {
  isOpen    : PropTypes.bool.isRequired,
  isCreating: PropTypes.bool.isRequired,
  open      : PropTypes.func.isRequired,
  close     : PropTypes.func.isRequired,
  form      : PropTypes.object.isRequired
};

export default Form.create()(CSSModules(CreatePlaylistModal, styles));