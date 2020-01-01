import Mock from 'mockjs'
import data from './data'

// discover 页面的虚拟数据接口
Mock.mock('/class00', { status: 200, data: data.goodsClass00 })
Mock.mock('/class01', { status: 200, data: data.goodsClass01 })
Mock.mock('/recommends', { status: 200, data: data.recommendGoods })
