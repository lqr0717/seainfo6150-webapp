import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
  const title = "You can take a pie on a plane";  
  const url =  "https://cdn.cnn.com/cnnnext/dam/assets/170321135754-airport-security-line-file-super-169.jpg";

  it("renders correctly", () => {
    const { container } = render(<ArticleImage title = {title} url = {url} />);
    expect(container).toMatchSnapshot();
  });
});