<<<<<<< HEAD

import ImagePreview from '../../components/ImagePreview'
import { Link } from 'dva/router'
import moment from 'moment'


=======
import React from 'react'
import { Icon,Divider } from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854


const menuData = {menuName:"请假类型", menuFor: "leaveType",
  		subItems: [
<<<<<<< HEAD
  {name: 'employeeLeaveList', displayName:'请假记录', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false},
=======
  {name: 'employeeLeaveList', displayName:'请假记录', icon:'500px',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
  
  		],
}

<<<<<<< HEAD
const renderTextCell=(value, record)=>{

	if(!value){
		return '';
	}
	if(value==null){
		return '';
	}
	if(value.length>15){
		return value.substring(0,15)+"...("+value.length+"字)"
	}
	return value
	
}

const renderIdentifier=(value, record, targtObjectType)=>{

	return (<Link to={`/${targtObjectType}/${value}/dashboard`}>{value}</Link>)
	
}

const renderDateCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD');
}
const renderDateTimeCell=(value, record)=>{
	return moment(value).format('YYYY-MM-DD HH:mm');	
}

const renderImageCell=(value, record, title)=>{
	return (<ImagePreview imageTitle={title} imageLocation={value} />)	
}

const renderMoneyCell=(value, record)=>{
	if(!value){
		return '空'
	}
	if(value == null){
		return '空'
	}
	return (`￥${value.toFixed(2)}`)
}

const renderBooleanCell=(value, record)=>{

	return  (value? '是' : '否')

}

const renderReferenceCell=(value, record)=>{

	return (value ? value.displayName : '暂无') 
=======

const settingMenuData = {menuName:"请假类型", menuFor: "leaveType",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: '序号',
  code: '代码',
  company: '公司',
  description: '描述',
  detailDescription: '详细描述',
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854

}

const displayColumns = [
<<<<<<< HEAD
  { title: '序号', debugtype: 'string', dataIndex: 'id', width: '20', render: (text, record)=>renderTextCell(text,record,'leaveType') },
  { title: '代码', debugtype: 'string', dataIndex: 'code', width: '10',render: (text, record)=>renderTextCell(text,record) },
  { title: '公司', dataIndex: 'company', render: (text, record) => renderReferenceCell(text, record)},
  { title: '描述', debugtype: 'string', dataIndex: 'description', width: '8',render: (text, record)=>renderTextCell(text,record) },
  { title: '详细描述', debugtype: 'string', dataIndex: 'detailDescription', width: '65',render: (text, record)=>renderTextCell(text,record) },

]

const fieldLabels = {
  id: '序号',
  code: '代码',
  company: '公司',
  description: '描述',
  detailDescription: '详细描述',

}


const LeaveTypeBase={menuData,displayColumns,fieldLabels,displayColumns}
=======
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'leaveType') , sorter: true },
  { title: fieldLabels.code, debugtype: 'string', dataIndex: 'code', width: '10',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.company, dataIndex: 'company', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.description, debugtype: 'string', dataIndex: 'description', width: '8',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.detailDescription, debugtype: 'string', dataIndex: 'detailDescription', width: '65',render: (text, record)=>renderTextCell(text,record)},

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(leaveType,targetComponent)=>{

  const userContext = null
  return (
    <div key={leaveType.id}>
	
      <DescriptionList  key={leaveType.id} size="small" col="4">
        <Description term="序号">{leaveType.id}</Description> 
        <Description term="代码">{leaveType.code}</Description> 
        <Description term="描述">{leaveType.description}</Description> 
        <Description term="详细描述">{leaveType.detailDescription}</Description> 
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)

}
	



const LeaveTypeBase={menuData,displayColumns,fieldLabels,renderItemOfList}
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
export default LeaveTypeBase



