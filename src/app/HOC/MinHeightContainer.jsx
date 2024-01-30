export const MinHeightContainer = ({ height, children }) => {
  return (
    <div
      className="min-height-container"
      style={{
        minHeight: height,
      }}
    >
      {children}
    </div>
  );
};
