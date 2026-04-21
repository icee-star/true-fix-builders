const ServiceArea = () => {
  return (
    <section className="bg-background" aria-label="Service area">
      <div className="container py-4">
        <p className="text-center text-sm text-muted-foreground sm:text-base">
          Serving homeowners in <span className="text-foreground">Salem</span>,{" "}
          <span className="text-foreground">Portland</span>,{" "}
          <span className="text-foreground">Eugene</span>,{" "}
          <span className="text-foreground">Bend</span>,{" "}
          <span className="text-foreground">Sherwood</span>, and{" "}
          <span className="text-foreground">Lincoln City</span>.
        </p>
      </div>
    </section>
  );
};

export default ServiceArea;
