import React from "react";

function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        backgroundImage: `url(${require("./assets/images/background.jpeg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          position: "absolute",
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
        }}
      />
      <h1 style={{ color: "white", zIndex: 1, fontFamily: "monospace" }}>
        cangurel.dev
      </h1>
    </div>
  );
}

export default App;
