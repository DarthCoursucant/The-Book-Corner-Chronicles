document.getElementById('showMoreBtn').addEventListener('click', function() {
    const hiddenPosts = document.querySelectorAll('.hidden-posts .hidden');
    if (hiddenPosts.length > 0) {
        hiddenPosts[0].classList.remove('hidden');
    } else {
        this.textContent = 'No more posts to show';
        this.disabled = true; // Optionally disable the button
    }
});