import { List, Typography } from "antd";
import React from "react";

const NpmPackages = () => {
  const data = [
    {
      name: "UUID To Bytes32 Converter",
      link: "https://www.npmjs.com/package/uuid-to-bytes32",
    },
  ];
  return (
    <div>
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            - <Typography.Text>{item.name}</Typography.Text> -{" "}
            {<a href={item.link}>{item.link}</a>}.
          </List.Item>
        )}
      />
    </div>
  );
};

export default NpmPackages;
