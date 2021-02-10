import React from 'react'
import { OrderList, OrderDetails, OrderPlace } from './pages/order'
import { ProductList, ProductDetails } from './pages/product'
import Invoice from './pages/invoice'
import SignIn from './pages/sign-in'

interface IRoute {
  key: number | string
  name: string
  title: string
  path: string
  component: any
}

export const Routes: IRoute[] = [
  {
    key: 1,
    name: 'order-list',
    title: 'Order list',
    path: '/order/list',
    component: <OrderList />
  },
  {
    key: 2,
    name: 'order-details',
    title: 'Order details',
    path: '/order/details/:id',
    component: <OrderDetails />
  },
  {
    key: 3,
    name: 'order-place',
    title: 'Place order',
    path: '/order/place',
    component: <OrderPlace />
  },
  {
    key: 4,
    name: 'product-list',
    title: 'Product list',
    path: '/product/list',
    component: <ProductList />
  },
  {
    key: 5,
    name: 'product-details',
    title: 'Product details',
    path: '/product/details/:id',
    component: <ProductDetails />
  },
  {
    key: 6,
    name: 'invoice',
    title: 'Invoice',
    path: '/invoice/:id',
    component: <Invoice />
  },
  {
    key: 7,
    name: 'sign-in',
    title: 'Sign in',
    path: '/sign-in',
    component: <SignIn />
  },
]

export const Navigation: IRoute[] = [
  Routes[0],
  Routes[3],
  Routes[2]
]