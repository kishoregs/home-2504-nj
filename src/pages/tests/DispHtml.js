import React from "react";
import Page1 from "./testpg1.html";

export default function ShowHtml(props) {
  return <div dangerouslySetInnerHTML={{ __html: Page1 }} />;
}
