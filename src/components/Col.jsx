export const Col = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
