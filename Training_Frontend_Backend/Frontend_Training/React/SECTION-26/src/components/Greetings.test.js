import { render } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from '@testing-library/user-event';
import { screen } from "@testing-library/react";

describe("Greetings component", () => {
  test("renders Hello world as a test", () => {
    //Arrange
    render(<Greetings />);

    //Act

    //Assert
    const HelloWorldElement = screen.getByText("Hello world", { exact: false });
    expect(HelloWorldElement).toBeInTheDocument();
  });
  test("renders It's good to see you if a button is not pressed",()=>{
    render(<Greetings />);
    const outputElement = screen.getByText("It's good to see you");
    expect(outputElement).toBeInTheDocument();

  });
  test("renders Changed if the button is pressed",()=>{
    //Arrange
   render(<Greetings/>);
   //act
   const buttonElement=screen.getByRole('button');
   userEvent.click(buttonElement);

   //assert
   const ButtonOutput = screen.getByText("Changed",{exact:false});
    expect(ButtonOutput).toBeInTheDocument();

  });
  test("does not render It's good to see you if the button was pressed",()=>{
     //Arrange
   render(<Greetings/>);
   //act
   const buttonElement=screen.getByRole('button');
   userEvent.click(buttonElement);

   //assert
   const ButtonOutput = screen.queryByText("It's good to see you");
    expect(ButtonOutput).not.toBeInTheDocument(); // expect(ButtonOutput).toBeNull();
  })
});
