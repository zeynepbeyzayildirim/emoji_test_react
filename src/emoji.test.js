import React from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import App from "./App";



  test('Header Test', () => {
    render(<Header/>);
    const header = screen.getByText(/Emoji Search/i);
    expect(header).toBeInTheDocument();
  })
  
  test('Emoji list filtering', () => {
    render(<App/>);
    const inputtext = screen.getByText('1234');
    expect(inputtext).toBeInTheDocument('1234');
  })
  
  test('Emoji List',()=>{
    render(<App/>);
    const emoji = screen.getAllByTestId("row");
    expect(emoji.length).toEqual(20);

  })

  test('Click',()=>{
    render(<App/>);
    const Click=screen.getAllByAltText("row");
    expect(Click[0]).toHaveAttribute("data-clipboard-text");
  })