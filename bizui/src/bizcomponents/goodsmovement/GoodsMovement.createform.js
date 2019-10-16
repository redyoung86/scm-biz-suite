import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import SelectObject from '../../components/SelectObject'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
import styles from './GoodsMovement.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
import GoodsMovementBase from './GoodsMovement.base'
<<<<<<< HEAD

=======
import GoodsMovementCreateFormBody from './GoodsMovement.createformbody'
import appLocaleName from '../../common/Locale.tool'
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input

const testValues = {};
/*
const testValues = {
<<<<<<< HEAD
  moveTime: '2019-01-08 18:43:51',
=======
  moveTime: '2019-09-18 20:42:20',
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
  facility: '仓库货位',
  facilityId: '仓库货位',
  fromIp: '192.168.20.1',
  sessionId: 'FTYUIOLJYT^*(PLKJYT)',
<<<<<<< HEAD
  latitude: '40.94712686832807',
  longitude: '130.98037748268558',
=======
  latitude: '40.28242955974914',
  longitude: '132.23784011280435',
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
  goodsId: 'G000001',
  userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405',
}
*/

const imageKeys = [
]


class GoodsMovementCreateForm extends Component {
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
    const {fieldLabels} = GoodsMovementBase
    const {GoodsMovementService} = GlobalComponents
    
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
          type: `${owner.type}/addGoodsMovement`,
          payload: { id: owner.id, type: 'goodsMovement', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
<<<<<<< HEAD
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'goodsMovement',listName:'货物移动列表' },
=======
     
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'goodsMovement',listName:appLocaleName(userContext,"List") },
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
        title="新建一个货物移动"
        content="新建一个货物移动"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.moveTime} {...formItemLayout}>
                  {getFieldDecorator('moveTime', {
                    rules: [{ required: true, message: '请输入移动时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入移动时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.facility} {...formItemLayout}>
                  {getFieldDecorator('facility', {
                    rules: [{ required: true, message: '请输入设施' }],
                  })(
                    <Input placeholder="请输入设施" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.facilityId} {...formItemLayout}>
                  {getFieldDecorator('facilityId', {
                    rules: [{ required: true, message: '请输入设备ID' }],
                  })(
                    <Input placeholder="请输入设备ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.fromIp} {...formItemLayout}>
                  {getFieldDecorator('fromIp', {
                    rules: [{ required: true, message: '请输入从IP' }],
                  })(
                    <Input placeholder="请输入从IP" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.sessionId} {...formItemLayout}>
                  {getFieldDecorator('sessionId', {
                    rules: [{ required: true, message: '请输入会话ID' }],
                  })(
                    <Input placeholder="请输入会话ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude} {...formItemLayout}>
                  {getFieldDecorator('latitude', {
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(
                    <Input placeholder="请输入纬度" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude} {...formItemLayout}>
                  {getFieldDecorator('longitude', {
                    rules: [{ required: true, message: '请输入经度' }],
                  })(
                    <Input placeholder="请输入经度" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        





        <Card title="用户代理" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('userAgent', {
                    rules: [{ required: true, message: '请输入用户代理' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入用户代理" />
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
                <Form.Item label={fieldLabels.goods} {...formItemLayout}>
                  {getFieldDecorator('goodsId', {
                  	initialValue: tryinit('goods'),
                    rules: [{ required: true, message: '请输入货物' }],
                  })(
                  
                  <SelectObject 
                    disabled={!availableForEdit('goods')}
                    targetType={"goods"} 
                    requestFunction={GoodsMovementService.requestCandidateGoods}/>
                  
                 
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
      return (<div>{linkComp}{appLocaleName(userContext,"CreateNew")}货物移动</div>)
    }

	return (
      <PageHeaderLayout
        title={internalRenderTitle()}
        content={`${appLocaleName(userContext,"CreateNew")}货物移动`}
        wrapperClassName={styles.advancedForm}
      >
   			
   		<GoodsMovementCreateFormBody	 {...this.props} />

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
}))(Form.create()(GoodsMovementCreateForm))




