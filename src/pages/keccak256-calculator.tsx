import { Button, Form, FormProps, Input, Typography } from "antd";
import { ethers } from "ethers";
import { useState } from "react";

type FieldType = {
  input: string;
};

const erc1967Slot = (label: string) =>
  ethers.toBeHex(ethers.toBigInt(ethers.id(label)) - 1n);
const erc7201Slot = (label: string) =>
  ethers.toBeHex(
    ethers.toBigInt(ethers.keccak256(erc1967Slot(label))) & ~0xffn
  );

const Keccak256Calculator = () => {
  const [output, setOutput] = useState("");
  const [storageLocation, setStorageLocation] = useState("");

  const [form] = Form.useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const input = values.input;
    setOutput(ethers.keccak256(ethers.toUtf8Bytes(input)));
    setStorageLocation(erc7201Slot(input));
  };

  const input = Form.useWatch("input", form);

  return (
    <div>
      <Typography.Title>Keccak256 Calculator</Typography.Title>
      <Form
        onFinish={onFinish}
        autoComplete="off"
        style={{ maxWidth: 700 }}
        layout="vertical"
        form={form}
      >
        <Form.Item<FieldType>
          label="Input"
          name="input"
          rules={[{ required: true, message: "Please input your input!" }]}
        >
          <Input.TextArea rows={10} />
        </Form.Item>

        <Form.Item<FieldType> label="Output" style={{ width: 700 }}>
          <Input disabled value={output} />
        </Form.Item>

        <Form.Item<FieldType>
          label={`ERC-7201 Storage Location`}
          style={{ width: 700 }}
        >
          <Typography.Text style={{ fontSize: 12, fontStyle: "italic" }}>
            {`keccak256(abi.encode(uint256(keccak256("${
              input || "example.com"
            }")) - 1)) &
            ~bytes32(uint256(0xff))`}
          </Typography.Text>
          <Input disabled value={storageLocation} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Hash
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Keccak256Calculator;
