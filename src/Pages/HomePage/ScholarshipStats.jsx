const ScholarshipStats = () => {
  return (
    <div
      style={{
        padding: "20px",
        background: "#f0f9ff",
        borderRadius: "10px",
        textAlign: "center",
        margin: "20px 0",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>📊 Scholarship Impact</h3>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>1,200+</div>
          <div>Scholarships</div>
        </div>
        <div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>85+</div>
          <div>Countries</div>
        </div>
        <div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>500+</div>
          <div>Success Stories</div>
        </div>
      </div>
    </div>
  );
};
export default ScholarshipStats;
