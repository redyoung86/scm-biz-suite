
<<<<<<< HEAD

=======
import React from 'react'
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
import GlobalComponents from '../../custcomponents';
<<<<<<< HEAD

import modeltool from '../../utils/modeltool'
const {setupModel,hasError,handleClientError,handleServerError,keepValueWithKeySuffix}=modeltool

=======
import appLocaleName from '../../common/Locale.tool'
import modeltool from '../../utils/modeltool'
const {setupModel,hasError,handleClientError,handleServerError,keepValueWithKeySuffix}=modeltool

const notifySuccess=(userContext)=>{

	notification.success({
        message: appLocaleName(userContext,'Success'),
        description: appLocaleName(userContext,'Success'),
      })

}

>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854

export default {

  namespace: '_consumerOrder',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
      	const modelName = 'consumerOrder'
      	const parameter = {dispatch,history,location,modelName}
        //console.log("setupModel",setupModel,typeof(setupModel))
      	setupModel(parameter)

      })
    },
  },
  effects: {
    *view({ payload }, { call, put, select }) { 
    
      const cachedData = yield select(state => state._consumerOrder)
      //if the data in the cache, just show it, there is no delay
      const link = payload.pathname
      //if the data in the cache, just show it, there is no delay
      if(cachedData.class){
        //yield put({ type: 'breadcrumb/gotoLink', payload: { displayName:cachedData.displayName,link }} )
        yield put({ type: 'updateState', payload: cachedData })
        
        if(payload.useCache){
        	return //use cache for returning page
        }
        
      }else{
        yield put({ type: 'showLoading', payload })
      }
      
      const {ConsumerOrderService} = GlobalComponents;
      const data = yield call(ConsumerOrderService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      
      
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      

      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {ConsumerOrderService} = GlobalComponents;
      //yield put({ type: 'showLoading', payload })
      const data = yield call(ConsumerOrderService.load, payload.id, payload.parameters)
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
    
    *doJob({ payload }, { call, put }) { 
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {TaskService} = GlobalComponents;
      //yield put({ type: 'showLoading', payload })      
      const {serviceNameToCall, id, parameters} = payload;
      if(!serviceNameToCall){
<<<<<<< HEAD
      	handleClientError("没有提供后台服务的名字, 该服务没有注册")
      	return;
      }
      
=======
      	handleClientError(appLocaleName(userContext,'ServiceNotRegistered'))
      	return;
      }
      "react/dva_object_model.jsp"
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      const data = yield call(serviceNameToCall, id, parameters)
      if(handleServerError(data)){
      	return
      }
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, role } = payload
      yield put(routerRedux.push(`/consumerOrder/${id}/list/${role}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, role, selectedRows, currentUpdateIndex } = payload
      const state = { id, role, selectedRows, currentUpdateIndex }
      const location = { pathname: `/consumerOrder/${id}/list/${role}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/consumerOrder/${id}/list/${type}List/${listName}`))
    },




    *addConsumerOrderLineItem({ payload }, { call, put }) {
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;

      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.addConsumerOrderLineItem, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/consumerOrder/${id}/list/${role}CreateForm'))
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\ConsumerOrderLineItemList/消费者订单行项目列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateConsumerOrderLineItem({ payload }, { call, put }) {
=======
      const location = { pathname: `/consumerOrder/${id}/list/ConsumerOrderLineItemList/消费者订单行项目+${appLocaleName(userContext,'List')}`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateConsumerOrderLineItem({ payload }, { call, put }) {
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.updateConsumerOrderLineItem, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      if (continueNext) {
        return
      }
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\ConsumerOrderLineItemList/消费者订单行项目列表`, state: newPlayload }
=======
      const location = { pathname: `/consumerOrder/${id}/list/ConsumerOrderLineItemList/消费者订单行项目列表`, state: newPlayload }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      yield put(routerRedux.push(location))
    },
    *gotoNextConsumerOrderLineItemUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeConsumerOrderLineItemList({ payload }, { call, put }) {
<<<<<<< HEAD
=======
     const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents; 
      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.removeConsumerOrderLineItemList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
        
     
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    },




    *addConsumerOrderShippingGroup({ payload }, { call, put }) {
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;

      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.addConsumerOrderShippingGroup, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/consumerOrder/${id}/list/${role}CreateForm'))
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\ConsumerOrderShippingGroupList/消费订单送货分组列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateConsumerOrderShippingGroup({ payload }, { call, put }) {
=======
      const location = { pathname: `/consumerOrder/${id}/list/ConsumerOrderShippingGroupList/消费订单送货分组+${appLocaleName(userContext,'List')}`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateConsumerOrderShippingGroup({ payload }, { call, put }) {
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.updateConsumerOrderShippingGroup, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      if (continueNext) {
        return
      }
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\ConsumerOrderShippingGroupList/消费订单送货分组列表`, state: newPlayload }
=======
      const location = { pathname: `/consumerOrder/${id}/list/ConsumerOrderShippingGroupList/消费订单送货分组列表`, state: newPlayload }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      yield put(routerRedux.push(location))
    },
    *gotoNextConsumerOrderShippingGroupUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeConsumerOrderShippingGroupList({ payload }, { call, put }) {
<<<<<<< HEAD
=======
     const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents; 
      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.removeConsumerOrderShippingGroupList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
        
     
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    },




    *addConsumerOrderPaymentGroup({ payload }, { call, put }) {
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;

      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.addConsumerOrderPaymentGroup, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/consumerOrder/${id}/list/${role}CreateForm'))
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\ConsumerOrderPaymentGroupList/消费者订单付款组列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateConsumerOrderPaymentGroup({ payload }, { call, put }) {
=======
      const location = { pathname: `/consumerOrder/${id}/list/ConsumerOrderPaymentGroupList/消费者订单付款组+${appLocaleName(userContext,'List')}`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateConsumerOrderPaymentGroup({ payload }, { call, put }) {
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.updateConsumerOrderPaymentGroup, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      if (continueNext) {
        return
      }
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\ConsumerOrderPaymentGroupList/消费者订单付款组列表`, state: newPlayload }
=======
      const location = { pathname: `/consumerOrder/${id}/list/ConsumerOrderPaymentGroupList/消费者订单付款组列表`, state: newPlayload }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      yield put(routerRedux.push(location))
    },
    *gotoNextConsumerOrderPaymentGroupUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeConsumerOrderPaymentGroupList({ payload }, { call, put }) {
<<<<<<< HEAD
=======
     const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents; 
      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.removeConsumerOrderPaymentGroupList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
        
     
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    },




    *addConsumerOrderPriceAdjustment({ payload }, { call, put }) {
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;

      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.addConsumerOrderPriceAdjustment, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/consumerOrder/${id}/list/${role}CreateForm'))
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\ConsumerOrderPriceAdjustmentList/消费品价格调整列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateConsumerOrderPriceAdjustment({ payload }, { call, put }) {
=======
      const location = { pathname: `/consumerOrder/${id}/list/ConsumerOrderPriceAdjustmentList/消费品价格调整+${appLocaleName(userContext,'List')}`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateConsumerOrderPriceAdjustment({ payload }, { call, put }) {
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.updateConsumerOrderPriceAdjustment, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      if (continueNext) {
        return
      }
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\ConsumerOrderPriceAdjustmentList/消费品价格调整列表`, state: newPlayload }
=======
      const location = { pathname: `/consumerOrder/${id}/list/ConsumerOrderPriceAdjustmentList/消费品价格调整列表`, state: newPlayload }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      yield put(routerRedux.push(location))
    },
    *gotoNextConsumerOrderPriceAdjustmentUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeConsumerOrderPriceAdjustmentList({ payload }, { call, put }) {
<<<<<<< HEAD
=======
     const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents; 
      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.removeConsumerOrderPriceAdjustmentList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
        
     
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    },




    *addRetailStoreMemberGiftCardConsumeRecord({ payload }, { call, put }) {
<<<<<<< HEAD
=======
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;

      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.addRetailStoreMemberGiftCardConsumeRecord, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/consumerOrder/${id}/list/${role}CreateForm'))
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\RetailStoreMemberGiftCardConsumeRecordList/零售商店会员卡消费记录列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateRetailStoreMemberGiftCardConsumeRecord({ payload }, { call, put }) {
=======
      const location = { pathname: `/consumerOrder/${id}/list/RetailStoreMemberGiftCardConsumeRecordList/零售商店会员卡消费记录+${appLocaleName(userContext,'List')}`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateRetailStoreMemberGiftCardConsumeRecord({ payload }, { call, put }) {
      const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.updateRetailStoreMemberGiftCardConsumeRecord, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      
      if (continueNext) {
        return
      }
<<<<<<< HEAD
      const location = { pathname: `/consumerOrder/${id}/list/\RetailStoreMemberGiftCardConsumeRecordList/零售商店会员卡消费记录列表`, state: newPlayload }
=======
      const location = { pathname: `/consumerOrder/${id}/list/RetailStoreMemberGiftCardConsumeRecordList/零售商店会员卡消费记录列表`, state: newPlayload }
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      yield put(routerRedux.push(location))
    },
    *gotoNextRetailStoreMemberGiftCardConsumeRecordUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeRetailStoreMemberGiftCardConsumeRecordList({ payload }, { call, put }) {
<<<<<<< HEAD
=======
     const userContext = null
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
      const {ConsumerOrderService} = GlobalComponents; 
      const { id, role, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(ConsumerOrderService.removeRetailStoreMemberGiftCardConsumeRecordList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
<<<<<<< HEAD
        
     
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

=======
      notifySuccess(userContext)
>>>>>>> 502e8b8dfc403300a992b5083e79c722e85d1854
    },

  },
  
  reducers: {
    updateState(state, action) {
      const payload = { ...action.payload, loading: true }
      const valueToKeep = keepValueWithKeySuffix(state,"Parameters") 
      return { ...valueToKeep, ...payload}
    },
    showLoading(state, action) {
      // const loading=true
      const payload = { ...action.payload, loading: true }
      const valueToKeep = keepValueWithKeySuffix(state,"Parameters") 
      return { ...valueToKeep, ...payload}
    },
  },
}

