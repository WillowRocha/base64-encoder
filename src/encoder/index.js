import React from "react";
import { useState } from "react";
import { Button, Wrapper } from "./styles";
import InputTextarea from "../textarea";
import base64 from "base-64";

const EncoderComponent = (props) => {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  const encodeData = () => {
    try {
      setOutputData(base64.encode(inputData));
    } catch (e) {
      alert("Unable to encode provided value");
    }
  };

  const decodeData = () => {
    try {
      setOutputData(base64.decode(inputData));
    } catch (e) {
      alert("Unable to decode provided value");
    }
  };

  return (
    <Wrapper>
      <InputTextarea
        name="inputData"
        label="Input Data"
        type="textarea"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />

      <Button onClick={encodeData}>Encode</Button>
      <Button onClick={decodeData}>Decode</Button>

      <InputTextarea
        name="outputData"
        label="Output Data"
        type="textarea"
        value={outputData}
        onChange={(e) => setOutputData(e.target.value)}
      />
    </Wrapper>
  );
};

export default EncoderComponent;
