import { Form, FormProps, Input, Typography } from "antd";
import { ethers } from "ethers";

type FieldType = {
  wei: string;
  gwei: string;
  ether: string;
};

const GweiCalculator = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {};
  const onChange: FormProps<FieldType>["onChange"] = (e) => {
    const fieldChanged = (e.target as any).id as string;
    const fieldValue = (e.target as any).value;
    try {
      if (fieldChanged === "ether") {
        form.setFieldValue("wei", ethers.parseUnits(fieldValue, 18));
        form.setFieldValue("gwei", ethers.parseUnits(fieldValue, 9));
      } else if (fieldChanged === "gwei") {
        form.setFieldValue("wei", ethers.parseUnits(fieldValue, 9));
        form.setFieldValue("ether", ethers.formatUnits(fieldValue, 9));
      } else if (fieldChanged === "wei") {
        form.setFieldValue("gwei", ethers.formatUnits(fieldValue, 9));
        form.setFieldValue("ether", ethers.formatUnits(fieldValue, 18));
      }
    } catch (e) {
      if (fieldChanged === "ether") {
        form.setFieldValue("wei", "NaN");
        form.setFieldValue("gwei", "NaN");
      } else if (fieldChanged === "gwei") {
        form.setFieldValue("wei", "NaN");
        form.setFieldValue("ether", "NaN");
      } else if (fieldChanged === "wei") {
        form.setFieldValue("gwei", "NaN");
        form.setFieldValue("ether", "NaN");
      }
    }
  };

  return (
    <div>
      <Typography.Title>Gwei Calculator</Typography.Title>
      <Form
        onFinish={onFinish}
        onChange={onChange}
        autoComplete="off"
        style={{ maxWidth: 700 }}
        layout="vertical"
        form={form}
      >
        <Form.Item<FieldType> label="Wei" name="wei">
          <Input placeholder="Wei units (wei)" />
        </Form.Item>
        <Form.Item<FieldType> label="Gwei" name="gwei">
          <Input placeholder="Gwei units (gwei)" />
        </Form.Item>
        <Form.Item<FieldType> label="Ether" name="ether">
          <Input placeholder="Ether units (eth)" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default GweiCalculator;
