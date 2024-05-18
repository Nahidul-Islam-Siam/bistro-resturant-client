import { useState } from "react";
import Cover from "../Component/Cover";
import coverImg from '../assets/order/order.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../hooks/useMenu";
const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu()
    const desserts = menu.filter(item=> item.category === 'dessert')
    const soup = menu.filter(item=> item.category === 'soup')
    const salad = menu.filter(item=> item.category =='salad')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')
    return (
        <div>
             <Cover img={coverImg} title='order food'></Cover>
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>SALAD</Tab>
        <Tab>PIZZA</Tab>
        <Tab>SOUPS</Tab>
        <Tab>DESSERTS</Tab>
        <Tab>DRINKS</Tab>
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
  
    </Tabs>
        </div>
    );
};

export default OrderFood;