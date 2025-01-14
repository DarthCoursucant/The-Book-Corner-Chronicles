document.getElementById('showMoreBtn').addEventListener('click', function() {
    const hiddenPosts = document.querySelectorAll('.hidden-posts .hidden');
    // Determine how many posts to reveal
    const postsToReveal = Math.min(3, hiddenPosts.length); // Reveal up to 3 posts

    for (let i = 0; i < postsToReveal; i++) {
        hiddenPosts[i].classList.remove('hidden');
    }
    
    // If no more hidden posts are left, update button text and disable it
    if (hiddenPosts.length <= 3) {
        this.textContent = 'No more posts to show';
        this.disabled = true; // Optionally disable the button
    }
});
