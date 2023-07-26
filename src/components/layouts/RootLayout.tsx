import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Button } from 'antd';
import { AppProps } from 'next/app';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

const RootLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='layout'>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className='demo-logo' />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Button type='primary'>
            <Link href='/news'>News</Link>
          </Button>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className='site-layout-content'
          style={{ background: colorBgContainer, minHeight: '80dvh' }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default RootLayout;
