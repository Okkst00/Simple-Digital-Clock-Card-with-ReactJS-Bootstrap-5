
const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  
  function tick() {
    const element = (
      <div>
        <h3 class="times py-3 text-center"><i class="bi bi-clock-fill"></i> {new Date().toLocaleTimeString()}</h3>
        <h3 class="date py-3 text-end me-2"><i class="bi bi-calendar-minus-fill"></i> {new Date().toLocaleDateString()}</h3>
      </div>
    );
    root.render(element);
  }
  
  setInterval(tick, 1000);

  
