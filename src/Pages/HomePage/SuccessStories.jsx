const SuccessStories = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🎓 Success Stories</h2>

      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            background: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          <p>"This scholarship changed my life!"</p>
          <p>- Maria, Brazil</p>
        </div>

        <div
          style={{
            background: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <p>"Found my perfect scholarship in 5 minutes."</p>
          <p>- James, Kenya</p>
        </div>
      </div>

      <button
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        View More Stories
      </button>
    </div>
  );
};

export default SuccessStories;
