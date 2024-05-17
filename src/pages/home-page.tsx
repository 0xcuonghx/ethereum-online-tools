import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const accountTools = [
    {
      title: "Private Key to Public Key",
    },
    {
      title: "Seed phrase to Private Key",
    },
  ];

  const utilsTools = [
    {
      title: "Gwei Calculator",
    },
    {
      title: "Keccak256 Calculator",
    },
    {
      title: "String To Bytes32",
    },
  ];

  const handleChooseTool = (title: string) => {
    const href = title.split(" ").join("-").toLowerCase();
    navigate(href);
  };

  return (
    <div>
      <Typography.Title>Ethereum Online Tools</Typography.Title>
      <Typography.Title level={2}>Account Tools</Typography.Title>
      <Row gutter={16}>
        {accountTools.map(({ title }) => (
          <Col className="gutter-row" span={6}>
            <Card
              bordered={false}
              hoverable
              onClick={() => handleChooseTool(title)}
            >
              {title}
            </Card>
          </Col>
        ))}
      </Row>
      <Typography.Title level={2}>Utils Tools</Typography.Title>
      <Row gutter={16}>
        {utilsTools.map(({ title }) => (
          <Col className="gutter-row" span={6}>
            <Card
              bordered={false}
              hoverable
              onClick={() => handleChooseTool(title)}
            >
              {title}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
