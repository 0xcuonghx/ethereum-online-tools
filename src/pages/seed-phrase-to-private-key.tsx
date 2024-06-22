import { Button, Col, Form, FormProps, Input, Row, Typography } from "antd";
import { ethers } from "ethers";
import React, { useState } from "react";

type FieldType = {
  seedPhrase: string;
  index: number;
};

const SeedPhraseToPrivateKey = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const seedPhrase = values.seedPhrase;
    const hdWallet = ethers.HDNodeWallet.fromPhrase(
      seedPhrase,
      "",
      `m/44'/60'/0'/0/${values.index}`
    );

    setPrivateKey(hdWallet.privateKey);
    setPublicKey(hdWallet.address);
  };

  const index = Form.useWatch("index", form);

  const onGenerateSeedPhase = () => {
    const mnemonic = ethers.Mnemonic.fromEntropy(ethers.randomBytes(16));
    form.setFieldValue("seedPhrase", mnemonic.phrase);
    form.setFieldValue("index", 0);
    setPrivateKey("");
    setPublicKey("");
  };

  return (
    <div>
      <Typography.Title>Seed Phrase to Private Key</Typography.Title>
      <Form
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        style={{ maxWidth: 700 }}
        layout="vertical"
        initialValues={{ index: 0 }}
      >
        <Row gutter={16}>
          <Col span={20}>
            <Form.Item<FieldType>
              label="Seed Phrase"
              name="seedPhrase"
              rules={[
                {
                  required: true,
                  message: "Please input your seed phrase!",
                },
                () => ({
                  validator(_, value) {
                    try {
                      ethers.Wallet.fromPhrase(value);
                      return Promise.resolve();
                    } catch (error) {
                      return Promise.reject(
                        new Error("The seed phrase invalid")
                      );
                    }
                  },
                }),
              ]}
            >
              <Input placeholder="Please input your seed phrase!" />
            </Form.Item>
          </Col>
          <Col>
            <Button
              style={{ marginTop: 30 }}
              type="primary"
              onClick={onGenerateSeedPhase}
            >
              Generate
            </Button>
          </Col>
        </Row>
        <Form.Item<FieldType>
          label={`Index (derivation path: m/44'/60'/0'/0/${Number(index)})`}
          name="index"
          rules={[
            {
              required: true,
              message: "Please input your derivation path index!",
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item<FieldType> label="Private Key" style={{ width: 700 }}>
          <Input.TextArea disabled value={privateKey} placeholder="0x" />
        </Form.Item>
        <Form.Item<FieldType> label="Public Key" style={{ width: 700 }}>
          <Input.TextArea disabled value={publicKey} placeholder="0x" />
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

export default SeedPhraseToPrivateKey;
