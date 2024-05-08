import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const tools = [
    {
      title: "Private Key to Public Key",
    },
    {
      title: "Seed phrase to Private Key",
    },
    {
      title: "Gwei Calculator",
    },
    {
      title: "Keccak256 Calculator",
    },
  ];

  const handleChooseTool = (title: string) => {
    const href = title.split(" ").join("-").toLowerCase();
    navigate(href);
  };

  return (
    <div>
      <Typography.Title>Ethereum Online Tools</Typography.Title>
      <Row gutter={16}>
        {tools.map(({ title }) => (
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
