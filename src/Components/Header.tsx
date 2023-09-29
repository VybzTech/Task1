import React, { useState } from "react";

const Header = () => {
  const Headers = [
    "program details",
    "application form",
    "workflow",
    "preview",
  ];
  const [active, set] = useState<string>(Headers[1]);
  return (
    <header>
      {Headers?.map((head) => (
        <div className={`header ${active&&head?'active':''}`}>{head}</div>
      ))}
    </header>
  );
};

export default Header;
