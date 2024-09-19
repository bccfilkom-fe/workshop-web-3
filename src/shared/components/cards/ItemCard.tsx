import React from "react";
import { Card, Button } from "antd";
import { InfoCircleOutlined, DeleteOutlined } from "@ant-design/icons";

interface ItemCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  authorOrSeller: string;
  onDetail: (id: string) => void;
  onDelete: (id: string) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  image,
  title,
  category,
  authorOrSeller,
  onDetail,
  onDelete,
}) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={title}
          src={image}
          className="h-40 object-cover w-full rounded-t-lg"
        />
      }
      className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[300px]"
      actions={[
        <Button type="link" icon={<InfoCircleOutlined />} onClick={() => onDetail(id)}>
          Update
        </Button>,
        <Button type="link" icon={<DeleteOutlined />} onClick={() => onDelete(id)} danger>
          Delete
        </Button>,
      ]}
    >
      <div className="p-3">
        <Card.Meta
          title={<h3 className="text-lg font-bold text-center uppercase">{title}</h3>}
          description={
            <div className="text-center flex flex-col justify-center items-center gap-2">
              <p className="text-sm text-black bg-blue-200 rounded-full py-1 px-4 min-w-[100px] w-fit capitalize">
                {category}
              </p>
              <p className="text-sm text-gray-500">{authorOrSeller}</p>
            </div>
          }
        />
      </div>
    </Card>
  );
};

export default ItemCard;
