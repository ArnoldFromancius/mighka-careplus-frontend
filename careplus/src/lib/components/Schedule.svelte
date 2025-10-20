<section class="schedule-section">
  <header class="schedule-header">
    <h2>Maintenance Schedule</h2>
    <button class="add-btn">+ New Request</button>
  </header>

  <div class="schedule-tabs">
    <button class="active">Upcoming</button>
    <button>Completed</button>
  </div>

  <div class="schedule-list">
    <!-- Repeated entries -->
    <div class="schedule-item">
      <div class="item-left">
        <h3>Plumbing Checkup</h3>
        <p>Monday, Oct 21 – 10:00 AM</p>
        <small>Technician: Samuel K.</small>
      </div>
      <div class="item-right status-pending">Pending</div>
    </div>

    <div class="schedule-item">
      <div class="item-left">
        <h3>Roof Leak Inspection</h3>
        <p>Wednesday, Oct 23 – 2:00 PM</p>
        <small>Technician: M. Banda</small>
      </div>
      <div class="item-right status-inprogress">In Progress</div>
    </div>
  </div>
</section>

<style lang="css">

    .schedule-section {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    padding: 1rem;
    }

    .schedule-header {
    display: flex;
    color: burlywood;
    justify-content: space-between;
    align-items: center;
    }

    .schedule-tabs {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    }

    .schedule-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    }

    .schedule-item {
    display: flex;
    justify-content: space-between;
    background: #f6f6f6;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .status-pending {
    color: #c77800;
    }

    .status-inprogress {
    color: #0077b6;
    }

    .status-complete {
    color: #2e7d32;
    }

</style>