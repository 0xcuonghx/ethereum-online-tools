import { Button, Form, FormProps, Input, Typography } from "antd";
import { ethers } from "ethers";
import React, { useState } from "react";

type FieldType = {
  privateKey: string;
};

const PrivateKeyToPublicKey = () => {
  const [publicKey, setPublicKey] = useState("");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const privateKey = values.privateKey;
    const wallet = new ethers.Wallet(privateKey);
    setPublicKey(wallet.address);
  };

  return (
    <div>
      <Typography.Title>Private Key to Public Key</Typography.Title>
      <Form
        onFinish={onFinish}
        autoComplete="off"
        style={{ maxWidth: 700 }}
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Private Key"
          name="privateKey"
          rules={[
            { required: true, message: "Please input your private key!" },
            () => ({
              validator(_, value) {
                try {
                  new ethers.Wallet(value);
                  return Promise.resolve();
                } catch (error) {
                  return Promise.reject(new Error("The private key invalid"));
                }
              },
            }),
          ]}
        >
          <Input placeholder="Please input your private key!" />
        </Form.Item>

        <Form.Item<FieldType> label="Public Key" style={{ width: 700 }}>
          <Input.TextArea
            rows={3}
            disabled
            value={publicKey}
            placeholder="0x"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Calculator
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PrivateKeyToPublicKey;
