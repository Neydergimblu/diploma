import React from "react";
import "./header.css";

import { Menu } from 'antd';

export const HeaderContent = ({ className }) => {

	return (
		<>
			<div className="container">
				<div className="menu-wrapper">
					<div className="logo" />
					<Menu mode="horizontal" className={className} >
						<Menu.Item key="mail">
							Home
						</Menu.Item>
						<Menu.Item key="app">
							Documents
						</Menu.Item>
						<Menu.Item key="alipay">
							GetHub
						</Menu.Item>
					</Menu>
				</div>
			</div>
		</>
	)
}