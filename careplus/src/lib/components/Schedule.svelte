<script lang="ts">
	let activeTab = 'upcoming';
	let showModal = false;

	let schedules = [
		{
			id: 1,
			title: 'Plumbing Checkup',
			date: 'Mon, Oct 21',
			time: '10:00 AM',
			status: 'pending',
			technician: 'Samuel K.'
		},
		{
			id: 2,
			title: 'Roof Leak Inspection',
			date: 'Wed, Oct 23',
			time: '2:00 PM',
			status: 'inprogress',
			technician: 'M. Banda'
		},
		{
			id: 3,
			title: 'Electrical Maintenance',
			date: 'Tue, Oct 15',
			time: '3:30 PM',
			status: 'complete',
			technician: 'T. Zulu'
		},
		{
			id: 4,
			title: 'Electrical Maintenance',
			date: 'Tue, Oct 15',
			time: '3:30 PM',
			status: 'inprogress',
			technician: 'T. Zulu'
		},
		{
			id: 5,
			title: 'Electrical Maintenance',
			date: 'Tue, Oct 15',
			time: '3:30 PM',
			status: 'complete',
			technician: 'T. Zulu'
		}
	];

	let newRequest = {
		title: '',
		date: '',
		time: '',
		description: ''
	};

	function filteredSchedules() {
		if (activeTab === 'upcoming') return schedules.filter(s => s.status !== 'complete');
		if (activeTab === 'completed') return schedules.filter(s => s.status === 'complete');
		return schedules;
	}

	function openModal() {
		newRequest = { title: '', date: '', time: '', description: '' };
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}

	function submitRequest() {
		if (!newRequest.title || !newRequest.date || !newRequest.time) return;

		schedules = [
			...schedules,
			{
				id: Date.now(),
				title: newRequest.title,
				date: newRequest.date,
				time: newRequest.time,
				status: 'pending',
				technician: 'Unassigned'
			}
		];
		closeModal();
	}

</script>

<section class="schedule-section">
	<header class="schedule-header">
		<h2>Maintenance Schedule</h2>
		<button class="add-btn" on:click={openModal}>+ New Request</button>
	</header>

	<div class="schedule-tabs">
		<button
			class:active={activeTab === 'upcoming'}
			on:click={() => (activeTab = 'upcoming')}
			>Upcoming</button
		>
		<button
			class:active={activeTab === 'completed'}
			on:click={() => (activeTab = 'completed')}
			>Completed</button
		>
	</div>

	<div class="schedule-list">
	
	
	<!-- /* Placeholder items.
		{#each filteredSchedules() as item}
			<div class="schedule-item">
				<div class="item-left">
					<h3>{item.title}</h3>
					<p>{item.date} – {item.time}</p>
					<small>Technician: {item.technician}</small>
				</div>
				<div class="item-right {`status-${item.status}`}">
					{#if item.status === 'pending'}Pending{/if}
					{#if item.status === 'inprogress'}In Progress{/if}
					{#if item.status === 'complete'}Complete{/if}
				</div>
			</div>
		{/each}
	*/ -->
	</div>

	{#if showModal}
		<div class="modal-backdrop" on:click={closeModal}></div>
		<div class="modal">
			<h3>New Maintenance Request</h3>

			<label>
				<span>Title</span>
				<input type="text" bind:value={newRequest.title} placeholder="e.g. AC Unit Checkup" />
			</label>

			<div class="row">
				<label>
					<span>Date</span>
					<input type="date" bind:value={newRequest.date} />
				</label>
				<label>
					<span>Time</span>
					<input type="time" bind:value={newRequest.time} />
				</label>
			</div>

			<label>
				<span>Description (optional)</span>
				<textarea bind:value={newRequest.description} rows="3" />
			</label>

			<div class="modal-actions">
				<button class="cancel-btn" on:click={closeModal}>Cancel</button>
				<button class="save-btn" on:click={submitRequest}>Save</button>
			</div>
		</div>
	{/if}
</section>

<style>
	/* --- Layout --- */
	.schedule-section {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 1rem;
		overflow-y: hidden;
	}

	.schedule-header {
		display: flex;
		color: #c77800;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 1.2rem;
		font-weight: 600;
	}

	.add-btn {
		background-color: #0077b6;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: 0.2s;
	}
	.add-btn:hover {
		background-color: #005f8e;
	}

	/* --- Tabs --- */
	.schedule-tabs {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.schedule-tabs button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem 0.8rem;
		border-bottom: 2px solid transparent;
		font-weight: 500;
		font-size: 0.9rem;
		color: #727272;
	}
	.schedule-tabs button.active {
		color: #0077b6;
		border-bottom: 2px solid #0077b6;
	}

	/* --- List --- */
	.schedule-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow-y: auto;
	}

	.schedule-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #f6f6f6;
		padding: 1rem;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.item-left h3 {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
	}
	.item-left p {
		margin: 0.2rem 0;
		color: #555;
		font-size: 0.85rem;
	}
	.item-left small {
		color: #888;
	}

	.item-right {
		font-weight: 600;
		font-size: 0.9rem;
		text-transform: capitalize;
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

	/* --- Modal --- */
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 10;
	}

	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		padding: 1.5rem;
		border-radius: 12px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
		width: 90%;
		max-width: 400px;
		z-index: 11;
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
	}

	.modal h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.1rem;
		font-weight: 600;
		color: #222;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		font-size: 0.85rem;
		color: #444;
	}

	input,
	textarea {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 6px;
		font-size: 0.9rem;
	}

	.row {
		display: flex;
		gap: 0.5rem;
	}

	.modal-actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.6rem;
		margin-top: 0.5rem;
	}

	.cancel-btn,
	.save-btn {
		padding: 0.5rem 0.9rem;
		border-radius: 6px;
		border: none;
		cursor: pointer;
		font-weight: 500;
		font-size: 0.9rem;
	}
	.cancel-btn {
		background: #eee;
		color: #333;
	}
	.save-btn {
		background: #0077b6;
		color: white;
	}
</style>
