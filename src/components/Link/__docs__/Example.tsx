import React from "react";
import { Link } from "../";
import { Header } from "../../Header";

const Example = () => {
  return (
    <div className="space-y-4">
      <div>
        <Link href="https://example.com">Simple link text</Link>
      </div>

      <div>
        <Link href="https://example.com" target="_blank">
          Opens in new tab
        </Link>
      </div>

      <div>
        <Link href="https://example.com" className="text-blue-600">
          <Header level={3}>Header inside a link</Header>
        </Link>
      </div>
    </div>
  );
};

export default Example;
