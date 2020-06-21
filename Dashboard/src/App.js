import "antd/dist/antd.css";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Tabled from "./components/Table";
import React, { Component } from "react";
const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <a href="/">DashBoard</a>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <a href="/visual">visualise</a>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                Team
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <div>
                <Router>
                  <Header />
                  <Switch>
                    <Route exact path="/">
                      <Tabled />
                    </Route>
                  </Switch>
                </Router>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
