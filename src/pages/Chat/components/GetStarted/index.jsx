import React from "react";
import { Card, Flex, Typography, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import BotImg from "@/assets/img/get-started/bot.png";
import { GOAL_LIST } from "@/constants";
import { setGoal } from "@/store/slices/ChatSlice";

const GetStarted = () => {
  const GoalCard = ({ image, title, goal }) => {
    const dispatch = useDispatch();

    return (
      <Card
        className="goal-item"
        style={{ width: 300, padding: "20px 30px" }}
        styles={{
          body: {
            padding: 0,
          },
        }}
        onClick={() => {
          dispatch(setGoal(goal));
        }}
      >
        <Flex align="center" gap={20}>
          <img src={image} alt={title} />
          <Typography.Title level={5} style={{ margin: 0 }}>
            {title}
          </Typography.Title>
        </Flex>
      </Card>
    );
  };

  return (
    <Flex
      align="center"
      justify="center"
      vertical
      style={{ maxWidth: 900, width: "100%" }}
    >
      <img src={BotImg} alt="bot-image" />
      <Typography.Title level={1}>Welcome To MoneyBot!</Typography.Title>
      <Typography.Text style={{ color: "#666666", textAlign: "center" }}>
        Welcome to MoneyBot! Your smart financial companion for effortless money
        management. Enjoy personalized insights and automated actions to help
        you achieve your financial goals.
      </Typography.Text>

      <Row className="goal-container">
        {GOAL_LIST.map((goal, index) => (
          <Col key={index} span={24} lg={12} style={{ padding: 5 }}>
            <GoalCard image={goal.image} title={goal.title} goal={goal.goal} />
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default GetStarted;
