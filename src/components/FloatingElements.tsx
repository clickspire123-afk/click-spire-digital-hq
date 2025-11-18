const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" 
           style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-secondary/10 rounded-full blur-xl animate-float-slow" 
           style={{ animationDelay: "2s" }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl animate-float" 
           style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl animate-float-slow" 
           style={{ animationDelay: "1.5s" }} />
    </div>
  );
};

export default FloatingElements;
