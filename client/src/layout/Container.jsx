const Container = ({ children, extraStyles }) => {
  return (
    <div className={`max-w-[1366px] mx-auto w-[95%] ${extraStyles}`}>
      {children}
    </div>
  );
};

export default Container;
