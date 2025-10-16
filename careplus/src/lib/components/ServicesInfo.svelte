<script>
  // later you can replace this array with data from the backend or a JSON file
  const services = [
    { name: "Brick Laying", desc: "Quick and accurate fault detection for all vehicle types." },
    { name: "House Wiring", desc: "High-quality oil replacement to keep your engine healthy." },
    { name: "Solar Installation", desc: "Professional wheel balancing and alignment services." },
    { name: "Plumbing Maintenance", desc: "Ensure your vehicle’s safety with detailed brake checks." },
    { name: "Pavers Installation", desc: "We stock trusted brands for long-lasting performance." },
  ];
</script>

<div class="services-info">
  <h2>Our Services</h2>
  <ul>
    {#each services as service}
      <li>
        <h3>{service.name}</h3>
        <p>{service.desc}</p>
      </li>
    {/each}
  </ul>
</div>

<style>
  .services-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .services-info h2 {
    text-align: center;
    margin-bottom: 0.5rem;
    color: aquamarine;
  }

  .services-info ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .services-info li {
    background: #454343;
    color: rgb(255, 255, 255);
    border: 5px solid rgb(156, 109, 47);
    border-radius: 12px;
    padding: 1rem;
    transition: background 0.2s ease;
  }

  .services-info li:hover {
    background: #183a1c;
    
  }
  .services-info h3{
    color: aliceblue;
    text-decoration: underline;
  }
   .services-info li:hover h3 {
    color: rgb(225, 175, 175);
  }
   .services-info li:hover p {
    color: rgba(255, 255, 255, 0.854);
  }

  h3 {
    margin: 0 0 0.3rem 0;
    color: #dbbaba;
  }

  p {
    color: #ddd9d9d7;
    margin: 0;
  }
</style>
