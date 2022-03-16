
import { render } from "@testing-library/react";
import Footer from "../components/Shared/Footer/Footer";


describe("dekha jak ki hoy", () => {
  it("Renders the footer section", () => {
    const { container } = render(<Footer/>);
    expect(container.textContent).toBe(
      " I’m available for commissions and collaborations, and i’m excited to hear from you about new projects.Quick linksAbout usAsk QuestionContact UsHelp DeskQuick linksDocumentationBlogs404 PageHelp DeskContact UsDocy Centre, Gulshan, DhakaOfficial: profolks@gmail.comHelpline : 01887403752© Copyright 2022 All Rights Reserved by Programming "
     
    );
  });
});

