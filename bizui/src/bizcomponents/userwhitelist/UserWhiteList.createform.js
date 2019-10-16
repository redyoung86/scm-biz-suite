import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import SelectObject from '../../components/SelectObject'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './UserWhiteList.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import UserWhiteListBase from './UserWhiteList.base'
<<<<<<< HEAD

=======
import UserWhiteListCreateFormBody from './UserWhiteList.createformbody'
import appLocaleName from '../../common/Locale.tool'
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
  userIdentity: 'clariones',
  userSpecialFunctions: 'tester;ios-spokesperson',
  domainId: 'UD000001',
}
*/

const imageKeys = [
]


class UserWhiteListCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
	
    
    
  }

  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

 



  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }
	
  

  render() {
    const { form, dispatch, submitting, role } = this.props
    const { convertedImagesValues } = this.state
<<<<<<< HEAD

=======
	const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const {fieldLabels} = UserWhiteListBase
    const {UserWhiteListService} = GlobalComponents
    
    const capFirstChar = (value)=>{
    	//const upper = value.replace(/^\w/, c => c.toUpperCase());
  		const upper = value.charAt(0).toUpperCase() + value.substr(1);
  		return upper
  	}
    
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        const cappedRoleName = capFirstChar(role)
        dispatch({
          type: `${owner.type}/add${cappedRoleName}`,
          payload: { id: owner.id, role: role, parameters },
        })
      })
    }
    const submitCreateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }
        
        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        
        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addUserWhiteList`,
          payload: { id: owner.id, type: 'userWhiteList', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
<<<<<<< HEAD
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'userWhiteList',listName:'用户白名单列表' },
=======
     
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'userWhiteList',listName:appLocaleName(userContext,"List") },
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        )
      })
      return (
        <span className={styles.errorIcon}>
          <Popover
<<<<<<< HEAD
            title="表单校验信息"
=======
            title={appLocaleName(userContext,"FieldValidateInfo")}
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      )
    }
    

    
    
    const tryinit  = (fieldName) => {
      const { owner } = this.props
<<<<<<< HEAD
=======
      if(!owner){
      	return null
      }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return null
      }
      return owner.id
    }
    
    const availableForEdit= (fieldName) =>{
      const { owner } = this.props
<<<<<<< HEAD
=======
      if(!owner){
      	return true
      }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return true
      }
      return false
    
    }
    const formItemLayout = {
<<<<<<< HEAD
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }
    return (
      <PageHeaderLayout
        title="新建一个用户白名单"
        content="新建一个用户白名单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.userIdentity} {...formItemLayout}>
                  {getFieldDecorator('userIdentity', {
                    rules: [{ required: true, message: '请输入用户身份' }],
                  })(
                    <Input placeholder="请输入用户身份" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.userSpecialFunctions} {...formItemLayout}>
                  {getFieldDecorator('userSpecialFunctions', {
                    rules: [{ required: true, message: '请输入用户特殊功能' }],
                  })(
                    <Input placeholder="请输入用户特殊功能" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.domain} {...formItemLayout}>
                  {getFieldDecorator('domainId', {
                  	initialValue: tryinit('domain'),
                    rules: [{ required: true, message: '请输入域' }],
                  })(
                  
                  <SelectObject 
                    disabled={!availableForEdit('domain')}
                    targetType={"domain"} 
                    requestFunction={UserWhiteListService.requestCandidateDomain}/>
                  
                 
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>
=======
      labelCol: { span: 3 },
      wrapperCol: { span: 9 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 9 },
    }
    
    const internalRenderTitle = () =>{
      const linkComp=<a onClick={goback}  > <Icon type="double-left" style={{marginRight:"10px"}} /> </a>
      return (<div>{linkComp}{appLocaleName(userContext,"CreateNew")}用户白名单</div>)
    }

	return (
      <PageHeaderLayout
        title={internalRenderTitle()}
        content={`${appLocaleName(userContext,"CreateNew")}用户白名单`}
        wrapperClassName={styles.advancedForm}
      >
   			
   		<UserWhiteListCreateFormBody	 {...this.props} />

>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitCreateForm} loading={submitting} htmlType="submit">
<<<<<<< HEAD
            提交
          </Button>
          <Button type="primary" onClick={submitCreateFormAndContinue} loading={submitting}>
            提交并建下一个
          </Button>
          <Button type="danger" onClick={goback} loading={submitting}>
            放弃
          </Button>
        </FooterToolbar>
=======
            {appLocaleName(userContext,"Submit")}
          </Button>
          <Button type="primary" onClick={submitCreateFormAndContinue} loading={submitting}>
            {appLocaleName(userContext,"SubmitAndContinue")}
          </Button>
          <Button type="danger" onClick={goback} loading={submitting}>
            {appLocaleName(userContext,"Discard")}
          </Button>
        </FooterToolbar>
      
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(UserWhiteListCreateForm))




