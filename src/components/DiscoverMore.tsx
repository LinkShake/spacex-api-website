"use client";

export const DiscoverMore = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        zIndex: 101,
        margin: 0,
        padding: 0,
        paddingBottom: "20px !important",
        // fontSize: "4em",
        top: 0,
        textShadow: "2px 2px black",
        // border: "2px solid red",
      }}
    >
      <button
        onClick={(e) => {
          scrollBy({
            top: e.currentTarget.parentElement?.offsetHeight as number,
            behavior: "smooth",
          });
        }}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          //   fontSize: "4em",
        }}
      >
        <h3
          style={{
            margin: 0,
            padding: 0,
            color: "white",
            textShadow: "2px 2px black",
            fontWeight: "bold",
            fontSize: "2em",
          }}
        >
          MORE
        </h3>
      </button>
    </div>
  );
};
