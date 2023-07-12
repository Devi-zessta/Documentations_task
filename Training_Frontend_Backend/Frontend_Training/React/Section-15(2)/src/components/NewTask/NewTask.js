import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../Hooks/Http-hook";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendRequestHandler } = useHttp();
  function createdTask(taskText,taskData) {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText};

    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendRequestHandler(
      {
        url: "https://todo-2-3c390-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createdTask.bind(null,taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
