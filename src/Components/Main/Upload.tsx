import { UploadOutlined } from "@ant-design/icons";
import React from "react";

const Upload = () => {
  return (
    <div>
      <input
        type="file"
        name="Upload Image"
        id="ImgUpload"
        style={{ display: "none" }}
      />
      <label htmlFor="ImgUpload">
        <span>
          <UploadOutlined />
        </span>
        Upload Cover Image
      </label>
      <span>16:9 ratio is recommeneded, Max Image size 1mb</span>
    </div>
  );
};

export default Upload;
