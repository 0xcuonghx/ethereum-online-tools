import { Button, Form, FormProps, Input, Typography } from "antd";
import { ethers } from "ethers";
import React, { useState } from "react";

type FieldType = {
  string: string;
};

const StringToBytes32 = () => {
  const [bytes32, setBytes32] = useState("");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const bytes32 = ethers.encodeBytes32String(values.string);
    setBytes32(bytes32);
  };

  return (
    <div>
      <Typography.Title>String To Bytes32</Typography.Title>
      <Form
        onFinish={onFinish}
        autoComplete="off"
        style={{ maxWidth: 700 }}
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="String"
          name="string"
          rules={[
            { required: true, message: "Please input your string value!" },
            () => ({
              validator(_, value) {
                try {
                  if (value.length > 32) {
                    return Promise.reject(
                      new Error(
                        "String value too long. Exceed maximum 32 bytes length"
                      )
                    );
                  }
                  return Promise.resolve();
                } catch (error) {
                  return Promise.reject(new Error("The string value invalid"));
                }
              },
            }),
          ]}
        >
          <Input placeholder="Please input your string value!" />
        </Form.Item>

        <Form.Item<FieldType> label="Bytes32" style={{ width: 700 }}>
          <Input.TextArea disabled value={bytes32} rows={3} placeholder="0x" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Convert
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default StringToBytes32;
