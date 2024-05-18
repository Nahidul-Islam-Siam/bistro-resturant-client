import { useState } from "react";
import Cover from "../Component/Cover";
import coverImg from '../assets/order/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/useMenu";

import OrderTabs from "../Component/OrderTabs";
import { useParams } from "react-router-dom";
const OrderFood = () => {
  const categories = ['salad','pizza','soup','dessert','drinks']
 
  const category = useParams()
  const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
 
    const desserts = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category =='salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const drinks = menu.filter(item=> item.category === 'drinks')
    return (
        <div>
             <Cover img={coverImg} title='order food'></Cover>
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUP</Tab>
        <Tab>DESSERT</Tab>
        <Tab>DRINK</Tab>
      </TabList>
      <TabPanel>
     <OrderTabs items={salad}/>
      </TabPanel>
      <TabPanel> <OrderTabs items={pizza}/></TabPanel>
      <TabPanel> <OrderTabs items={soup}/></TabPanel>
      <TabPanel> <OrderTabs items={desserts}/></TabPanel>
      <TabPanel> <OrderTabs items={drinks}/></TabPanel>
  
    </Tabs>
        </div>
    );
};

export default OrderFood;