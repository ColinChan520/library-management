import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout as AntdLayout, Menu, Dropdown, Space } from 'antd';
import Image from 'next/image';
import style from './index.module.css';
import { useRouter } from 'next/router';
import { DownOutlined } from '@ant-design/icons';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const { Header, Content, Sider } = AntdLayout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);

const items3: MenuProps['items'] = [
  {
    //icon: React.createElement(icon),
    label: `Library`,
    key: `book`,

    children: [
      { label: `Book List`, key: `/book`, },
      { label: `Book Adding`, key: `/book/add`, }]
  },
  {
    //icon: React.createElement(icon),
    label: `Borrowing`,
    key: `borrow`,

    children: [
      { label: `Borrowing List`, key: `/borrow`, },
      { label: `Borrowing Adding`, key: `/borrow/add`, }]
  },
  {
    //icon: React.createElement(icon),
    label: `Category`,
    key: `category`,

    children: [
      { label: `Category List`, key: `/category`, },
      { label: `Category Adding`, key: `/category/add`, }]
  },
  {
    //icon: React.createElement(icon),
    label: `User`,
    key: `user`,

    children: [
      { label: `User List`, key: `/user`, },
      { label: `User Adding`, key: `/user/add`, }]
  },
];

const user_items: MenuProps['items'] = [
  {
    label: "User centre",
    key: '1',
  },
  {
    label: 'Log out',
    key: '2',
  },
];

export function Layout({ children }) {
  const router = useRouter();
  const handleMenuClick = ({ key }) => {
    router.push(key);
  };

  
  return (
    <><Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`flex min-h-screen flex-col justify-between`}>
    <AntdLayout>
      <Header className={style.header}>
        Library Management System
        <span className={style.user}>
        <Dropdown menu={{ items: user_items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              User Name
              <DownOutlined/>
              </Space>
          </a>
        </Dropdown>
        </span>
        
      </Header>
      <AntdLayout>
        <Sider width={200} >
          <Menu
            mode="inline"
            defaultSelectedKeys={['/book']}
            defaultOpenKeys={['book']}
            style={{ height: '100%', borderRight: 0 }}
            items={items3}
            onClick={handleMenuClick}
          />
        </Sider>
        <AntdLayout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            {children};
          </Content>
        </AntdLayout>
      </AntdLayout>
    </AntdLayout></main></>

  );
}