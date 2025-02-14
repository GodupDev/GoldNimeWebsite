import { Image } from "antd";
import styled from "styled-components";

const Thumbnail = (props) => {
  return (
    <div style={{ position: "relative", cursor: "pointer" }}>
      <Image
        src={props.image}
        alt="Image"
        width={"100%"}
        style={{ borderRadius: "10px" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(15, 30, 41, 1), rgba(0, 0, 0, 0))",
          color: "white",
          display: "flex",
          justifyContent: "left",
          alignItems: "flex-end",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            width: "50%",
            padding: "20px 30px",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            Spy-Family
          </p>
          <p style={{ fontSie: "18px", backgroundColor: "rgba(0, 0, 0, 0)" }}>
            Corrupt politicians, frenzied nationalists, and other warmongering
            forces constantly jeopardize the thin veneer of peace between
            neighboring countries Ostania and Westalis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
