const Animation: React.FC<{ index?: number; children: React.ReactElement }> = ({
  children,
  index = 0,
}) => {
  return (
    <div
      style={{ animationDelay: `${index * 100}ms` }}
      className="animate-slideInLeft opacity-0"
    >
      {children}
    </div>
  );
};

export default Animation;
