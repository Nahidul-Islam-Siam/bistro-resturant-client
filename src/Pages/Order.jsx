import { useState } from "react";
import Cover from "../Component/Cover";
import coverImg from '../assets/order/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/useMenu";

import OrderTabs from "../Component/OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ['salad','pizza','soup','dessert','drinks']
 
  const {category} = useParams()
  const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
 console.log(category);
    const desserts = menu.filter(item=> item.category === 'dessert')
    const soups = menu.filter(item=> item.category === 'soup')
    const salads = menu.filter(item=> item.category =='salad')
    const pizzas = menu.filter(item=> item.category === 'pizza')
    const drinks = menu.filter(item=> item.category === 'drinks')
    return (
        <div>
          <Helmet>
            <title>Bistro Boss | Order Food</title>
          </Helmet>
             <Cover img={coverImg} title='order food'></Cover>
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUP</Tab>
        <Tab>DESSERT</Tab>
        <Tab>DRINK</Tab>
      </TabList>
     
      <TabPanel> <OrderTabs items={salads}/></TabPanel>
      <TabPanel> <OrderTabs items={pizzas}/></TabPanel>
      <TabPanel> <OrderTabs items={soups}/></TabPanel>
      <TabPanel> <OrderTabs items={desserts}/></TabPanel>
      <TabPanel> <OrderTabs items={drinks}/></TabPanel>
    </Tabs>
        </div>
    );
};

export default Order;