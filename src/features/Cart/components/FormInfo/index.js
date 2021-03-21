import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Space,
} from "antd";
import "./form-info.scss";

const FormInfo = () => {
  return (
    <div className="form-info">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        size="large"
      >
        <Form.Item label="Họ tên">
          <Input />
        </Form.Item>

        <Form.Item label="Số điện thoại">
          <Input />
        </Form.Item>

        <Form.Item label="Email">
          <Input />
        </Form.Item>

        <Form.Item label="Chọn địa chỉ">
          <Select defaultValue="Tỉnh/Thành phố">
            <Select.Option value="Tỉnh/Thành phố">Tỉnh/Thành phố</Select.Option>
          </Select>
          <Select defaultValue="Quận huyện">
            <Select.Option value="Quận huyện">Quận huyện</Select.Option>
          </Select>
          <Select defaultValue="Phường xã">
            <Select.Option value="Phường xã">Phường xã</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Đường">
          <Input />
        </Form.Item>

        <Form.Item label="Ghi chú">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormInfo;
