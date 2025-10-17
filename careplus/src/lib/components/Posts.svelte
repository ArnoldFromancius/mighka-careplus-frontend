<script>
  const posts = [
    {
      user: "Mighka CarePlus",
      time: "2h",
      content: "Just finished a full engine rebuild for a client! 🔧💪",
      image: "https://placehold.co/600x300",
      avatar: "https://placehold.co/50x50"
    },
    {
      user: "Mighka CarePlus",
      time: "1d",
      content: "New diagnostic equipment installed — faster and more accurate results.",
      image: "https://placehold.co/600x300",
      avatar: "https://placehold.co/50x50"
    },
    {
      user: "Mighka CarePlus",
      time: "3d",
      content: "We love seeing our customers satisfied! 😊",
      image: "https://placehold.co/600x300",
      avatar: "https://placehold.co/50x50"
    }
  ];
</script>

<div class="social-feed">
  <h2 class="feed-title">Facebook Updates</h2>

  {#each posts as post}
    <div class="post">
      <div class="post-header">
        <img class="avatar" src={post.avatar} alt="User avatar" />
        <div class="header-text">
          <strong>{post.user}</strong>
          <span class="time">{post.time} ago</span>
        </div>
      </div>

      <p class="content">{post.content}</p>

      {#if post.image}
        <img class="post-image" src={post.image} alt="Post image" />
      {/if}

      <div class="post-actions">
        <button>👍 Like</button>
        <button>💬 Comment</button>
        <button>↗️ Share</button>
      </div>
    </div>
  {/each}
</div>

<style>
  .social-feed {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    overflow-y: auto;
    height: 100%;
  }

  .feed-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.3rem;
    color: #1877f2;
  }

  .post {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 0.8rem;
  }

  .post-header {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 0.5rem;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .header-text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
  }

  .header-text strong {
    font-size: 0.95rem;
    color: #222;
  }

  .time {
    font-size: 0.8rem;
    color: #777;
  }

  .content {
    margin: 0.5rem 0;
    color: #333;
    font-size: 0.95rem;
  }

  .post-image {
    width: 100%;
    border-radius: 8px;
    margin-top: 0.4rem;
  }

  .post-actions {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #eee;
    margin-top: 0.6rem;
    padding-top: 0.4rem;
  }

  .post-actions button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: #65676b;
    font-size: 0.9rem;
    transition: color 0.2s;
  }

  .post-actions button:hover {
    color: #1877f2;
  }
</style>
