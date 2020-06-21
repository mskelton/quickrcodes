/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Header } from "./components/Header";
import { QRCodeGenerator } from "./components/QRCodeGenerator";

export function App() {
  return (
    <div className="container" css={{ marginTop: 32 }}>
      <div className="row">
        <div className="col-md-12">
          <Header />
          <QRCodeGenerator />
        </div>
      </div>
    </div>
  );
}
