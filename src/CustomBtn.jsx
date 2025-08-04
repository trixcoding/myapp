function CustomBtn({ children, onClick, type = "button", variant = "primary" }) {
  const styles = {
    primary: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
    },
    outline: {
      backgroundColor: "#fff",
      color: "#333",
      border: "1px solid #ccc",
    },
  };

  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        borderRadius: "4px",
        cursor: "pointer",
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
}

export default CustomBtn;
